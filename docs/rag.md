# RAG en el chat del CV — cuándo sí y cómo

> **Estado: en pausa.** Pertenece a la propuesta del chat con IA local, que quedó aparcada al pasar el proyecto a una landing page (ver [README](../README.md)). Se mantiene como anexo técnico.

## Respuesta corta

Sí, Spring AI 1.0.0 + Ollama permiten RAG sin cambiar de stack. Pero para un CV de 1–3 páginas **el prompt completo suele ser más preciso**: no hay riesgo de que la búsqueda omita justo el dato que se pregunta.

RAG empieza a valer la pena cuando:

- El material crece más allá del CV: proyectos, certificados, artículos, blog.
- Hay varias versiones (español/inglés) o muchos documentos.
- Quieres aprender el pipeline real de RAG (motivo totalmente válido).

---

## Qué es RAG en 4 pasos

1. **Ingesta:** dividir el CV en fragmentos (chunks).
2. **Embeddings:** convertir cada chunk en un vector con un modelo de embeddings (`nomic-embed-text` en Ollama).
3. **Almacenamiento:** guardar los vectores en memoria (`SimpleVectorStore`) o en PostgreSQL con `pgvector`.
4. **Consulta:** convertir la pregunta en vector, recuperar los `top-k` fragmentos más parecidos e inyectar **solo esos** en el prompt.

Diferencia clave con el MVP:

| | Prompt completo | RAG |
|---|---|---|
| Contexto que ve el modelo | Todo el CV | Solo los fragmentos recuperados |
| Riesgo principal | Contexto truncado si el CV es enorme | Recuperar el fragmento equivocado |
| Infraestructura | Ninguna | Vector store (memoria o DB) |
| Latencia extra | 0 | Embedding de la pregunta + búsqueda |
| Cuándo brilla | Corpus pequeño | Corpus grande o cambiante |

---

## Dos variantes para este proyecto

### Variante A — RAG en memoria (recomendada para aprender)

- `SimpleVectorStore` + `OllamaEmbeddingModel`, sin base de datos.
- Al arrancar: leer `cv.md`, dividirlo, generar embeddings y cargarlos.
- Al preguntar: buscar `top-k` y armar el contexto.
- Ventaja: se ve todo el pipeline, cero infraestructura.
- Coste: reindexa en cada arranque (~1–3 s para un CV) y no persiste entre instancias.

### Variante B — RAG con pgvector (persistente)

- PostgreSQL con extensión `vector` (imagen `pgvector/pgvector:pg16`).
- Artefacto `spring-ai-starter-vector-store-pgvector`.
- Ventaja: índice persistente, no recalcula embeddings, escala a muchos documentos.
- Coste: base de datos, esquema, sincronización cuando cambia el CV.

| Criterio | A: memoria | B: pgvector |
|---|---|---|
| Infraestructura | Ninguna | PostgreSQL + extensión |
| Persistencia | No | Sí |
| Reindexar | En cada arranque | Solo al cambiar el CV |
| Complejidad | Baja | Media |
| Recomendado para | Aprender / MVP+ | Portafolio grande / producción |

---

## Diseño recomendado si haces RAG sobre un CV

1. **Chunk por sección, no por tokens ciegos.** Un chunk por empresa, proyecto o bloque de formación. Así el fragmento recuperado ya tiene sentido completo.
2. **Metadatos útiles:** `seccion`, `empresa`, `fechas`. Permiten citar la fuente y depurar.
3. **Híbrido:** inyecta siempre `Perfil` y `Contacto`, y recupera `top-k` para el resto. Las preguntas de identidad ("¿quién eres?") no deberían depender de una búsqueda.
4. **Cita la fuente:** pide al modelo terminar con `Fuente: Experiencia – Acme`. El usuario puede verificar.
5. **Endpoint de depuración:** `GET /api/rag/search?q=...` que devuelva fragmentos y puntuaciones. Sin esto, depurar RAG es a ciegas.

---

