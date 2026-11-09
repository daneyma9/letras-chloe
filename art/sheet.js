// Usage: node sheet.js <batch.js> <out.png>   Renders every icon of a batch on a contact sheet (large + small sizes).
const { chromium } = require('playwright');
const path = require('path');
const lib = require('./artlib.js');
(async () => {
  const icons = require(path.resolve(process.argv[2]))(lib);
  const cells = Object.entries(icons).map(([k, v]) => `<div class="c"><div class="big">${v}</div><div class="row"><span class="sm">${v}</span><span class="sm pink">${v}</span><b>${k}</b></div></div>`).join('');
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 800 } });
  await p.setContent(`<style>body{margin:0;padding:16px;background:#FFF3F8;font:20px sans-serif;display:grid;grid-template-columns:repeat(6,1fr);gap:12px}
    .c{background:#fff;border-radius:16px;padding:10px;text-align:center}.big svg{width:150px;height:150px}.row{display:flex;gap:10px;align-items:center;justify-content:center}
    .sm svg{width:40px;height:40px}.pink{background:#FFD9E8;border-radius:8px}</style>${cells}`);
  await p.screenshot({ path: process.argv[3], fullPage: true });
  await b.close();
  console.log('icons:', Object.keys(icons).length);
})();
