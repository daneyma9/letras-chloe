// Batch B: mar, cielo, plantas y cosas mágicas. Each entry: 'emoji': W(`...`), // nombre
module.exports = ({ C, S, T, F, W }) => ({
  '🐠': W(`<path d="M70 52 L92 32 Q87 52 92 72 Z" fill="${C.butter}" ${S}/>
    <path d="M32 33 Q44 12 62 34 Z" fill="${C.butter}" ${S}/><path d="M40 72 Q50 88 60 71 Z" fill="${C.butter}" ${S}/>
    <ellipse cx="44" cy="52" rx="34" ry="24" fill="${C.peach}" ${S}/>
    <path d="M45 28.5 Q51 52 45 75.5 L55 74.5 Q61 52 55 29.5 Z" fill="${C.white}" stroke="${C.ink}" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M64 33 Q69 52 64 71 L71 66 Q75 52 71 38 Z" fill="${C.white}" stroke="${C.ink}" stroke-width="2.4" stroke-linejoin="round"/>
    <ellipse cx="44" cy="52" rx="34" ry="24" fill="none" ${S}/>
    ${F(27, 51, 0.85, 8)}`), // pez tropical
  '👸': W(`<path d="M17 60 C13 32 32 19 50 19 C68 19 87 32 83 60 C85 78 79 91 70 91 L30 91 C21 91 15 78 17 60Z" fill="${C.brown}" ${S}/>
    <circle cx="50" cy="60" r="25" fill="${C.peachL}" ${S}/>
    <path d="M25 56 C26 40 38 33 50 33 C62 33 74 40 75 56 C64 53 56 47 50 40 C44 47 36 53 25 56Z" fill="${C.brown}" ${S}/>
    <path d="M32 30 L27 9 L40 19 L50 6 L60 19 L73 9 L68 30 Z" fill="${C.butter}" ${S}/>
    <circle cx="50" cy="22" r="3.2" fill="${C.pink}"/><circle cx="38" cy="25" r="2.2" fill="${C.sky}"/><circle cx="62" cy="25" r="2.2" fill="${C.sky}"/>
    ${F(50, 65, 1, 10)}`), // princesa
  '🧚': W(`<ellipse cx="24" cy="48" rx="13" ry="19" transform="rotate(-35 24 48)" fill="${C.skyL}" ${S}/><ellipse cx="76" cy="48" rx="13" ry="19" transform="rotate(35 76 48)" fill="${C.skyL}" ${S}/>
    <ellipse cx="28" cy="72" rx="9" ry="13" transform="rotate(40 28 72)" fill="${C.lilacL}" ${S}/><ellipse cx="72" cy="72" rx="9" ry="13" transform="rotate(-40 72 72)" fill="${C.lilacL}" ${S}/>
    <path d="M50 50 L33 87 Q50 95 67 87 Z" fill="${C.pink}" ${S}/>
    <path d="M62 66 L82 28" ${T}/>
    <path d="M84 12 L86.9 18 L93.5 18.9 L88.8 23.5 L89.9 30.1 L84 27 L78.1 30.1 L79.2 23.5 L74.5 18.9 L81.1 18 Z" fill="${C.butter}" stroke="${C.ink}" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M28 38 C26 14 74 14 72 38 C73 48 70 54 66 56 L34 56 C30 54 27 48 28 38Z" fill="${C.butter}" ${S}/>
    <circle cx="50" cy="38" r="17" fill="${C.peachL}" ${S}/>
    <path d="M33 37 C35 25 44 20 50 20 C58 20 65 25 67 37 C59 35 53 31 49 26 C45 32 40 35 33 37Z" fill="${C.butter}" ${S}/>
    ${F(50, 43, 0.8, 8)}`), // hada
  '🌙': W(`<path d="M60 12 A41 41 0 1 0 88 60 A31 31 0 0 1 60 12Z" fill="${C.butter}" ${S}/>
    ${F(36, 58, 0.9, 9)}
    <path d="M80 14 Q81.5 19.5 87 21 Q81.5 22.5 80 28 Q78.5 22.5 73 21 Q78.5 19.5 80 14Z" fill="${C.butterL}" stroke="${C.ink}" stroke-width="2.4" stroke-linejoin="round"/>`), // luna
  '☁️': W(`<path d="M26 78 C8 78 4 56 20 51 C16 33 38 24 48 37 C56 20 82 25 79 46 C97 46 98 78 76 78 Z" fill="${C.white}" ${S}/>
    <path d="M22 70 Q14 68 15 60" stroke="${C.skyL}" stroke-width="4" fill="none" stroke-linecap="round"/>
    ${F(50, 58)}`), // nube
  '☀️': W(`<g fill="${C.peach}" ${S}>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<path d="M42 24 L50 7 L58 24 Z" transform="rotate(${a} 50 50)"/>`).join('')}</g>
    <circle cx="50" cy="50" r="28" fill="${C.butter}" ${S}/>
    ${F(50, 49)}`), // sol
  '⭐': W(`<path d="M50 10 L62.9 36.2 L91.8 40.4 L70.9 60.8 L75.9 89.6 L50 76 L24.1 89.6 L29.1 60.8 L8.2 40.4 L37.1 36.2 Z" fill="${C.butter}" ${S} stroke-width="5"/>
    ${F(50, 52, 1, 9)}`), // estrella
  '🌟': W(`<path d="M46 24 L56 44.2 L78.3 47.5 L62.2 63.3 L66 85.5 L46 75 L26 85.5 L29.8 63.3 L13.7 47.5 L36 44.2 Z" fill="${C.butter}" ${S} stroke-width="5"/>
    <path d="M46 8 L46 15 M12 30 L18 34 M10 72 L17 69 M70 30 L75 26" ${T}/>
    <path d="M84 7 Q86.4 15.6 95 18 Q86.4 20.4 84 29 Q81.6 20.4 73 18 Q81.6 15.6 84 7Z" fill="${C.white}" stroke="${C.ink}" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M86 68 Q87.8 74.2 94 76 Q87.8 77.8 86 84 Q84.2 77.8 78 76 Q84.2 74.2 86 68Z" fill="${C.white}" stroke="${C.ink}" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M16 10 Q17.5 15.5 23 17 Q17.5 18.5 16 24 Q14.5 18.5 9 17 Q14.5 15.5 16 10Z" fill="${C.white}" stroke="${C.ink}" stroke-width="2.4" stroke-linejoin="round"/>
    ${F(46, 57, 0.8, 8)}`), // estrella brillante
  '🌈': W(`<path d="M8 74 A42 42 0 0 1 92 74 Z" fill="${C.red}" ${S}/>
    <path d="M16.5 74 A33.5 33.5 0 0 1 83.5 74 Z" fill="${C.butter}" ${S}/>
    <path d="M25 74 A25 25 0 0 1 75 74 Z" fill="${C.green}" ${S}/>
    <path d="M33.5 74 A16.5 16.5 0 0 1 66.5 74 Z" fill="${C.sky}" ${S}/>
    <path d="M42 74 A8 8 0 0 1 58 74 Z" fill="${C.white}" ${S}/>
    <path d="M10 86 C0 86 0 72 9 71 C9 60 25 59 27 67 C36 64 42 78 35 86 Z" fill="${C.white}" ${S}/>
    <path d="M90 86 C100 86 100 72 91 71 C91 60 75 59 73 67 C64 64 58 78 65 86 Z" fill="${C.white}" ${S}/>
    <path d="M35 86 L65 86" ${T}/>`), // arcoíris
  '🌳': W(`<path d="M43 58 L40 91 L60 91 L57 58 Z" fill="${C.brown}" ${S}/>
    <path d="M50 9 C66 7 77 19 75 30 C91 34 91 58 75 62 C66 72 34 72 25 62 C9 58 9 34 25 30 C23 19 34 7 50 9Z" fill="${C.green}" ${S}/>
    <path d="M30 22 Q36 15 44 15" stroke="${C.mintL}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    ${F(50, 42)}`), // árbol
  '🌸': W(`<g fill="${C.pink}" ${S}>${[0, 72, 144, 216, 288].map(a => `<ellipse cx="50" cy="27" rx="16" ry="19" transform="rotate(${a} 50 51)"/>`).join('')}</g>
    <g fill="${C.pinkL}">${[0, 72, 144, 216, 288].map(a => `<ellipse cx="50" cy="19" rx="5" ry="6" transform="rotate(${a} 50 51)"/>`).join('')}</g>
    <circle cx="50" cy="51" r="16" fill="${C.butter}" ${S}/>
    ${F(50, 49, 0.72, 7)}`), // flor
  '🌹': W(`<path d="M47 56 L47 92 L53 92 L53 56 Z" fill="${C.greenD}" ${S}/>
    <path d="M53 78 Q68 60 84 68 Q72 88 53 78Z" fill="${C.green}" ${S}/><path d="M47 84 Q32 68 16 76 Q28 94 47 84Z" fill="${C.green}" ${S}/>
    <path d="M30 50 L38 62 L50 56 L62 62 L70 50 Z" fill="${C.green}" ${S}/>
    <path d="M23 30 C23 13 40 6 50 13 C60 6 77 13 77 30 C79 50 64 59 50 59 C36 59 21 50 23 30Z" fill="${C.red}" ${S}/>
    <path d="M30 26 Q50 40 70 26 M42 20 Q50 12 58 20 Q50 28 42 20" ${T}/>
    ${F(50, 43, 0.85, 9)}`), // rosa
  '🌼': W(`<g fill="${C.white}" ${S}>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<ellipse cx="50" cy="24" rx="10.5" ry="15" transform="rotate(${a} 50 50)"/>`).join('')}</g>
    <circle cx="50" cy="50" r="17" fill="${C.butter}" ${S}/>
    ${F(50, 48, 0.75, 7)}`), // margarita
  '🌻': W(`<path d="M47 62 L47 93 L53 93 L53 62 Z" fill="${C.greenD}" ${S}/>
    <path d="M53 84 Q66 68 82 74 Q72 92 53 84Z" fill="${C.green}" ${S}/><path d="M47 86 Q34 72 18 78 Q28 94 47 86Z" fill="${C.green}" ${S}/>
    <g fill="${C.butter}" ${S}>${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => `<path d="M50 6 Q60 18 50 28 Q40 18 50 6Z" transform="rotate(${a} 50 39)"/>`).join('')}</g>
    <circle cx="50" cy="39" r="19" fill="${C.brown}" ${S}/>
    ${F(50, 37, 0.8, 8)}`), // girasol
  '🍄': W(`<path d="M35 56 C34 72 26 91 50 91 C74 91 66 72 65 56 Z" fill="${C.butterL}" ${S}/>
    <path d="M8 52 C8 26 28 10 50 10 C72 10 92 26 92 52 C92 62 72 63 50 63 C28 63 8 62 8 52Z" fill="${C.red}" ${S}/>
    <g fill="${C.white}"><circle cx="50" cy="26" r="8"/><circle cx="25" cy="42" r="6"/><circle cx="75" cy="42" r="6"/><circle cx="38" cy="50" r="3.5"/><circle cx="64" cy="50" r="3.5"/></g>
    ${F(50, 74, 0.8, 8)}`), // seta
  '🏝️': W(`<path d="M14 82 C22 56 78 56 86 82 Z" fill="${C.butter}" ${S}/>
    <path d="M46 68 C44 52 47 40 54 28 L61 31 C55 42 53 54 56 68 Z" fill="${C.brown}" ${S}/>
    <path d="M57 29 C44 17 26 20 16 34 C32 28 46 30 57 29Z" fill="${C.green}" ${S}/>
    <path d="M57 29 C70 17 86 22 92 38 C80 29 68 29 57 29Z" fill="${C.green}" ${S}/>
    <path d="M57 29 C54 13 40 6 26 10 C40 13 50 20 57 29Z" fill="${C.greenD}" ${S}/>
    <path d="M57 29 C60 13 74 6 88 12 C74 14 64 20 57 29Z" fill="${C.greenD}" ${S}/>
    <circle cx="57" cy="31" r="4" fill="${C.brown}" ${S}/>
    <path d="M7 80 Q17 73 27 80 Q38 87 50 80 Q62 73 73 80 Q83 87 93 80 L93 86 Q93 93 86 93 L14 93 Q7 93 7 86 Z" fill="${C.sky}" ${S}/>`), // isla
  '🌊': W(`<path d="M8 90 L8 62 C8 34 30 13 56 15 C76 17 87 31 84 46 C82 57 68 58 64 49 C61 41 53 39 49 46 C43 57 54 71 72 71 C82 71 89 67 92 62 L92 90 Z" fill="${C.sky}" ${S}/>
    <path d="M56 15 C76 17 87 31 84 46 C82 57 68 58 64 49 C68 51 74 48 74 41 C74 30 66 24 54 24 C40 24 26 34 21 50 C24 30 38 14 56 15Z" fill="${C.white}" ${S}/>
    <path d="M22 78 Q32 70 42 78 M52 82 Q62 76 72 82" stroke="${C.skyL}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="90" cy="26" r="3.5" fill="${C.skyL}" ${S} stroke-width="2.4"/><circle cx="80" cy="12" r="2.8" fill="${C.skyL}" ${S} stroke-width="2.4"/>`), // mar
  '🪐': W(`<g transform="rotate(-18 50 50)" fill="none"><ellipse cx="50" cy="50" rx="43" ry="13" stroke="${C.ink}" stroke-width="10"/><ellipse cx="50" cy="50" rx="43" ry="13" stroke="${C.butter}" stroke-width="4"/></g>
    <circle cx="50" cy="50" r="27" fill="${C.lilac}" ${S}/>
    <path d="M30 36 Q50 30 70 36" stroke="${C.lilacL}" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/>
    <g transform="rotate(-18 50 50)" fill="none"><path d="M7 50 A43 13 0 0 0 93 50" stroke="${C.ink}" stroke-width="10"/><path d="M7 50 A43 13 0 0 0 93 50" stroke="${C.butter}" stroke-width="4"/></g>
    ${F(50, 44, 0.85, 9)}`), // planeta
  '🪺': W(`<ellipse cx="50" cy="54" rx="42" ry="11" fill="${C.brown}" ${S}/>
    <ellipse cx="31" cy="44" rx="12" ry="16" transform="rotate(-12 31 44)" fill="${C.skyL}" ${S}/><ellipse cx="69" cy="44" rx="12" ry="16" transform="rotate(12 69 44)" fill="${C.skyL}" ${S}/>
    <ellipse cx="50" cy="38" rx="13" ry="17" fill="${C.white}" ${S}/>
    <g fill="${C.sky}"><circle cx="27" cy="38" r="2"/><circle cx="34" cy="45" r="1.6"/><circle cx="72" cy="37" r="2"/><circle cx="66" cy="45" r="1.6"/></g>
    <path d="M8 54 C8 80 28 91 50 91 C72 91 92 80 92 54 C78 64 22 64 8 54Z" fill="${C.brownL}" ${S}/>
    <path d="M16 68 L28 74 M24 82 L36 80 M84 68 L72 74 M76 82 L64 80 M40 87 L52 85" ${T}/>
    ${F(50, 71, 0.85, 9)}`), // nido
  '💖': W(`<path d="M48 90 C22 74 6 54 8 37 C10 20 30 13 48 29 C66 13 86 20 88 37 C90 54 74 74 48 90Z" fill="${C.pink}" ${S}/>
    <path d="M18 38 Q19 28 28 26" stroke="${C.pinkL}" stroke-width="4" fill="none" stroke-linecap="round"/>
    ${F(48, 52)}
    <path d="M82 5 Q85 15 95 18 Q85 21 82 31 Q79 21 69 18 Q79 15 82 5Z" fill="${C.butter}" stroke="${C.ink}" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M86 70 Q87.8 76.2 94 78 Q87.8 79.8 86 86 Q84.2 79.8 78 78 Q84.2 76.2 86 70Z" fill="${C.butter}" stroke="${C.ink}" stroke-width="2.4" stroke-linejoin="round"/>`), // corazón
  '💎': W(`<path d="M26 18 L74 18 L92 42 L50 91 L8 42 Z" fill="${C.sky}" ${S}/>
    <path d="M36 42 L50 18 L64 42 Z" fill="${C.skyL}"/><path d="M8 42 L26 18 L36 42 Z" fill="${C.skyL}" opacity=".55"/>
    <path d="M8 42 L92 42 M26 18 L36 42 L50 18 L64 42 L74 18" ${T}/>
    <path d="M26 18 L74 18 L92 42 L50 91 L8 42 Z" fill="none" ${S}/>
    ${F(50, 56, 0.85, 9)}`), // diamante
  '✨': W(`<path d="M42 20 Q49.5 46.5 76 54 Q49.5 61.5 42 88 Q34.5 61.5 8 54 Q34.5 46.5 42 20Z" fill="${C.butter}" ${S}/>
    <path d="M78 8 Q81.1 18.9 92 22 Q81.1 25.1 78 36 Q74.9 25.1 64 22 Q74.9 18.9 78 8Z" fill="${C.pink}" ${S} stroke-width="3"/>
    <path d="M80 70 Q82.2 77.8 90 80 Q82.2 82.2 80 90 Q77.8 82.2 70 80 Q77.8 77.8 80 70Z" fill="${C.sky}" ${S} stroke-width="3"/>
    <path d="M18 14 Q19.8 20.2 26 22 Q19.8 23.8 18 30 Q16.2 23.8 10 22 Q16.2 20.2 18 14Z" fill="${C.lilac}" ${S} stroke-width="3"/>`), // brillos
  '🧸': W(`<circle cx="30" cy="17" r="9" fill="${C.brown}" ${S}/><circle cx="70" cy="17" r="9" fill="${C.brown}" ${S}/>
    <ellipse cx="23" cy="62" rx="9" ry="14" transform="rotate(25 23 62)" fill="${C.brown}" ${S}/><ellipse cx="77" cy="62" rx="9" ry="14" transform="rotate(-25 77 62)" fill="${C.brown}" ${S}/>
    <ellipse cx="50" cy="68" rx="23" ry="22" fill="${C.brown}" ${S}/>
    <ellipse cx="50" cy="72" rx="13" ry="12" fill="${C.brownL}"/>
    <path d="M50 79 C43 74 42 68 46 67 C48 66.500 50 68 50 69 C50 68 52 66.500 54 67 C58 68 57 74 50 79Z" fill="${C.pink}"/>
    <ellipse cx="31" cy="85" rx="11" ry="8" fill="${C.brown}" ${S}/><ellipse cx="69" cy="85" rx="11" ry="8" fill="${C.brown}" ${S}/>
    <ellipse cx="31" cy="86" rx="5" ry="3.5" fill="${C.brownL}"/><ellipse cx="69" cy="86" rx="5" ry="3.5" fill="${C.brownL}"/>
    <circle cx="50" cy="34" r="23" fill="${C.brown}" ${S}/>
    <ellipse cx="50" cy="41" rx="11" ry="8" fill="${C.brownL}"/>
    ${F(50, 33, 0.9, 11)}`), // osito de peluche
});
