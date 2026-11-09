// Junta las ilustraciones de art/*.js y las mete en index.html (entre ART-START y ART-END).
// Uso: node art/build.js
const fs = require('fs');
const path = require('path');
const lib = require('./artlib.js');
const dir = __dirname;
const art = {};
for (const f of fs.readdirSync(dir).filter(f => /^(ref|batch[A-Z])\.js$/.test(f)).sort()) {
  for (const [k, v] of Object.entries(require(path.join(dir, f))(lib))) {
    art[k.replace(/️/g, '')] = v.replace(/\s*\n\s*/g, '').replace(/\s{2,}/g, ' ');
  }
}
const file = path.join(dir, '..', 'index.html');
const html = fs.readFileSync(file, 'utf8');
const out = html.replace(/\/\*ART-START\*\/[\s\S]*?\/\*ART-END\*\//, () => `/*ART-START*/const ART = ${JSON.stringify(art)};/*ART-END*/`);
if (out === html && !html.includes('ART-START')) throw new Error('No se encuentra ART-START en index.html');
fs.writeFileSync(file, out);
console.log(`${Object.keys(art).length} ilustraciones, ${Math.round(JSON.stringify(art).length / 1024)} KB`);
