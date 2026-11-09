// Batch C: comida kawaii. Each entry: 'emoji': W(`...`), // nombre
module.exports = ({ C, S, T, F, W }) => {
  const r1 = n => Math.round(n * 10) / 10;
  // kiwi seeds: ring of small ink ellipses pointing at the centre
  const kiwiSeeds = Array.from({ length: 10 }, (_, i) => {
    const a = i * 36 + 18, x = r1(50 + 24 * Math.cos(a * Math.PI / 180)), y = r1(50 + 24 * Math.sin(a * Math.PI / 180));
    return `<ellipse cx="${x}" cy="${y}" rx="3.2" ry="1.7" transform="rotate(${a} ${x} ${y})"/>`;
  }).join('');
  // lollipop swirl: spiral that stays in the outer band so the face fits in the middle
  const spiral = Array.from({ length: 61 }, (_, i) => {
    const a = (i / 60) * 3.2 * Math.PI - Math.PI / 2, r = 27 - 8.5 * (i / 60);
    return `${i ? 'L' : 'M'}${r1(50 + r * Math.cos(a))} ${r1(39 + r * Math.sin(a))}`;
  }).join(' ');
  // donut icing: wavy ring with a hole (evenodd)
  const icing = Array.from({ length: 72 }, (_, i) => {
    const a = (i / 72) * 2 * Math.PI, r = 30.5 + 2.6 * Math.cos(7 * a);
    return `${i ? 'L' : 'M'}${r1(50 + r * Math.cos(a))} ${r1(50 + r * Math.sin(a))}`;
  }).join(' ') + 'Z';
  const ring = r => `M${50 - r} 50 a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0Z`;
  const sprinkle = (x, y, a, col) => `<rect x="${x - 3.5}" y="${y - 1.5}" width="7" height="3" rx="1.5" transform="rotate(${a} ${x} ${y})" fill="${col}"/>`;

  return {
  '🍦': W(`<path d="M30 54 L50 93 L70 54 Z" fill="${C.brownL}" ${S}/>
    <path d="M40 60 L56 79 M60 60 L44 79" ${T} opacity=".55"/>
    <path d="M24 58 C14 52 18 38 30 37 C26 28 32 20 42 21 C42 12 50 6 57 7 C54 13 60 15 60 21 C69 20 74 29 70 37 C82 38 86 52 76 58 C68 62 32 62 24 58Z" fill="${C.pinkL}" ${S}/>
    <path d="M31 37 Q50 43 68 36 M43 21 Q51 25 59 21" ${T}/>
    ${F(50, 48, 0.85)}`), // helado
  '🥝': W(`<circle cx="50" cy="50" r="40" fill="${C.brown}" ${S}/>
    <circle cx="50" cy="50" r="33" fill="${C.green}"/>
    <ellipse cx="50" cy="51" rx="18" ry="14" fill="${C.butterL}"/>
    <g fill="${C.ink}">${kiwiSeeds}</g>
    ${F(50, 49, 0.7)}`), // kiwi
  '🍍': W(`<path d="M50 40 C40 36 32 28 27 17 C35 18 40 21 44 25 C43 17 46 9 50 4 C54 9 57 17 56 25 C60 21 65 18 73 17 C68 28 60 36 50 40Z" fill="${C.green}" ${S}/>
    <ellipse cx="50" cy="63" rx="27" ry="29" fill="${C.butter}" ${S}/>
    <path d="M29 50 l5 -5 l5 5 M61 50 l5 -5 l5 5 M45 42 l5 -5 l5 5 M32 80 l5 -5 l5 5 M58 80 l5 -5 l5 5 M45 87 l5 -5 l5 5" fill="none" stroke="${C.brown}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    ${F(50, 61)}`), // piña
  '🧀': W(`<path d="M10 46 L60 20 L90 46 Z" fill="${C.butterL}" ${S}/>
    <path d="M10 46 H90 V78 Q90 84 84 84 H16 Q10 84 10 78 Z" fill="${C.butter}" ${S}/>
    <g fill="${C.peach}" opacity=".75"><circle cx="21" cy="58" r="5"/><circle cx="80" cy="73" r="5"/><circle cx="77" cy="56" r="3.2"/><circle cx="25" cy="75" r="3"/><ellipse cx="58" cy="36" rx="6" ry="3.2"/></g>
    ${F(50, 62, 0.9)}`), // queso
  '🎂': W(`<rect x="29" y="26" width="7" height="22" rx="2" fill="${C.sky}" ${S}/><rect x="46.5" y="26" width="7" height="22" rx="2" fill="${C.butter}" ${S}/><rect x="64" y="26" width="7" height="22" rx="2" fill="${C.mint}" ${S}/>
    <g fill="${C.peach}" stroke="${C.ink}" stroke-width="2.4" stroke-linejoin="round"><path d="M32.5 11 Q39 20 32.5 25 Q26 20 32.5 11Z"/><path d="M50 11 Q56.5 20 50 25 Q43.5 20 50 11Z"/><path d="M67.5 11 Q74 20 67.5 25 Q61 20 67.5 11Z"/></g>
    <rect x="14" y="46" width="72" height="43" rx="9" fill="${C.pinkL}" ${S}/>
    <path d="M14 55 Q14 44 25 44 H75 Q86 44 86 55 Q86 63 79 63 Q72 63 72 57 Q72 65 64.5 65 Q57 65 57 57 Q57 63 50 63 Q43 63 43 57 Q43 65 35.5 65 Q28 65 28 57 Q28 63 21 63 Q14 63 14 55Z" fill="${C.pink}" ${S}/>
    ${F(50, 75, 0.9)}`), // tarta
  '🍰': W(`<path d="M10 50 H90 V80 Q90 86 84 86 H16 Q10 86 10 80 Z" fill="${C.butterL}" ${S}/>
    <path d="M12 63 H88 V68 H12 Z" fill="${C.pink}"/>
    <path d="M10 50 L58 28 L90 50 V54 Q90 59 85 59 Q80 59 79 54 Q77 61 70 61 Q64 61 63 55 Q61 60 55 60 Q49 60 48 55 Q46 61 39 61 Q33 61 32 55 Q30 60 24 60 Q19 60 18 55 Q16 59 13 58 Q10 57 10 54Z" fill="${C.pink}" ${S}/>
    <path d="M58 20 Q60 13 66 11" ${T}/>
    <circle cx="57" cy="29" r="8.5" fill="${C.red}" ${S}/>
    ${F(50, 75, 0.75)}`), // trozo de tarta
  '🍇': W(`<path d="M50 28 V13" fill="none" stroke="${C.brown}" stroke-width="5" stroke-linecap="round"/>
    <path d="M52 20 Q60 5 80 10 Q74 27 52 20Z" fill="${C.green}" ${S}/>
    <circle cx="50" cy="78" r="13" fill="${C.lilac}" ${S}/>
    <circle cx="36.5" cy="60" r="13" fill="${C.lilac}" ${S}/><circle cx="63.5" cy="60" r="13" fill="${C.lilac}" ${S}/>
    <circle cx="23" cy="41" r="13" fill="${C.lilac}" ${S}/><circle cx="77" cy="41" r="13" fill="${C.lilac}" ${S}/><circle cx="50" cy="40" r="14" fill="${C.lilac}" ${S}/>
    <g fill="${C.white}" opacity=".6"><ellipse cx="18" cy="36" rx="3" ry="2"/><ellipse cx="72" cy="36" rx="3" ry="2"/><ellipse cx="31.5" cy="55" rx="3" ry="2"/><ellipse cx="58.5" cy="55" rx="3" ry="2"/><ellipse cx="45" cy="73" rx="3" ry="2"/></g>
    ${F(50, 39, 0.62, 9)}`), // uva
  '🍪': W(`<circle cx="50" cy="50" r="40" fill="${C.brownL}" ${S}/>
    <g fill="${C.brown}" stroke="${C.ink}" stroke-width="1.6"><circle cx="30" cy="34" r="5"/><circle cx="54" cy="25" r="4.5"/><circle cx="72" cy="38" r="4.5"/><circle cx="33" cy="75" r="4.5"/><circle cx="62" cy="77" r="5"/><circle cx="79" cy="60" r="3.5"/></g>
    ${F(50, 51)}`), // galleta
  '🍎': W(`<path d="M50 33 Q49 22 55 13" fill="none" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
    <path d="M55 24 Q64 9 82 15 Q74 31 55 24Z" fill="${C.green}" ${S}/>
    <path d="M50 35 C40 25 14 28 14 55 C14 77 31 93 44 90 Q50 88 56 90 C69 93 86 77 86 55 C86 28 60 25 50 35Z" fill="${C.red}" ${S}/>
    <ellipse cx="29" cy="46" rx="4" ry="7" transform="rotate(25 29 46)" fill="${C.white}" opacity=".5"/>
    ${F(50, 62)}`), // manzana
  '🍞': W(`<path d="M23 89 Q16 89 16 82 V47 Q5 40 10 27 Q17 11 50 11 Q83 11 90 27 Q95 40 84 47 V82 Q84 89 77 89Z" fill="${C.brown}" ${S}/>
    <path d="M25 81 V43 Q15 38 18 30 Q23 19 50 19 Q77 19 82 30 Q85 38 75 43 V81Z" fill="${C.butterL}"/>
    ${F(50, 54)}`), // pan
  '🍐': W(`<path d="M50 16 Q50 10 54 5" fill="none" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
    <path d="M54 13 Q62 1 78 6 Q71 21 54 13Z" fill="${C.greenD}" ${S}/>
    <path d="M50 15 C40 15 37 26 36 36 C34 48 19 54 19 70 C19 85 34 92 50 92 C66 92 81 85 81 70 C81 54 66 48 64 36 C63 26 60 15 50 15Z" fill="${C.green}" ${S}/>
    <ellipse cx="42" cy="30" rx="2.6" ry="5.5" transform="rotate(12 42 30)" fill="${C.white}" opacity=".5"/>
    ${F(50, 68)}`), // pera
  '🥥': W(`<path d="M10 42 C10 72 28 91 50 91 C72 91 90 72 90 42Z" fill="${C.brown}" ${S}/>
    <path d="M20 66 l5 3 M80 64 l-5 3 M30 80 l4 -4 M68 82 l-3 -4" ${T} opacity=".6"/>
    <ellipse cx="50" cy="42" rx="40" ry="17" fill="${C.white}" ${S}/>
    <ellipse cx="50" cy="43" rx="27" ry="9" fill="${C.grey}" opacity=".55"/>
    ${F(50, 66)}`), // coco
  '🧂': W(`<path d="M28 40 L24 82 Q24 91 33 91 H67 Q76 91 76 82 L72 40Z" fill="${C.skyL}" ${S}/>
    <path d="M26.5 66 L25 82 Q25 90 33 90 H67 Q75 90 75 82 L73.5 66Z" fill="${C.white}"/>
    <path d="M26 42 Q26 10 50 10 Q74 10 74 42Z" fill="${C.grey}" ${S}/>
    <g fill="${C.ink}"><circle cx="40" cy="27" r="2.6"/><circle cx="50" cy="21" r="2.6"/><circle cx="60" cy="27" r="2.6"/><circle cx="50" cy="32" r="2.6"/></g>
    ${F(50, 60, 0.9)}`), // sal
  '🍲': W(`<path d="M28 31 Q23 25 28 19 Q33 13 28 7 M46 31 Q41 25 46 19 Q51 13 46 7" ${T}/>
    <ellipse cx="50" cy="50" rx="41" ry="10" fill="${C.peach}" ${S}/>
    <rect x="62" y="12" width="9" height="42" rx="4.5" transform="rotate(36 66 50)" fill="${C.grey}" ${S}/>
    <path d="M9 50 A41 10 0 0 0 91 50 Q91 90 50 90 Q9 90 9 50Z" fill="${C.sky}" ${S}/>
    ${F(50, 73, 0.9)}`), // sopa
  '🧁': W(`<path d="M27 54 L32 88 Q33 92 37 92 H63 Q67 92 68 88 L73 54Z" fill="${C.sky}" ${S}/>
    <path d="M40 64 L42 87 M50 64 V87 M60 64 L58 87" ${T} opacity=".6"/>
    <circle cx="52" cy="13" r="7" fill="${C.red}" ${S}/>
    <path d="M18 56 Q12 43 26 39 Q23 27 38 25 Q42 15 54 16 Q64 16 66 25 Q79 27 76 39 Q90 43 82 56 Q78 62 50 62 Q22 62 18 56Z" fill="${C.pinkL}" ${S}/>
    ${F(50, 44, 0.9)}`), // magdalena
  '🍭': W(`<rect x="46.5" y="62" width="7" height="32" rx="3.5" fill="${C.white}" ${S}/>
    <circle cx="50" cy="39" r="32" fill="${C.pink}" ${S}/>
    <path d="${spiral}" fill="none" stroke="${C.white}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    ${F(50, 37, 0.75, 9)}`), // piruleta
  '🍒': W(`<path d="M30 50 Q32 28 54 13 M70 50 Q68 30 54 13" fill="none" ${S}/>
    <path d="M54 14 Q64 2 84 8 Q76 25 54 14Z" fill="${C.green}" ${S}/>
    <circle cx="30" cy="68" r="20" fill="${C.red}" ${S}/><circle cx="71" cy="70" r="20" fill="${C.red}" ${S}/>
    <ellipse cx="19" cy="58" rx="3" ry="4.5" transform="rotate(35 19 58)" fill="${C.white}" opacity=".5"/><ellipse cx="60" cy="60" rx="3" ry="4.5" transform="rotate(35 60 60)" fill="${C.white}" opacity=".5"/>
    ${F(30, 69, 0.65, 9)}${F(71, 71, 0.65, 9)}`), // cereza
  '🍩': W(`<path d="${ring(40)} ${ring(10)}" fill-rule="evenodd" fill="${C.brownL}" ${S}/>
    <path d="${icing} ${ring(10)}" fill-rule="evenodd" fill="${C.pink}"/>
    <circle cx="50" cy="50" r="10" fill="none" ${S}/>
    ${sprinkle(28, 47, 70, C.white)}${sprinkle(35, 31, -30, C.butter)}${sprinkle(51, 25, 20, C.sky)}${sprinkle(66, 32, 60, C.white)}${sprinkle(73, 48, -20, C.butter)}${sprinkle(25, 62, -40, C.sky)}${sprinkle(75, 63, 40, C.mintL)}
    ${F(50, 70, 0.75, 10)}`), // donut
  '🍉': W(`<path d="M7 24 H93 C93 60 76 87 50 87 C24 87 7 60 7 24Z" fill="${C.greenD}" ${S}/>
    <path d="M13 26 H87 C87 56 72 80 50 80 C28 80 13 56 13 26Z" fill="${C.mintL}"/>
    <path d="M18 26 H82 C82 54 69 75 50 75 C31 75 18 54 18 26Z" fill="${C.red}"/>
    <g fill="${C.ink}"><ellipse cx="28" cy="36" rx="1.9" ry="2.8"/><ellipse cx="72" cy="36" rx="1.9" ry="2.8"/><ellipse cx="50" cy="33" rx="1.9" ry="2.8"/><ellipse cx="39" cy="64" rx="1.9" ry="2.8"/><ellipse cx="61" cy="64" rx="1.9" ry="2.8"/></g>
    ${F(50, 47)}`), // sandía
  '🍌': W(`<path d="M13 31 C10 82 80 100 92 35 Q89 29 85 33 C72 55 42 55 25 28 Z" fill="${C.butter}" ${S}/>
    <path d="M11 33 L12 20 L22 17 L27 29 Z" fill="${C.brown}" ${S}/>
    <circle cx="89" cy="33" r="4" fill="${C.brown}" ${S}/>
    ${F(50, 61, 0.85)}`), // plátano
  '🍕': W(`<path d="M13 28 L50 93 L87 28 Z" fill="${C.butter}" ${S}/>
    <g fill="${C.red}" stroke="${C.ink}" stroke-width="1.8"><circle cx="31" cy="42" r="5.5"/><circle cx="69" cy="42" r="5.5"/><circle cx="50" cy="75" r="5"/></g>
    <ellipse cx="50" cy="39" rx="4" ry="2.4" fill="${C.greenD}"/>
    <path d="M8 26 Q50 2 92 26 Q95 34 87 36 Q50 20 13 36 Q5 34 8 26Z" fill="${C.brownL}" ${S}/>
    ${F(50, 53, 0.8)}`), // pizza
  '🍋': W(`<path d="M52 22 Q58 6 76 8 Q72 25 52 22Z" fill="${C.green}" ${S}/>
    <path d="M7 52 Q13 49 17 44 C24 28 38 21 50 21 C62 21 76 28 83 44 Q87 49 93 52 Q87 55 83 60 C76 76 62 83 50 83 C38 83 24 76 17 60 Q13 55 7 52Z" fill="${C.butter}" ${S}/>
    <ellipse cx="33" cy="37" rx="6" ry="3" transform="rotate(-35 33 37)" fill="${C.white}" opacity=".55"/>
    ${F(50, 54)}`), // limón
  };
};
