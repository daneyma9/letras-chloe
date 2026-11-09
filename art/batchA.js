// Batch A: animals. Each entry: 'emoji': W(`...`), // nombre
module.exports = ({ C, S, T, F, W }) => ({
  '🐘': W(`<ellipse cx="21" cy="42" rx="15" ry="22" fill="${C.grey}" ${S}/><ellipse cx="79" cy="42" rx="15" ry="22" fill="${C.grey}" ${S}/>
    <ellipse cx="20" cy="42" rx="7" ry="13" fill="${C.pinkL}"/><ellipse cx="80" cy="42" rx="7" ry="13" fill="${C.pinkL}"/>
    <ellipse cx="50" cy="42" rx="27" ry="28" fill="${C.grey}" ${S}/>
    <path d="M41 58 Q50 52 59 58 L59 76 Q59 82 65 81 Q73 80 73 87 Q71 94 58 93 Q41 92 41 76 Z" fill="${C.grey}" ${S}/>
    <path d="M44 66 Q50 69 56 66 M44 75 Q50 78 56 75" ${T}/>
    ${F(50, 40, 1, 13)}`), // elefante
  '🦭': W(`<path d="M16 48 C10 76 30 90 56 88 C72 87 80 78 83 66 L94 54 L80 57 L75 46 C71 62 62 66 54 62 Z" fill="${C.skyL}" ${S}/>
    <path d="M36 82 C36 92 46 95 56 92 C54 86 50 82 46 80 Z" fill="${C.skyL}" ${S}/>
    <circle cx="37" cy="40" r="26" fill="${C.skyL}" ${S}/>
    <ellipse cx="37" cy="48" rx="12" ry="8" fill="${C.white}"/>
    <path d="M12 44 L22 46 M12 53 L22 51 M62 44 L52 46 M62 53 L52 51" ${T}/>
    <ellipse cx="37" cy="42" rx="3.6" ry="2.4" fill="${C.ink}"/>
    ${F(37, 40, 1, 13)}`), // foca
  '🦒': W(`<path d="M38 50 L38 92 L62 92 L62 50 Z" fill="${C.butter}" ${S}/>
    <g fill="${C.brown}"><ellipse cx="45" cy="68" rx="4" ry="5"/><ellipse cx="56" cy="78" rx="4" ry="4.5"/><ellipse cx="45" cy="86" rx="3.5" ry="3"/><ellipse cx="57" cy="63" rx="3" ry="3.5"/></g>
    <path d="M42 20 L40 9 M58 20 L60 9" fill="none" ${S}/><circle cx="40" cy="8" r="3.5" fill="${C.brown}" ${S}/><circle cx="60" cy="8" r="3.5" fill="${C.brown}" ${S}/>
    <ellipse cx="23" cy="30" rx="11" ry="6.5" transform="rotate(-20 23 30)" fill="${C.butter}" ${S}/><ellipse cx="77" cy="30" rx="11" ry="6.5" transform="rotate(20 77 30)" fill="${C.butter}" ${S}/>
    <ellipse cx="50" cy="38" rx="22" ry="22" fill="${C.butter}" ${S}/>
    <ellipse cx="50" cy="51" rx="15" ry="8" fill="${C.butterL}"/>
    <circle cx="45" cy="51" r="1.6" fill="${C.ink}"/><circle cx="55" cy="51" r="1.6" fill="${C.ink}"/>
    ${F(50, 34, 1, 11)}`), // jirafa
  '🦋': W(`<ellipse cx="29" cy="36" rx="20" ry="25" transform="rotate(-20 29 36)" fill="${C.pink}" ${S}/><ellipse cx="71" cy="36" rx="20" ry="25" transform="rotate(20 71 36)" fill="${C.pink}" ${S}/>
    <ellipse cx="31" cy="72" rx="16" ry="15" fill="${C.lilac}" ${S}/><ellipse cx="69" cy="72" rx="16" ry="15" fill="${C.lilac}" ${S}/>
    <g fill="${C.white}"><circle cx="23" cy="28" r="5"/><circle cx="77" cy="28" r="5"/><circle cx="28" cy="74" r="4"/><circle cx="72" cy="74" r="4"/></g>
    <path d="M45 22 Q42 12 36 9 M55 22 Q58 12 64 9" ${T}/><circle cx="36" cy="9" r="2.8" fill="${C.ink}"/><circle cx="64" cy="9" r="2.8" fill="${C.ink}"/>
    <ellipse cx="50" cy="64" rx="8" ry="24" fill="${C.butter}" ${S}/>
    <circle cx="50" cy="35" r="15" fill="${C.butter}" ${S}/>
    ${F(50, 33, 0.75, 8)}`), // mariposa
  '🐻': W(`<circle cx="23" cy="28" r="13" fill="${C.brown}" ${S}/><circle cx="77" cy="28" r="13" fill="${C.brown}" ${S}/>
    <circle cx="23" cy="28" r="6" fill="${C.brownL}"/><circle cx="77" cy="28" r="6" fill="${C.brownL}"/>
    <ellipse cx="50" cy="55" rx="36" ry="32" fill="${C.brown}" ${S}/>
    <ellipse cx="50" cy="62" rx="12" ry="10" fill="${C.brownL}"/>
    <ellipse cx="50" cy="58" rx="4.4" ry="2.8" fill="${C.ink}"/>
    ${F(50, 56, 1, 16)}`), // oso
  '🐮': W(`<path d="M34 24 C27 22 23 15 25 8 C32 10 38 14 41 20 Z" fill="${C.butterL}" ${S}/><path d="M66 24 C73 22 77 15 75 8 C68 10 62 14 59 20 Z" fill="${C.butterL}" ${S}/>
    <ellipse cx="18" cy="38" rx="10" ry="6.5" transform="rotate(-20 18 38)" fill="${C.pinkL}" ${S}/><ellipse cx="82" cy="38" rx="10" ry="6.5" transform="rotate(20 82 38)" fill="${C.pinkL}" ${S}/>
    <ellipse cx="50" cy="46" rx="29" ry="28" fill="${C.white}" ${S}/>
    <ellipse cx="65" cy="30" rx="8" ry="5.5" transform="rotate(35 65 30)" fill="${C.ink}"/><ellipse cx="29" cy="50" rx="4.5" ry="7" fill="${C.ink}"/>
    <ellipse cx="50" cy="69" rx="25" ry="16" fill="${C.pinkL}" ${S}/>
    <ellipse cx="41" cy="69" rx="2.6" ry="3.6" fill="${C.ink}"/><ellipse cx="59" cy="69" rx="2.6" ry="3.6" fill="${C.ink}"/>
    ${F(50, 42, 1, 11)}`), // vaca
  '🐳': W(`<path d="M40 30 L40 20 M40 20 Q32 9 25 16 M40 20 Q48 9 55 16" fill="none" stroke="${C.sky}" stroke-width="4" stroke-linecap="round"/>
    <path d="M8 60 C8 40 26 32 46 32 C62 32 72 42 76 52 C80 48 82 44 82 38 C76 36 72 30 72 22 C78 24 83 27 85 31 C87 27 91 23 96 22 C97 30 94 36 89 39 C90 58 80 82 50 84 C24 86 8 78 8 60 Z" fill="${C.sky}" ${S}/>
    <path d="M12 70 C26 78 58 80 82 64 C76 78 62 83 50 83 C30 84 16 80 12 70 Z" fill="${C.skyL}"/>
    <path d="M8 60 C8 40 26 32 46 32 C62 32 72 42 76 52 C80 48 82 44 82 38 C76 36 72 30 72 22 C78 24 83 27 85 31 C87 27 91 23 96 22 C97 30 94 36 89 39 C90 58 80 82 50 84 C24 86 8 78 8 60 Z" fill="none" ${S}/>
    <path d="M50 64 C49 74 56 79 65 77 C64 70 60 65 55 62 Z" fill="${C.sky}" ${S}/>
    ${F(34, 54, 1, 12)}`), // ballena
  '🐌': W(`<path d="M10 60 C10 44 20 40 28 43 C37 46 38 58 38 70 L86 74 C95 76 94 88 84 88 L30 88 C15 88 10 76 10 60 Z" fill="${C.mintL}" ${S}/>
    <path d="M19 44 L15 30 M30 43 L33 29" fill="none" ${S}/><circle cx="15" cy="29" r="3.5" fill="${C.mintL}" ${S}/><circle cx="33" cy="28" r="3.5" fill="${C.mintL}" ${S}/>
    <circle cx="64" cy="52" r="27" fill="${C.peach}" ${S}/>
    <path d="M64 70 A18 18 0 1 1 82 52 A12 12 0 0 1 58 52 A6 6 0 0 1 70 52" ${T}/>
    ${F(24, 60, 0.7, 6.5)}`), // caracol
  '🦕': W(`<path d="M76 58 C86 56 91 48 94 40 C97 54 93 72 78 76 Z" fill="${C.green}" ${S}/>
    <path d="M38 72 L38 88 Q38 91 41 91 L49 91 Q52 91 52 88 L52 72 Z" fill="${C.green}" ${S}/><path d="M62 72 L62 88 Q62 91 65 91 L73 91 Q76 91 76 88 L76 72 Z" fill="${C.green}" ${S}/>
    <path d="M17 30 C18 46 24 58 34 70 L52 58 C44 52 38 42 37 30 Z" fill="${C.green}" ${S}/>
    <ellipse cx="57" cy="65" rx="27" ry="18" fill="${C.green}" ${S}/>
    <g fill="${C.greenD}"><circle cx="52" cy="56" r="3.5"/><circle cx="64" cy="54" r="3"/><circle cx="74" cy="60" r="3"/><circle cx="60" cy="64" r="2.5"/></g>
    <ellipse cx="27" cy="25" rx="17" ry="14" fill="${C.green}" ${S}/>
    ${F(27, 23, 0.75, 7)}`), // dinosaurio
  '🐬': W(`<path d="M50 30 C54 19 62 13 71 12 C67 19 67 27 70 34 Z" fill="${C.sky}" ${S}/>
    <path d="M8 63 C10 57 16 55 22 53 C24 37 40 27 56 29 C74 31 84 44 85 58 C90 56 95 58 96 64 C92 64 89 66 87 69 C89 74 88 80 84 84 C80 80 78 76 78 71 C70 82 42 85 27 71 C20 71 12 69 8 63 Z" fill="${C.sky}" ${S}/>
    <path d="M27 69 C40 76 62 76 76 68 C68 80 42 82 27 69 Z" fill="${C.skyL}"/>
    <path d="M46 72 C46 82 52 88 60 88 C58 82 58 76 56 72 Z" fill="${C.sky}" ${S}/>
    ${F(40, 50, 0.9, 10)}`), // delfín
  '🐵': W(`<circle cx="18" cy="52" r="11" fill="${C.brown}" ${S}/><circle cx="82" cy="52" r="11" fill="${C.brown}" ${S}/>
    <circle cx="17" cy="52" r="5" fill="${C.brownL}"/><circle cx="83" cy="52" r="5" fill="${C.brownL}"/>
    <path d="M44 20 Q46 10 52 12 Q50 15 54 20" fill="${C.brown}" ${S}/>
    <ellipse cx="50" cy="52" rx="31" ry="34" fill="${C.brown}" ${S}/>
    <path d="M50 36 C42 28 27 32 27 47 C27 55 31 59 35 61 C31 76 42 82 50 82 C58 82 69 76 65 61 C69 59 73 55 73 47 C73 32 58 28 50 36 Z" fill="${C.brownL}"/>
    <ellipse cx="50" cy="56" rx="3.4" ry="2.2" fill="${C.brown}"/>
    ${F(50, 54, 1.15, 10)}`), // mono
  '🦆': W(`<path d="M20 66 C20 52 34 50 50 52 C62 54 76 54 91 43 C95 64 84 88 56 89 C34 90 20 82 20 66 Z" fill="${C.butter}" ${S}/>
    <path d="M50 68 C58 61 72 62 77 68 C73 79 57 80 50 68 Z" fill="${C.butterL}" ${S}/>
    <circle cx="38" cy="36" r="24" fill="${C.butter}" ${S}/>
    <path d="M38 13 Q36 6 42 5" ${T}/>
    ${F(38, 33, 1, 11)}
    <ellipse cx="38" cy="43" rx="10" ry="5.5" fill="${C.peach}" ${S}/>`), // pato
  '🐶': W(`<ellipse cx="50" cy="52" rx="31" ry="33" fill="${C.brownL}" ${S}/>
    <ellipse cx="66" cy="52" rx="10" ry="11" fill="${C.brown}" opacity=".55"/>
    <path d="M30 22 C12 18 4 40 8 62 C10 74 23 74 25 61 C26 48 34 38 30 22 Z" fill="${C.brown}" ${S}/><path d="M70 22 C88 18 96 40 92 62 C90 74 77 74 75 61 C74 48 66 38 70 22 Z" fill="${C.brown}" ${S}/>
    <ellipse cx="50" cy="60" rx="12" ry="10" fill="${C.white}"/>
    <path d="M46.5 62 L53.5 62 L53.5 67 Q53.5 70.5 50 70.5 Q46.5 70.5 46.5 67 Z" fill="${C.pink}" stroke="${C.ink}" stroke-width="1.6" stroke-linejoin="round"/>
    <ellipse cx="50" cy="55" rx="4.4" ry="2.8" fill="${C.ink}"/>
    ${F(50, 53, 1, 16)}`), // perro
  '🐟': W(`<path d="M70 52 L92 32 C89 45 89 59 92 72 Z" fill="${C.butter}" ${S}/>
    <path d="M32 31 C38 15 54 15 60 31 Z" fill="${C.butter}" ${S}/><path d="M40 74 C44 84 52 84 56 75 Z" fill="${C.butter}" ${S}/>
    <ellipse cx="44" cy="52" rx="34" ry="24" fill="${C.peach}" ${S}/>
    <path d="M58 40 Q64 46 58 52 M58 52 Q64 58 58 64 M67 46 Q72 52 67 58" ${T}/>
    ${F(33, 50, 1, 10)}`), // pez
  '🐸': W(`<circle cx="30" cy="30" r="14" fill="${C.green}" ${S}/><circle cx="70" cy="30" r="14" fill="${C.green}" ${S}/>
    <ellipse cx="50" cy="56" rx="40" ry="30" fill="${C.green}" ${S}/>
    <circle cx="30" cy="30" r="9" fill="${C.white}"/><circle cx="70" cy="30" r="9" fill="${C.white}"/>
    <ellipse cx="50" cy="74" rx="20" ry="9" fill="${C.butterL}" opacity=".8"/>
    <path d="M30 58 Q50 72 70 58" ${T}/>
    <circle cx="46" cy="47" r="1.3" fill="${C.ink}"/><circle cx="54" cy="47" r="1.3" fill="${C.ink}"/>
    <g>${[-1, 1].map(d => `<ellipse cx="${50 + d * 20}" cy="31" rx="4" ry="5.2" fill="${C.ink}"/><circle cx="${50 + d * 20 + 1.3}" cy="29" r="1.5" fill="#fff"/><ellipse cx="${50 + d * 29}" cy="52" rx="5.2" ry="3.2" fill="${C.pink}" opacity=".4"/>`).join('')}</g>`), // rana
  '🐭': W(`<circle cx="23" cy="30" r="18" fill="${C.grey}" ${S}/><circle cx="77" cy="30" r="18" fill="${C.grey}" ${S}/>
    <circle cx="23" cy="30" r="10" fill="${C.pinkL}"/><circle cx="77" cy="30" r="10" fill="${C.pinkL}"/>
    <ellipse cx="50" cy="60" rx="31" ry="28" fill="${C.grey}" ${S}/>
    <path d="M8 60 L21 63 M9 72 L22 69 M92 60 L79 63 M91 72 L78 69" ${T}/>
    <ellipse cx="50" cy="59" rx="3.8" ry="2.6" fill="${C.pink}" stroke="${C.ink}" stroke-width="1.6"/>
    ${F(50, 57, 1, 13)}`), // ratón
  '🐢': W(`<g transform="translate(0 -6)"><path d="M90 62 L97 68 L88 70 Z" fill="${C.green}" ${S}/>
    <path d="M36 66 L36 84 Q36 87 39 87 L47 87 Q50 87 50 84 L50 66 Z" fill="${C.green}" ${S}/><path d="M70 66 L70 84 Q70 87 73 87 L81 87 Q84 87 84 84 L84 66 Z" fill="${C.green}" ${S}/>
    <path d="M26 70 C26 42 44 28 60 28 C78 28 93 44 93 70 Z" fill="${C.greenD}" ${S}/>
    <g fill="${C.green}"><ellipse cx="60" cy="42" rx="8" ry="6"/><ellipse cx="44" cy="56" rx="7" ry="6"/><ellipse cx="62" cy="59" rx="7" ry="5.5"/><ellipse cx="79" cy="55" rx="6" ry="6"/></g>
    <circle cx="23" cy="54" r="16" fill="${C.green}" ${S}/>
    ${F(23, 52, 0.75, 6.5)}</g>`), // tortuga
  '🦊': W(`<path d="M20 44 L15 10 L44 28 Z" fill="${C.peach}" ${S}/><path d="M80 44 L85 10 L56 28 Z" fill="${C.peach}" ${S}/>
    <path d="M24 34 L22 20 L34 28 Z" fill="${C.ink}"/><path d="M76 34 L78 20 L66 28 Z" fill="${C.ink}"/>
    <path d="M50 90 C32 88 8 70 10 54 C12 38 30 28 50 28 C70 28 88 38 90 54 C92 70 68 88 50 90 Z" fill="${C.peach}" ${S}/>
    <path d="M11 58 C14 72 34 87 50 89 C66 87 86 72 89 58 C76 58 60 62 50 72 C40 62 24 58 11 58 Z" fill="${C.white}"/>
    <path d="M50 90 C32 88 8 70 10 54 C12 38 30 28 50 28 C70 28 88 38 90 54 C92 70 68 88 50 90 Z" fill="none" ${S}/>
    <ellipse cx="50" cy="74" rx="4.4" ry="3" fill="${C.ink}"/>
    ${F(50, 54, 1, 14)}`), // zorro
  '🐞': W(`<path d="M42 20 Q40 11 34 9 M58 20 Q60 11 66 9" ${T}/><circle cx="34" cy="9" r="3" fill="${C.ink}"/><circle cx="66" cy="9" r="3" fill="${C.ink}"/>
    <ellipse cx="50" cy="31" rx="21" ry="15" fill="${C.ink}" ${S}/>
    <ellipse cx="50" cy="59" rx="34" ry="30" fill="${C.red}" ${S}/>
    <path d="M50 70 L50 88" ${T}/>
    <g fill="${C.ink}"><circle cx="27" cy="46" r="5"/><circle cx="73" cy="46" r="5"/><circle cx="31" cy="73" r="5"/><circle cx="69" cy="73" r="5"/><circle cx="50" cy="37" r="4"/></g>
    ${F(50, 55)}`), // mariquita
  '🐣': W(`<path d="M50 20 Q45 11 51 8 M50 20 Q57 12 62 14" ${T}/>
    <circle cx="50" cy="46" r="27" fill="${C.butter}" ${S}/>
    <path d="M17 62 L28 53 L39 63 L50 53 L61 63 L72 53 L83 62 C85 82 69 92 50 92 C31 92 15 82 17 62 Z" fill="${C.white}" ${S}/>
    ${F(50, 40, 1, 12)}
    <path d="M44.5 44 L55.5 44 L50 51.5 Z" fill="${C.peach}" stroke="${C.ink}" stroke-width="2" stroke-linejoin="round"/>`), // pollito
  '🐰': W(`<ellipse cx="35" cy="27" rx="10" ry="20" transform="rotate(-8 35 27)" fill="${C.white}" ${S}/><ellipse cx="65" cy="27" rx="10" ry="20" transform="rotate(8 65 27)" fill="${C.white}" ${S}/>
    <ellipse cx="35" cy="28" rx="4.5" ry="13" transform="rotate(-8 35 28)" fill="${C.pinkL}"/><ellipse cx="65" cy="28" rx="4.5" ry="13" transform="rotate(8 65 28)" fill="${C.pinkL}"/>
    <ellipse cx="50" cy="64" rx="31" ry="26" fill="${C.white}" ${S}/>
    <path d="M9 62 L21 65 M10 74 L22 71 M91 62 L79 65 M90 74 L78 71" ${T}/>
    <path d="M46.5 68 L53.5 68 L53.5 73 Q53.5 74.5 52 74.5 L48 74.5 Q46.5 74.5 46.5 73 Z M50 68 L50 74" fill="${C.white}" stroke="${C.ink}" stroke-width="1.6" stroke-linejoin="round"/>
    <ellipse cx="50" cy="63" rx="3.8" ry="2.6" fill="${C.pink}" stroke="${C.ink}" stroke-width="1.6"/>
    ${F(50, 61, 1, 13)}`), // conejo
  '🐼': W(`<circle cx="22" cy="28" r="13" fill="${C.ink}" ${S}/><circle cx="78" cy="28" r="13" fill="${C.ink}" ${S}/>
    <ellipse cx="50" cy="56" rx="36" ry="32" fill="${C.white}" ${S}/>
    <ellipse cx="33" cy="55" rx="10" ry="12.5" transform="rotate(20 33 55)" fill="${C.greyD}"/><ellipse cx="67" cy="55" rx="10" ry="12.5" transform="rotate(-20 67 55)" fill="${C.greyD}"/>
    <ellipse cx="50" cy="58" rx="4.4" ry="2.8" fill="${C.ink}"/>
    ${F(50, 56, 1, 16)}`), // panda
  '🦩': W(`<path d="M55 66 L55 90 L47 90 M65 66 L65 90 L57 90" fill="none" ${S}/>
    <path d="M30 34 C30 44 21 46 23 56 C25 65 38 63 45 56" fill="none" stroke="${C.ink}" stroke-width="13" stroke-linecap="round"/>
    <path d="M30 34 C30 44 21 46 23 56 C25 65 38 63 45 56" fill="none" stroke="${C.pink}" stroke-width="6" stroke-linecap="round"/>
    <path d="M36 54 C38 40 56 36 70 40 C80 43 88 44 93 40 C92 56 82 70 62 70 C46 70 35 64 36 54 Z" fill="${C.pink}" ${S}/>
    <path d="M52 52 C60 46 72 48 78 54" ${T}/>
    <path d="M19 20 C10 20 7 29 11 37 C17 35 22 31 25 27 Z" fill="${C.white}" ${S}/><path d="M9 30 C9 33 10 35 11 37 C14 36 16 35 18 33 Z" fill="${C.ink}"/>
    <circle cx="32" cy="22" r="15" fill="${C.pink}" ${S}/>
    ${F(33, 20, 0.7, 6.5)}`), // flamenco
  '🐙': W(`<path d="M28 54 C22 68 16 70 12 78 M37 62 C35 76 30 82 25 87 M46 66 C46 78 45 84 43 89 M72 54 C78 68 84 70 88 78 M63 62 C65 76 70 82 75 87 M54 66 C54 78 55 84 57 89" fill="none" stroke="${C.ink}" stroke-width="14" stroke-linecap="round"/>
    <path d="M28 54 C22 68 16 70 12 78 M37 62 C35 76 30 82 25 87 M46 66 C46 78 45 84 43 89 M72 54 C78 68 84 70 88 78 M63 62 C65 76 70 82 75 87 M54 66 C54 78 55 84 57 89" fill="none" stroke="${C.lilac}" stroke-width="7" stroke-linecap="round"/>
    <ellipse cx="50" cy="40" rx="31" ry="30" fill="${C.lilac}" ${S}/>
    <g fill="${C.lilacL}"><circle cx="34" cy="22" r="3.5"/><circle cx="43" cy="17" r="2.2"/></g>
    ${F(50, 44, 1.1, 12)}`), // pulpo
});
