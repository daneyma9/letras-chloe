// Batch E: people, a few things and UI icons. Each entry: 'emoji': W(`...`), // nombre
module.exports = ({ C, S, T, F, W }) => {
  const ears = (y, dx, r = 5) => `<circle cx="${50 - dx}" cy="${y}" r="${r}" fill="${C.peachL}" ${S}/><circle cx="${50 + dx}" cy="${y}" r="${r}" fill="${C.peachL}" ${S}/>`;
  const shoulders = col => `<path d="M17 93 C17 78 32 71 50 71 C68 71 83 78 83 93 Z" fill="${col}" ${S}/>`;
  return {
  '👧': W(`<ellipse cx="14" cy="64" rx="9" ry="15" transform="rotate(14 14 64)" fill="${C.brown}" ${S}/><ellipse cx="86" cy="64" rx="9" ry="15" transform="rotate(-14 86 64)" fill="${C.brown}" ${S}/>
    <path d="M23 60 C19 30 34 15 50 15 C66 15 81 30 77 60 Z" fill="${C.brown}" ${S}/>
    <circle cx="50" cy="59" r="26" fill="${C.peachL}" ${S}/>
    <path d="M24 55 C25 38 38 30 50 30 C62 30 75 38 76 55 C65 52 56 46 50 38 C44 46 35 52 24 55Z" fill="${C.brown}" ${S}/>
    <circle cx="21" cy="50" r="5" fill="${C.pink}" ${S}/><circle cx="79" cy="50" r="5" fill="${C.pink}" ${S}/>
    ${F(50, 65, 1, 10)}`), // niña
  '👦': W(`${ears(60, 28)}
    <circle cx="50" cy="56" r="29" fill="${C.peachL}" ${S}/>
    <path d="M21 52 C16 26 34 12 46 15 C48 9 56 7 60 10 C58 12 57 14 57 15 C74 16 86 32 79 52 C74 48 71 42 70 37 C58 44 42 44 32 37 C30 43 27 49 21 52Z" fill="${C.butter}" ${S}/>
    ${F(50, 63, 1, 10)}`), // niño
  '👩': W(`<path d="M50 7 C24 7 14 27 17 50 L14 78 Q22 85 31 80 L69 80 Q78 85 86 78 L83 50 C86 27 76 7 50 7Z" fill="${C.brown}" ${S}/>
    ${shoulders(C.lilac)}
    <circle cx="50" cy="47" r="24" fill="${C.peachL}" ${S}/>
    <path d="M26 45 C25 28 36 19 50 19 C64 19 75 28 74 45 C66 41 60 34 58 27 C50 38 38 44 26 45Z" fill="${C.brown}" ${S}/>
    <path d="M42 73 L50 80 L58 73" ${T}/>
    ${F(50, 52, 0.9, 10)}`), // mamá
  '👨': W(`${shoulders(C.sky)}
    ${ears(50, 24, 4.5)}
    <circle cx="50" cy="47" r="24" fill="${C.peachL}" ${S}/>
    <path d="M27.5 55 A24 24 0 0 0 72.5 55 C66 67 34 67 27.5 55Z" fill="${C.brown}" opacity=".45"/>
    <path d="M26 42 C22 22 36 11 52 12 C68 12 78 24 74 42 C70 36 68 32 67 28 C56 32 44 32 33 28 C32 33 30 38 26 42Z" fill="${C.brown}" ${S}/>
    <path d="M36 41 L44 40 M56 40 L64 41" ${T}/>
    <path d="M42 73 L50 80 L58 73" ${T}/>
    ${F(50, 49, 0.9, 10)}`), // papá
  '👵': W(`<circle cx="50" cy="17" r="11" fill="${C.grey}" ${S}/>
    <path d="M19 62 C15 34 32 22 50 22 C68 22 85 34 81 62 C83 78 77 88 68 90 L32 90 C23 88 17 78 19 62Z" fill="${C.grey}" ${S}/>
    <circle cx="50" cy="62" r="25" fill="${C.peachL}" ${S}/>
    <path d="M25 58 C26 42 38 35 50 35 C62 35 74 42 75 58 C68 54 60 48 50 44 C40 48 32 54 25 58Z" fill="${C.grey}" ${S}/>
    ${F(50, 67, 0.9, 11)}
    <circle cx="40.1" cy="67" r="7.5" ${T}/><circle cx="59.9" cy="67" r="7.5" ${T}/><path d="M47.6 66 Q50 64 52.4 66" ${T}/>`), // abuela
  '👴': W(`<ellipse cx="21" cy="46" rx="11" ry="14" fill="${C.grey}" ${S}/><ellipse cx="79" cy="46" rx="11" ry="14" fill="${C.grey}" ${S}/>
    ${ears(58, 28)}
    <circle cx="50" cy="52" r="30" fill="${C.peachL}" ${S}/>
    <path d="M40 27 Q50 22 60 27" stroke="${C.white}" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M35 43 Q40 39 45 42 M55 42 Q60 39 65 43" stroke="${C.greyD}" stroke-width="3.2" stroke-linecap="round" fill="none"/>
    ${F(50, 52, 1, 11)}
    <path d="M50 62 C44 56 33 58 30 68 C39 73 47 71 50 66 C53 71 61 73 70 68 C67 58 56 56 50 62Z" fill="${C.grey}" ${S}/>`), // abuelo
  '👶': W(`${ears(58, 33, 6)}
    <circle cx="50" cy="56" r="33" fill="${C.peachL}" ${S}/>
    <path d="M50 23 C42 12 55 5 60 12 C63 18 54 20 54 15" fill="none" stroke="${C.brown}" stroke-width="4.5" stroke-linecap="round"/>
    ${F(50, 54, 1.1, 12)}
    <circle cx="50" cy="69" r="9" fill="${C.sky}" ${S}/><circle cx="50" cy="69" r="3.5" fill="${C.butter}" stroke="${C.ink}" stroke-width="2"/>`), // bebé
  '🧓': W(`${shoulders(C.mint)}
    <path d="M24 50 C14 46 16 32 25 30 C24 18 38 12 46 17 C52 9 68 12 70 22 C82 22 86 36 78 42 C82 46 80 52 76 52 Z" fill="${C.grey}" ${S}/>
    ${ears(52, 23, 4.5)}
    <circle cx="50" cy="49" r="23" fill="${C.peachL}" ${S}/>
    <path d="M28 44 C30 32 40 27 50 27 C60 27 70 32 72 44 C64 40 58 36 54 32 C48 38 38 42 28 44Z" fill="${C.grey}" ${S}/>
    <path d="M42 74 L50 81 L58 74" ${T}/>
    ${F(50, 54, 0.9, 10)}`), // persona mayor
  '🐴': W(`<path d="M27 34 L24 8 L44 22 Z" fill="${C.brownL}" ${S}/><path d="M73 34 L76 8 L56 22 Z" fill="${C.brownL}" ${S}/>
    <path d="M66 22 C84 24 92 44 86 66 C84 74 78 76 74 72 L66 40 Z" fill="${C.brown}" ${S}/>
    <path d="M50 18 C68 18 76 32 74 50 C80 60 80 74 74 82 C68 92 32 92 26 82 C20 74 20 60 26 50 C24 32 32 18 50 18Z" fill="${C.brownL}" ${S}/>
    <path d="M26 66 C30 58 70 58 74 66 C80 74 76 84 70 87 C62 91 38 91 30 87 C24 84 20 74 26 66Z" fill="${C.peachL}"/>
    <path d="M38 22 C42 10 60 10 63 22 C60 32 53 38 44 40 C47 33 43 28 38 22Z" fill="${C.brown}" ${S}/>
    <ellipse cx="40" cy="77" rx="3.2" ry="4.4" fill="${C.ink}"/><ellipse cx="60" cy="77" rx="3.2" ry="4.4" fill="${C.ink}"/>
    ${F(50, 50, 1, 12)}`), // caballo
  '🛁': W(`<path d="M82 46 L82 26 Q82 16 73 16 Q66 16 66 24" fill="none" stroke="${C.ink}" stroke-width="10" stroke-linecap="round"/><path d="M82 46 L82 26 Q82 16 73 16 Q66 16 66 24" fill="none" stroke="${C.grey}" stroke-width="4" stroke-linecap="round"/>
    <circle cx="27" cy="36" r="10" fill="${C.white}" ${S}/><circle cx="56" cy="38" r="8" fill="${C.white}" ${S}/><circle cx="42" cy="30" r="12" fill="${C.white}" ${S}/>
    <circle cx="20" cy="15" r="4.5" fill="${C.skyL}" stroke="${C.ink}" stroke-width="2.4"/><circle cx="52" cy="11" r="3" fill="${C.skyL}" stroke="${C.ink}" stroke-width="2.4"/>
    <circle cx="30" cy="87" r="5.5" fill="${C.lilac}" ${S}/><circle cx="70" cy="87" r="5.5" fill="${C.lilac}" ${S}/>
    <path d="M13 50 L87 50 C87 72 78 85 64 85 L36 85 C22 85 13 72 13 50Z" fill="${C.skyL}" ${S}/>
    <rect x="7" y="43" width="86" height="10" rx="5" fill="${C.white}" ${S}/>
    ${F(50, 65)}`), // bañera
  '📚': W(`<rect x="12" y="64" width="76" height="22" rx="5" fill="${C.pink}" ${S}/><path d="M68 69 L88 69 L88 81 L68 81 Q64 75 68 69Z" fill="${C.white}" ${S}/>
    <rect x="20" y="42" width="66" height="22" rx="5" fill="${C.sky}" ${S}/><path d="M32 47 L20 47 L20 59 L32 59 Q36 53 32 47Z" fill="${C.white}" ${S}/>
    <rect x="14" y="20" width="68" height="22" rx="5" fill="${C.butter}" ${S}/><path d="M64 25 L82 25 L82 37 L64 37 Q60 31 64 25Z" fill="${C.white}" ${S}/>
    <path d="M24 20 L24 42" ${T}/><path d="M22 64 L22 86" ${T}/>
    ${F(58, 51, 0.8, 10)}`), // libros
  '🎨': W(`<path d="M50 13 C76 13 93 30 93 50 C93 62 84 66 76 64 C66 61 60 68 64 76 C68 84 62 89 48 89 C24 89 7 73 7 51 C7 29 24 13 50 13Z" fill="${C.brownL}" ${S}/>
    <circle cx="25" cy="42" r="7.5" fill="${C.red}" stroke="${C.ink}" stroke-width="2.4"/><circle cx="42" cy="28" r="7.5" fill="${C.butter}" stroke="${C.ink}" stroke-width="2.4"/>
    <circle cx="62" cy="28" r="7.5" fill="${C.green}" stroke="${C.ink}" stroke-width="2.4"/><circle cx="78" cy="42" r="7.5" fill="${C.sky}" stroke="${C.ink}" stroke-width="2.4"/>
    <circle cx="22" cy="62" r="6" fill="${C.lilac}" stroke="${C.ink}" stroke-width="2.4"/>
    ${F(47, 58, 0.9, 10)}`), // paleta
  '🎵': W(`<path d="M55 12 C60 28 84 28 82 52 C74 40 64 40 55 38Z" fill="${C.lilac}" ${S}/>
    <rect x="50" y="10" width="9" height="62" rx="4.5" fill="${C.lilac}" ${S}/>
    <ellipse cx="37" cy="70" rx="23" ry="19" transform="rotate(-18 37 70)" fill="${C.lilac}" ${S}/>
    <path d="M22 62 Q26 55 33 54" stroke="${C.white}" stroke-width="3" stroke-linecap="round" fill="none" opacity=".7"/>
    ${F(37, 70, 0.9, 10)}`), // nota
  '✏️': W(`<g transform="rotate(135 50 50)">
    <path d="M6 38 L-1 38 Q-6 38 -6 43 L-6 57 Q-6 62 -1 62 L6 62 Z" fill="${C.pink}" ${S}/>
    <rect x="6" y="38" width="12" height="24" fill="${C.grey}" ${S}/>
    <rect x="18" y="38" width="60" height="24" fill="${C.butter}" ${S}/>
    <path d="M78 38 L106 50 L78 62 Z" fill="${C.brownL}" ${S}/>
    <path d="M97 46.2 L106 50 L97 53.8 Z" fill="${C.ink}" ${S}/>
    <path d="M18 50 L78 50" ${T}/></g>`), // lápiz
  '📖': W(`<rect x="7" y="24" width="86" height="62" rx="7" fill="${C.lilac}" ${S}/>
    <path d="M50 30 C40 20 24 19 13 24 L13 76 C24 72 40 73 50 81Z" fill="${C.white}" ${S}/>
    <path d="M50 30 C60 20 76 19 87 24 L87 76 C76 72 60 73 50 81Z" fill="${C.white}" ${S}/>
    <path d="M21 36 Q32 33 42 38 M21 48 Q32 45 42 50 M21 60 Q32 57 42 62 M79 36 Q68 33 58 38 M79 48 Q68 45 58 50 M79 60 Q68 57 58 62" stroke="${C.greyD}" stroke-width="2.6" stroke-linecap="round" fill="none"/>`), // libro abierto
  '💬': W(`<path d="M32 14 L68 14 Q92 14 92 38 L92 46 Q92 70 68 70 L48 70 L24 90 L29 70 Q8 68 8 46 L8 38 Q8 14 32 14Z" fill="${C.lilacL}" ${S}/>
    <circle cx="30" cy="42" r="6.5" fill="${C.lilac}"/><circle cx="50" cy="42" r="6.5" fill="${C.lilac}"/><circle cx="70" cy="42" r="6.5" fill="${C.lilac}"/>`), // bocadillo
  '🔒': W(`<path d="M32 50 L32 34 C32 10 68 10 68 34 L68 50" fill="none" stroke="${C.ink}" stroke-width="15" stroke-linecap="round"/><path d="M32 50 L32 34 C32 10 68 10 68 34 L68 50" fill="none" stroke="${C.grey}" stroke-width="8" stroke-linecap="round"/>
    <rect x="16" y="44" width="68" height="47" rx="11" fill="${C.butter}" ${S}/>
    <circle cx="50" cy="62" r="7" fill="${C.ink}"/><path d="M46.5 64 L53.5 64 L56 79 L44 79 Z" fill="${C.ink}" stroke="${C.ink}" stroke-width="2" stroke-linejoin="round"/>`), // candado
  };
};
