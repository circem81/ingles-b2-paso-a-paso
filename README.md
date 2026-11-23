# Inglés B2 paso a paso

Práctica gratuita de inglés B2 en sesiones cortas, con el formato del examen Aptis. App no oficial.

- App publicada: https://wondrous-granita-f7e43f.netlify.app/
- Es una PWA estática (HTML + service worker): funciona sin conexión una vez cargada.

## Archivos
- `index.html` – la app completa
- `sw.js` – service worker (copia sin conexión). Cambia `VERSION` al publicar una actualización.
- `audio/` – 72 audios del Listening grabados con voces neuronales británicas (si falta alguno, la app usa la voz del navegador)
- `manifest.webmanifest`, `icons/`, `fonts/` – instalación como app y recursos
