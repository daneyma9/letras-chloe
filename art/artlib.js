// Shared helpers for the "Letras con Lila" illustration set. viewBox is always 0 0 100 100.
const INK = '#5A2A6E';
const C = {
  ink: INK, white: '#FFFFFF',
  pink: '#FF5C9D', pinkL: '#FFD9E8', lilac: '#9B6BFF', lilacL: '#E9DFFF', sky: '#3FA2F0', skyL: '#D6ECFF',
  mint: '#1FBF93', mintL: '#CFF5E7', peach: '#FF8A5B', peachL: '#FFE2D3', butter: '#FFC93C', butterL: '#FFF2C6',
  red: '#FF5A6A', green: '#5CCB6B', greenD: '#2FA35A', brown: '#B8794A', brownL: '#E8BE8E', grey: '#CFC8DC', greyD: '#9A90AE',
};
// Main outline attributes (use on every main shape) and a thinner variant for details.
const S = `stroke="${INK}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`;
const T = `stroke="${INK}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"`;
// Kawaii face centred at (x, y): two eyes `gap` apart (each side), blush and a small smile. k scales it.
const F = (x, y, k = 1, gap = 11) => {
  const e = d => `<ellipse cx="${x + d * gap * k}" cy="${y}" rx="${3 * k}" ry="${4 * k}" fill="${INK}"/><circle cx="${x + d * gap * k + k}" cy="${y - 1.4 * k}" r="${1.1 * k}" fill="#fff"/>`;
  const b = d => `<ellipse cx="${x + d * (gap + 7) * k}" cy="${y + 6 * k}" rx="${4.2 * k}" ry="${2.6 * k}" fill="${C.pink}" opacity=".4"/>`;
  return `<g>${b(-1)}${b(1)}${e(-1)}${e(1)}<path d="M${x - 3.5 * k} ${y + 5 * k} Q${x} ${y + 9 * k} ${x + 3.5 * k} ${y + 5 * k}" ${T}/></g>`;
};
const W = inner => `<svg class="ill" viewBox="0 0 100 100" aria-hidden="true">${inner}</svg>`;
module.exports = { INK, C, S, T, F, W };
