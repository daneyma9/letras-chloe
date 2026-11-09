// Batch D icons. Each entry: 'emoji': W(`...`), // nombre
module.exports = ({ C, S, T, F, W }) => {
  const cap = `fill="none" stroke-linecap="round" stroke-linejoin="round"`;
  // Outlined "tube": an ink line with a thinner coloured line on top (w = coloured width).
  const ink = (d, w) => `<path d="${d}" ${cap} stroke="${C.ink}" stroke-width="${w + 7}"/>`;
  const col = (d, w, c) => `<path d="${d}" ${cap} stroke="${c}" stroke-width="${w}"/>`;
  const tube = (d, w, c) => ink(d, w) + col(d, w, c);
  // Football patch hugging the edge of a circle (50,50) r40 at angle a (degrees, screen coords).
  const pt = (a, r) => { const t = a * Math.PI / 180; return `${(50 + r * Math.cos(t)).toFixed(1)} ${(50 + r * Math.sin(t)).toFixed(1)}`; };
  const patch = a => `<path d="M${pt(a - 15, 39)} A39 39 0 0 1 ${pt(a + 15, 39)} L${pt(a + 11, 30)} L${pt(a, 25)} L${pt(a - 11, 30)} Z" fill="${C.ink}"/>`;
  return {
  '⛵': W(`<rect x="47" y="10" width="6" height="54" rx="3" fill="${C.brown}" ${S}/>
    <path d="M43 16 L43 54 L16 54 Z" fill="${C.butterL}" ${S}/><path d="M57 24 L57 54 L80 54 Z" fill="${C.skyL}" ${S}/>
    <path d="M10 62 L90 62 Q84 88 62 88 L38 88 Q16 88 10 62 Z" fill="${C.red}" ${S}/>
    ${F(50, 71, 0.85)}`), // barco
  '🏠': W(`<rect x="64" y="18" width="11" height="20" rx="2" fill="${C.brown}" ${S}/>
    <rect x="20" y="46" width="60" height="44" rx="4" fill="${C.butterL}" ${S}/>
    <path d="M10 49 L50 13 L90 49 Z" fill="${C.red}" ${S}/>
    <path d="M43 90 L43 80 Q43 74 50 74 Q57 74 57 80 L57 90 Z" fill="${C.brown}" ${S}/>
    ${F(50, 60, 0.9)}`), // casa
  '🎲': W(`<g transform="rotate(-8 50 50)"><rect x="14" y="14" width="72" height="72" rx="16" fill="${C.white}" ${S}/>
    <g fill="${C.pink}"><circle cx="32" cy="32" r="6.5"/><circle cx="68" cy="32" r="6.5"/><circle cx="50" cy="50" r="6.5"/><circle cx="32" cy="68" r="6.5"/><circle cx="68" cy="68" r="6.5"/></g></g>`), // dado
  '🎷': W(`${tube('M24 14 L33 21 L33 66 Q33 84 50 84 Q66 84 66 66 L66 58', 11, C.butter)}
    <path d="M22 12 L27 16" ${cap} stroke="${C.ink}" stroke-width="9"/>
    <path d="M54 62 L47 42 L85 42 L78 62 Z" fill="${C.butter}" ${S}/>
    <ellipse cx="66" cy="42" rx="19" ry="5.5" fill="${C.peach}" ${S}/>
    <g fill="${C.white}" stroke="${C.ink}" stroke-width="2"><circle cx="33" cy="34" r="3.6"/><circle cx="33" cy="46" r="3.6"/><circle cx="33" cy="58" r="3.6"/></g>`), // saxofón
  '🪀': W(`<path d="M50 34 Q42 26 50 20 Q58 15 52 12" ${T}/><circle cx="50" cy="8" r="4.5" ${T}/>
    <circle cx="50" cy="62" r="30" fill="${C.lilac}" ${S}/>
    <circle cx="50" cy="62" r="20" fill="${C.butterL}" stroke="${C.ink}" stroke-width="2.4"/>
    ${F(50, 60, 0.8, 9)}`), // yoyó
  '👟': W(`<path d="M12 66 L12 34 Q12 26 20 26 L30 26 Q36 26 38 32 Q46 50 66 52 Q86 54 90 66 Z" fill="${C.sky}" ${S}/>
    <path d="M68 52.5 Q86 54 90 66 L65 66 Q63 58 68 52.5 Z" fill="${C.white}" ${S}/>
    <path d="M10 66 L90 66 Q93 81 82 81 L18 81 Q7 81 10 66 Z" fill="${C.white}" ${S}/>
    <path d="M40 41 L50 35 M46 48 L56 42 M53 52 L62 47" stroke="${C.white}" stroke-width="3.4" stroke-linecap="round" fill="none"/>
    <circle cx="24" cy="50" r="6" fill="${C.butter}" stroke="${C.ink}" stroke-width="2.4"/>`), // zapato
  '👢': W(`<path d="M26 16 L52 16 L52 56 Q54 62 68 66 Q84 70 84 82 L26 82 Z" fill="${C.red}" ${S}/>
    <path d="M24 82 L86 82 L86 86 Q86 91 81 91 L29 91 Q24 91 24 86 Z" fill="${C.brown}" ${S}/>
    <rect x="22" y="9" width="34" height="13" rx="5" fill="${C.butter}" ${S}/>
    <path d="M33 32 L33 56" stroke="${C.white}" stroke-width="3.4" stroke-linecap="round" opacity=".7"/>`), // bota
  '👑': W(`<path d="M17 80 L13 32 L32 50 L50 20 L68 50 L87 32 L83 80 Z" fill="${C.butter}" ${S}/>
    <rect x="15" y="72" width="70" height="13" rx="5" fill="${C.peach}" ${S}/>
    <circle cx="13" cy="31" r="5.5" fill="${C.pink}" ${S}/><circle cx="50" cy="19" r="5.5" fill="${C.pink}" ${S}/><circle cx="87" cy="31" r="5.5" fill="${C.pink}" ${S}/>
    <g fill="${C.white}"><circle cx="32" cy="78.5" r="2.6"/><circle cx="50" cy="78.5" r="2.6"/><circle cx="68" cy="78.5" r="2.6"/></g>
    ${F(50, 56, 0.85)}`), // corona
  '🎈': W(`<path d="M50 78 Q42 84 50 88 Q57 91 50 95" ${T}/>
    <path d="M50 68 L43 79 L57 79 Z" fill="${C.red}" ${S}/>
    <ellipse cx="50" cy="39" rx="29" ry="32" fill="${C.red}" ${S}/>
    <ellipse cx="34" cy="22" rx="4" ry="7" transform="rotate(30 34 22)" fill="${C.white}" opacity=".7"/>
    ${F(50, 42)}`), // globo
  '🎀': W(`<path d="M46 54 L30 90 L42 82 L52 88 L52 58 Z" fill="${C.pink}" ${S}/><path d="M54 54 L70 90 L58 82 L48 88 L48 58 Z" fill="${C.pink}" ${S}/>
    <path d="M50 48 C40 28 22 18 12 24 C6 38 6 58 12 72 C22 78 40 68 50 48 Z" fill="${C.pink}" ${S}/>
    <path d="M50 48 C60 28 78 18 88 24 C94 38 94 58 88 72 C78 78 60 68 50 48 Z" fill="${C.pink}" ${S}/>
    <path d="M22 40 Q30 46 38 48 M78 40 Q70 46 62 48" ${T}/>
    <rect x="40" y="36" width="20" height="24" rx="8" fill="${C.pinkL}" ${S}/>`), // lazo
  '⚽': W(`<circle cx="50" cy="50" r="40" fill="${C.white}"/>
    ${patch(-90)}${patch(-18)}${patch(54)}${patch(126)}${patch(198)}
    <path d="M${pt(-90, 25)} L${pt(-54, 20)} L${pt(-18, 25)} L${pt(18, 20)} L${pt(54, 25)} L${pt(90, 20)} L${pt(126, 25)} L${pt(162, 20)} L${pt(198, 25)} L${pt(234, 20)} Z" ${T}/>
    <circle cx="50" cy="50" r="40" fill="none" ${S}/>
    ${F(50, 49, 0.7, 9)}`), // pelota
  '🚂': W(`<path d="M21 44 L19 26 L37 26 L35 44 Z" fill="${C.butter}" ${S}/><rect x="15" y="18" width="26" height="9" rx="4" fill="${C.butter}" ${S}/>
    <rect x="12" y="40" width="50" height="30" rx="9" fill="${C.sky}" ${S}/>
    <rect x="54" y="24" width="32" height="46" rx="4" fill="${C.red}" ${S}/><rect x="50" y="17" width="40" height="10" rx="4" fill="${C.lilac}" ${S}/>
    <rect x="61" y="33" width="18" height="15" rx="3" fill="${C.skyL}" ${S}/>
    <rect x="9" y="66" width="82" height="9" rx="4" fill="${C.lilac}" ${S}/>
    <circle cx="25" cy="80" r="9" fill="${C.butter}" ${S}/><circle cx="47" cy="80" r="9" fill="${C.butter}" ${S}/><circle cx="73" cy="77" r="12" fill="${C.butter}" ${S}/>
    <g fill="${C.ink}"><circle cx="25" cy="80" r="2.5"/><circle cx="47" cy="80" r="2.5"/><circle cx="73" cy="77" r="3"/></g>
    ${F(36, 52, 0.75)}`), // tren
  '🕯️': W(`<ellipse cx="50" cy="87" rx="31" ry="6" fill="${C.butter}" ${S}/>
    <rect x="32" y="40" width="36" height="46" rx="6" fill="${C.pinkL}" ${S}/>
    <path d="M32 46 Q32 40 38 40 L62 40 Q68 40 68 46 L68 50 Q65 56 61 51 Q57 46 53 52 Q48 59 43 52 Q39 46 32 53 Z" fill="${C.white}" ${S}/>
    <path d="M50 40 L50 33" ${T}/>
    <path d="M50 7 Q66 24 59 32 Q50 40 41 32 Q34 24 50 7 Z" fill="${C.butter}" ${S}/>
    <path d="M50 20 Q56 28 53 31 Q50 34 47 31 Q44 28 50 20 Z" fill="${C.peach}"/>
    ${F(50, 67, 0.85, 9)}`), // vela
  '☕': W(`<path d="M35 28 Q30 22 35 16 Q40 10 35 5 M53 28 Q48 22 53 16 Q58 10 53 5" ${T}/>
    ${tube('M68 52 Q88 50 86 62 Q84 74 66 72', 5, C.pink)}
    <ellipse cx="45" cy="86" rx="37" ry="6" fill="${C.pinkL}" ${S}/>
    <path d="M18 40 L72 40 L68 74 Q66 84 56 84 L34 84 Q24 84 22 74 Z" fill="${C.pink}" ${S}/>
    <ellipse cx="45" cy="40" rx="27" ry="5.5" fill="${C.brown}" ${S}/>
    ${F(45, 60, 0.9)}`), // taza
  '🪑': W(`<rect x="17" y="46" width="10" height="44" rx="4" fill="${C.brown}" ${S}/><rect x="73" y="46" width="10" height="44" rx="4" fill="${C.brown}" ${S}/>
    <rect x="14" y="46" width="72" height="11" rx="3" fill="${C.brown}" ${S}/>
    <rect x="8" y="36" width="84" height="13" rx="6" fill="${C.brownL}" ${S}/>
    <path d="M50 26 L50 16" ${T}/><circle cx="50" cy="13" r="6" fill="${C.pink}" ${S}/>
    <path d="M42 24 L58 24 L55 36 L45 36 Z" fill="${C.sky}" ${S}/>`), // mesa
  '🛏️': W(`<rect x="18" y="56" width="66" height="18" rx="4" fill="${C.white}" ${S}/>
    <rect x="18" y="70" width="66" height="9" rx="3" fill="${C.brown}" ${S}/>
    <rect x="42" y="49" width="42" height="26" rx="6" fill="${C.lilac}" ${S}/>
    <rect x="42" y="49" width="11" height="26" rx="5" fill="${C.lilacL}" ${S}/>
    <rect x="21" y="44" width="23" height="14" rx="7" fill="${C.skyL}" ${S}/>
    <rect x="9" y="22" width="12" height="66" rx="5" fill="${C.brown}" ${S}/><rect x="80" y="42" width="11" height="46" rx="5" fill="${C.brown}" ${S}/>`), // cama
  '🗺️': W(`<path d="M10 28 L36 18 L64 28 L90 18 L90 74 L64 84 L36 74 L10 84 Z" fill="${C.butterL}" ${S}/>
    <path d="M36 18 L64 28 L64 84 L36 74 Z" fill="${C.butter}" opacity=".55"/>
    <path d="M36 18 L36 74 M64 28 L64 84" ${T}/>
    <path d="M20 66 Q30 48 44 58 Q58 68 70 48" fill="none" stroke="${C.ink}" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="1 6.5"/>
    <path d="M70 34 L80 44 M80 34 L70 44" stroke="${C.red}" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="20" cy="68" r="3.5" fill="${C.mint}"/>`), // mapa
  '🏍️': W(`<circle cx="24" cy="74" r="13" fill="${C.greyD}" ${S}/><circle cx="78" cy="74" r="13" fill="${C.greyD}" ${S}/>
    <circle cx="24" cy="74" r="4.5" fill="${C.white}"/><circle cx="78" cy="74" r="4.5" fill="${C.white}"/>
    <path d="M72 30 L70 20 M61 20 L78 17" fill="none" ${S}/>
    <rect x="13" y="33" width="38" height="11" rx="5.5" fill="${C.brown}" ${S}/>
    <path d="M8 62 Q7 42 26 42 L52 42 L55 62 L62 62 L68 29 L77 29 L88 58 Q76 55 70 63 Q67 67 67 73 L42 73 Q40 56 24 56 Q13 56 8 62 Z" fill="${C.mint}" ${S}/>
    <circle cx="81" cy="38" r="5" fill="${C.butter}" ${S}/>`), // moto
  '🎠': W(`<rect x="46.5" y="6" width="7" height="88" rx="3.5" fill="${C.butter}" ${S}/>
    <path d="M26 50 Q8 46 10 70 Q20 66 27 58 Z" fill="${C.pink}" ${S}/>
    ${tube('M32 62 L24 72 L30 82', 6, C.white)}${tube('M60 62 L70 70 L64 80', 6, C.white)}
    <path d="M65 25 L62 11 L72 20 Z" fill="${C.white}" ${S}/>
    <ellipse cx="45" cy="54" rx="23" ry="13" fill="${C.white}" ${S}/>
    <path d="M56 50 L62 30 Q64 20 74 23 L88 30 Q92 34 88 38 L76 40 L72 56 Z" fill="${C.white}" ${S}/>
    <ellipse cx="50" cy="54" rx="17" ry="10" fill="${C.white}"/>
    <path d="M62 24 Q52 30 54 46 L60 47 Q60 37 67 31 Z" fill="${C.pink}" ${S}/>
    <path d="M35 42 Q45 39 55 42 L54 57 Q45 61 36 57 Z" fill="${C.lilac}" ${S}/>
    <circle cx="77" cy="29.5" r="2.3" fill="${C.ink}"/><ellipse cx="73" cy="35" rx="3.2" ry="2" fill="${C.pink}" opacity=".45"/>`), // carrusel
  '🏰': W(`<rect x="40" y="27" width="20" height="26" fill="${C.pinkL}" ${S}/><path d="M35 29 L50 7 L65 29 Z" fill="${C.lilac}" ${S}/>
    <rect x="28" y="48" width="44" height="42" fill="${C.pinkL}" ${S}/>
    <rect x="12" y="38" width="20" height="52" fill="${C.pink}" ${S}/><rect x="68" y="38" width="20" height="52" fill="${C.pink}" ${S}/>
    <path d="M8 40 L22 14 L36 40 Z" fill="${C.lilac}" ${S}/><path d="M64 40 L78 14 L92 40 Z" fill="${C.lilac}" ${S}/>
    <path d="M43 90 L43 80 Q43 72 50 72 Q57 72 57 80 L57 90 Z" fill="${C.lilac}" ${S}/>
    <g fill="${C.ink}"><rect x="47" y="34" width="6" height="9" rx="3"/><rect x="19" y="52" width="6" height="10" rx="3"/><rect x="75" y="52" width="6" height="10" rx="3"/></g>
    ${F(50, 58, 0.75, 9)}`), // castillo
  '👃': W(`<path d="M50 10 Q41 10 41 22 L37 50 Q18 56 18 72 Q18 85 33 85 Q42 91 50 86 Q58 91 67 85 Q82 85 82 72 Q82 56 63 50 L59 22 Q59 10 50 10 Z" fill="${C.peachL}" ${S}/>
    <ellipse cx="37" cy="74" rx="6" ry="4" fill="${C.ink}"/><ellipse cx="63" cy="74" rx="6" ry="4" fill="${C.ink}"/>
    <path d="M27 62 Q24 66 25 71 M73 62 Q76 66 75 71" ${T}/>
    <path d="M47 20 L46 40" stroke="${C.white}" stroke-width="3.4" stroke-linecap="round" opacity=".8"/>`), // nariz
  '👁️': W(`<path d="M26 39 L19 29 M37 31 L33 19 M50 28 L50 15 M63 31 L67 19 M74 39 L81 29" ${T}/>
    <path d="M8 54 Q50 16 92 54 Q50 88 8 54 Z" fill="${C.white}" ${S}/>
    <circle cx="50" cy="53" r="17" fill="${C.sky}" ${S}/><circle cx="50" cy="53" r="8.5" fill="${C.ink}"/><circle cx="55" cy="47" r="3.6" fill="${C.white}"/>`), // ojo
  '🦶': W(`<ellipse cx="31" cy="22" rx="9" ry="11" fill="${C.peachL}" ${S}/><circle cx="47" cy="17" r="7" fill="${C.peachL}" ${S}/><circle cx="60" cy="20" r="6.5" fill="${C.peachL}" ${S}/><circle cx="70" cy="27" r="6" fill="${C.peachL}" ${S}/><circle cx="77" cy="37" r="5.5" fill="${C.peachL}" ${S}/>
    <path d="M34 30 Q20 34 24 54 Q27 70 33 82 Q39 93 52 91 Q65 89 65 75 Q65 63 72 52 Q80 38 66 31 Q50 24 34 30 Z" fill="${C.peachL}" ${S}/>
    <path d="M40 78 Q46 82 54 79" ${T}/>`), // pie
  '✋': W(`${ink('M33 60 L33 25', 10.5)}${ink('M47 60 L47 16', 10.5)}${ink('M61 60 L61 20', 10.5)}${ink('M75 60 L75 33', 10.5)}${ink('M36 74 L15 53', 11)}
    <rect x="26" y="50" width="56" height="40" rx="16" fill="${C.peachL}" ${S}/>
    ${col('M33 60 L33 25', 10.5, C.peachL)}${col('M47 60 L47 16', 10.5, C.peachL)}${col('M61 60 L61 20', 10.5, C.peachL)}${col('M75 60 L75 33', 10.5, C.peachL)}${col('M36 74 L15 53', 11, C.peachL)}
    <rect x="27.75" y="50" width="52.5" height="38.25" rx="14" fill="${C.peachL}"/>
    <path d="M40 66 Q52 60 66 64 M42 76 Q54 72 64 76" ${T}/>`), // mano
  '☝️': W(`${ink('M43.5 62 L43.5 16', 11)}${ink('M58 62 L58 52', 11)}${ink('M72.5 62 L72.5 55', 11)}
    <rect x="36.25" y="56" width="43.5" height="35" rx="13" fill="${C.peachL}" ${S}/>
    ${col('M43.5 62 L43.5 16', 11, C.peachL)}${col('M58 62 L58 52', 11, C.peachL)}${col('M72.5 62 L72.5 55', 11, C.peachL)}
    <rect x="38" y="58" width="40" height="31.25" rx="11" fill="${C.peachL}"/>
    ${tube('M33 67 L54 71', 11, C.peachL)}`), // dedo
  '💇': W(`<path d="M50 9 C22 9 12 32 15 56 L12 86 Q22 93 32 87 L68 87 Q78 93 88 86 L85 56 C88 32 78 9 50 9 Z" fill="${C.brown}" ${S}/>
    <ellipse cx="50" cy="52" rx="24" ry="25" fill="${C.peachL}" ${S}/>
    <path d="M25 48 Q26 22 50 22 Q74 22 75 48 Q62 42 55 31 Q44 44 25 48 Z" fill="${C.brown}" ${S}/>
    <path d="M72 21 L59 11 L59 31 Z M72 21 L85 11 L85 31 Z" fill="${C.pink}" ${S}/><circle cx="72" cy="21" r="4.5" fill="${C.pinkL}" ${S}/>
    ${F(50, 58, 0.9, 10)}`), // pelo
  '🚲': W(`<circle cx="25" cy="64" r="18" fill="${C.skyL}" ${S}/><circle cx="75" cy="64" r="18" fill="${C.skyL}" ${S}/>
    ${tube('M25 64 L40 38 L49 64 Z M40 38 L67 38 L49 64 M75 64 L65 26', 3.5, C.pink)}
    <path d="M40 38 L38 30 M58 25 L72 23" fill="none" ${S}/>
    <rect x="29" y="25" width="18" height="7" rx="3.5" fill="${C.brown}" ${S}/>
    <circle cx="25" cy="64" r="3.2" fill="${C.ink}"/><circle cx="75" cy="64" r="3.2" fill="${C.ink}"/><circle cx="49" cy="64" r="4.5" fill="${C.butter}" stroke="${C.ink}" stroke-width="2.4"/>`), // bici
  };
};
