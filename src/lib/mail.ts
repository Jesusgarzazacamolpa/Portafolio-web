import { profile } from "../data/cv";

const SUBJECT = "Contacto desde tu portafolio web";
const BODY = [
  "Hola Jesús,",
  "",
  "Vi tu portafolio y me gustaría conversar sobre...",
  "",
  "Nombre:",
  "Empresa:",
  "Mensaje:",
  "",
  "Saludos.",
].join("\n");

const params = `subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

export const mailtoLink = `mailto:${profile.email}?${params}`;

export const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(
  SUBJECT,
)}&body=${encodeURIComponent(BODY)}`;
