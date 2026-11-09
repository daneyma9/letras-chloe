// Reference icons that set the style. Each entry: 'emoji': W(`...`), // nombre
module.exports = ({ C, S, T, F, W }) => ({
  '🍓': W(`<path d="M50 91 C27 79 15 58 19 43 C22 30 36 26 50 33 C64 26 78 30 81 43 C85 58 73 79 50 91Z" fill="${C.red}" ${S}/>
    <path d="M50 35 L33 27 L45 25 L50 13 L55 25 L67 27 Z" fill="${C.green}" ${S}/>
    <g fill="${C.butterL}"><ellipse cx="33" cy="50" rx="1.8" ry="2.6"/><ellipse cx="67" cy="50" rx="1.8" ry="2.6"/><ellipse cx="40" cy="74" rx="1.8" ry="2.6"/><ellipse cx="60" cy="74" rx="1.8" ry="2.6"/><ellipse cx="50" cy="44" rx="1.8" ry="2.6"/></g>
    ${F(50, 58)}`), // fresa
  '🐱': W(`<path d="M22 44 L20 16 L42 30 Z" fill="${C.peach}" ${S}/><path d="M78 44 L80 16 L58 30 Z" fill="${C.peach}" ${S}/>
    <path d="M26 36 L25 24 L35 31 Z" fill="${C.pinkL}"/><path d="M74 36 L75 24 L65 31 Z" fill="${C.pinkL}"/>
    <ellipse cx="50" cy="58" rx="35" ry="31" fill="${C.peach}" ${S}/>
    <ellipse cx="50" cy="70" rx="14" ry="10" fill="${C.peachL}"/>
    <path d="M10 60 L24 63 M10 72 L24 69 M90 60 L76 63 M90 72 L76 69" ${T}/>
    <path d="M46.5 62 L53.5 62 L50 66 Z" fill="${C.pink}" stroke="${C.ink}" stroke-width="1.6" stroke-linejoin="round"/>
    ${F(50, 54, 1, 13)}`), // gato
  '🐝': W(`<ellipse cx="33" cy="30" rx="15" ry="20" transform="rotate(-25 33 30)" fill="${C.skyL}" ${S}/><ellipse cx="67" cy="30" rx="15" ry="20" transform="rotate(25 67 30)" fill="${C.skyL}" ${S}/>
    <path d="M40 22 Q36 10 30 9 M60 22 Q64 10 70 9" ${T}/><circle cx="30" cy="9" r="3" fill="${C.ink}"/><circle cx="70" cy="9" r="3" fill="${C.ink}"/>
    <ellipse cx="50" cy="60" rx="31" ry="28" fill="${C.butter}" ${S}/>
    <path d="M26 76 Q50 86 74 76 L70 82 Q50 92 30 82 Z" fill="${C.ink}"/><path d="M21 44 Q50 34 79 44" stroke="${C.ink}" stroke-width="6" fill="none" stroke-linecap="round"/>
    ${F(50, 60)}`), // abeja
});