## Snippets (Spring AI 1.0.0)

### Dependencias

```xml
<!-- Variante A -->
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-vector-store</artifactId>
</dependency>

<!-- Variante B (además de la anterior) -->
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-starter-vector-store-pgvector</artifactId>
</dependency>
```

`spring-ai-ollama` ya trae `OllamaEmbeddingModel`; no hace falta otra dependencia de IA.

### Modelo de embeddings

```bash
ollama pull nomic-embed-text
```

```yaml
spring:
  ai:
    ollama:
      embedding:
        options:
          model: nomic-embed-text
```

### Vector store en memoria

```java
@Configuration
public class RagConfig {

    @Bean
    VectorStore vectorStore(EmbeddingModel embeddingModel) {
        return SimpleVectorStore.builder(embeddingModel).build();
    }
}
```

### Indexación por secciones del CV

```java
@Component
public class CvIndexer {

    private final VectorStore vectorStore;
    private final CvContextProvider cvContextProvider;

    @PostConstruct
    void index() {
        List<Document> chunks = Arrays.stream(cvContextProvider.text().split("(?m)^## "))
                .filter(section -> !section.isBlank())
                .map(section -> new Document(
                        "## " + section,
                        Map.of("seccion", section.lines().findFirst().orElse("sin-titulo"))))
                .toList();

        vectorStore.add(chunks);
    }
}
```

### Recuperación y prompt

```java
public String contextFor(String question) {
    SearchRequest request = SearchRequest.builder()
            .query(question)
            .topK(4)
            .similarityThreshold(0.45)
            .build();

    List<Document> hits = vectorStore.similaritySearch(request);
    return hits.stream()
            .map(Document::getText)
            .collect(Collectors.joining("\n\n---\n\n"));
}
```

El `CvChatService` solo cambia una línea: en vez de `cvContextProvider.text()`, usa `retriever.contextFor(question)` dentro del system prompt.

> `QuestionAnswerAdvisor` hace esto automáticamente, pero está pensado para `ChatClient`. Como el orquestador usa `ChatModel` directo, la recuperación manual es más transparente y fácil de depurar.

---

## Cómo saber si RAG mejora algo

1. Arma 10–15 preguntas con respuesta esperada sacada del CV.
2. Ejecuta con prompt completo y con RAG.
3. Compara: correctas, inventadas, omitidas y latencia.
4. **Métrica clave: recall de recuperación.** ¿La sección correcta aparece en el top-k? Si no, el problema es el chunking, no el modelo.
5. Si el prompt completo acierta el 100 % y el CV cabe en contexto, RAG no aporta.

Puedes dejar ambas rutas detrás de una bandera `cv.rag.enabled` (por defecto `false`) y comparar sin romper el MVP.

---

## Riesgos y costes

- Descarga del modelo de embeddings (`nomic-embed-text`, ~274 MB).
- Latencia extra en CPU: embedding de la pregunta + búsqueda (~100–400 ms).
- Un chunk mal cortado produce respuestas seguras pero incorrectas.
- RAG **no elimina alucinaciones**: sigue haciendo falta el system prompt estricto.
- pgvector añade una base de datos que mantener.

---

## Plan por fases (si decides implementarlo)

| Fase | Entregable | Cierre |
|---|---|---|
| R1 | Interfaz `CvRetriever` + implementación `FullCvRetriever` (comportamiento actual) | El chat funciona igual, sin RAG |
| R2 | `InMemoryRagRetriever`, indexador y `/api/rag/search` | Se ven los chunks recuperados por pregunta |
| R3 | Set de evaluación y comparación prompt vs RAG | Decisión documentada de cuál queda por defecto |
| R4 | pgvector (solo si hace falta persistencia) | Índice persiste tras reiniciar |

**Recomendación:** termina primero el MVP con prompt completo. Si el objetivo es aprender RAG, haz R1–R3 después: son ~1–2 días, ves el pipeline completo y decides con datos propios. pgvector solo cuando el contenido deje de ser un CV.
