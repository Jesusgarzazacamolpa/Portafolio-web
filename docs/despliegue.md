# Despliegue de la landing en Vercel

Guía para publicar esta landing (React + Vite, sitio estático) en **Vercel** con dominio propio y despliegues automáticos desde GitHub.

> **Estado del proyecto:** el sitio aún no es un repositorio git. Los pasos 1–3 cubren esa parte.

## 1. Requisitos

- Cuenta gratuita en [vercel.com](https://vercel.com) (puedes entrar con GitHub).
- Cuenta de GitHub con el código subido.
- Node.js 20.19+ o 22.12+ (Vite 8 lo requiere). Localmente ya usas Node 24.
- `npm run build` funcionando en local.

## 2. Verificar el build en local

Antes de publicar, confirma que el proyecto compila igual que lo hará Vercel:

```bash
npm ci
npm run build
npm run preview   # revisa http://localhost:4173
```

El build del proyecto es `tsc --noEmit && vite build` y genera la carpeta `dist/`. Si el typecheck falla, Vercel también fallará.

## 3. Subir el código a GitHub

El proyecto todavía no es un repositorio git. Desde la raíz del proyecto:

```bash
git init
```

Crea un archivo `.gitignore` para no subir dependencias ni artefactos:

```gitignore
node_modules
dist
.vercel
*.log
.DS_Store
```

Luego:

```bash
git add .
git commit -m "Landing CV inicial"
git branch -M main
git remote add origin https://github.com/Jesusgarzazacamolpa/cv-landing.git
git push -u origin main
```

Crea el repositorio vacío `cv-landing` en GitHub antes del `push` (sin README ni .gitignore, para evitar conflictos). Puede ser privado: Vercel accede igual con tu cuenta.

## 4. Conectar Vercel

1. En Vercel, **Add New → Project**.
2. Importa el repositorio `cv-landing`.
3. Vercel detecta **Vite** automáticamente. Verifica:

   | Ajuste | Valor |
   |---|---|
   | Framework Preset | Vite |
   | Install Command | `npm install` |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Node.js Version | 22.x (o 20.19+) |

4. Pulsa **Deploy**. En 1–2 minutos tendrás una URL `https://cv-landing-xxxx.vercel.app`.

No hay variables de entorno: el sitio es 100 % estático y todo el contenido vive en `src/data/`.

## 5. Despliegues automáticos

Cada `git push` a `main` dispara un despliegue de producción. Las ramas y pull requests generan *preview deployments* con su propia URL, útiles para revisar cambios antes de publicarlos.

```bash
git add .
git commit -m "Actualiza portafolio"
git push
```

## 6. Dominio propio (opcional)

1. En el proyecto de Vercel: **Settings → Domains → Add**.
2. Escribe tu dominio (por ejemplo `jesusgarza.dev`) y sigue las instrucciones de DNS que muestra Vercel:
   - Dominio raíz (`@`): registro **A** apuntando a `76.76.21.21`.
   - Subdominio (`www`): registro **CNAME** apuntando a `cname.vercel-dns.com`.
3. Vercel emite el certificado HTTPS automáticamente al propagarse el DNS.

Usa los valores exactos que muestre el panel; pueden variar según la región del proyecto.

## 7. Routing y rutas

La landing usa solo anclas (`#inicio`, `#contacto`, etc.), no rutas del navegador, así que **no necesita configuración extra**.

Si más adelante agregas React Router u otra navegación en cliente, añade un `vercel.json` en la raíz para redirigir todo a `index.html`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## 8. Alternativas de hosting

| Plataforma | Cuándo conviene |
|---|---|
| **Netlify** | Arrastrar `dist/` sin git para una demo rápida (Netlify Drop) |
| **GitHub Pages** | Si prefieres no usar otro servicio; repo público y `base: "/cv-landing/"` en `vite.config.ts` si el sitio queda en subruta |
| **Cloudflare Pages** | CDN rápido y sin límite de ancho de banda en el plan gratuito |

Vercel sigue siendo la opción principal por el deploy automático, HTTPS y dominio propio sin configuración.

## 9. Checklist antes de publicar

- [ ] `npm run build` pasa sin errores.
- [ ] El correo y las URLs del portafolio en `src/data/` son los definitivos.
- [ ] `.gitignore` incluye `node_modules` y `dist`.
- [ ] El repositorio está en GitHub y es accesible desde Vercel.
- [ ] El proyecto de Vercel usa `dist` como Output Directory.
- [ ] El dominio (si aplica) apunta a Vercel y el HTTPS está activo.

## 10. Problemas comunes

| Síntoma | Causa y solución |
|---|---|
| `UNABLE_TO_VERIFY_LEAF_SIGNATURE` al instalar | Intercepción TLS de tu red local. Es un problema del equipo, no de Vercel; en local usa `npm install --strict-ssl=false` |
| Build falla por TypeScript | Vercel ejecuta `tsc --noEmit`; corrige los errores que también verías en local con `npm run build` |
| 404 al recargar en una ruta | Solo ocurre con rutas de navegador; aplica el `rewrites` del paso 7 |
| Estilos o imágenes rotas en GitHub Pages | Falta configurar `base` en `vite.config.ts` para la subruta del repo |
| El deploy publica una versión vieja | Revisa que el push llegó a `main` y que Vercel está conectado a esa rama |
