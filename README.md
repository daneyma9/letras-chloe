# Letras con Lila

Juego para aprender letras, sílabas, palabras y números, con voz en español y Lila la unicornio.

- **Camino guiado** con dos carriles (10 paradas de letras y 6 de números). Cada sesión mezcla letras, números, repaso, escribir una palabra con el dedo y una palabra de la familia, con repaso espaciado (1, 2, 4, 7 y 14 días).
- **Juego libre**: buscar letras y números, sílabas, formar palabras, contar y repasar con el dedo.
- **Zona de mayores**: progreso, palabras propias y cuenta.
- **Progreso en internet** con contraseña de familia (Supabase), y funciona sin conexión.

## Archivos

- `index.html`: todo el juego.
- `config.js`: dirección y clave pública del proyecto de Supabase.
- `supabase.sql`: tabla y funciones de la base de datos.
- `art/`: ilustraciones originales (SVG). Tras cambiarlas, `node art/build.js` las mete en `index.html`.
- `sw.js`, `manifest.webmanifest`, `icon-*.png`: app instalable y uso sin conexión.

Sin `config.js` relleno, el juego funciona guardando solo en el dispositivo.
