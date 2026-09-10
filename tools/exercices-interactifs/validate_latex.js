// Valide toutes les expressions LaTeX \( ... \) presentes dans un JSON de questions.
const katex = require('/tmp/katex_test/node_modules/katex/dist/katex.js');
const fs = require('fs');

const path = process.argv[2];
const data = JSON.parse(fs.readFileSync(path, 'utf8'));
const questions = Array.isArray(data) ? data : data.questions;

const delimRe = /\\\((.+?)\\\)/gs;
let total = 0, errors = 0;

function checkString(s, id, field) {
  if (typeof s !== 'string') return;
  let m;
  delimRe.lastIndex = 0;
  while ((m = delimRe.exec(s)) !== null) {
    total++;
    try {
      katex.renderToString(m[1], { throwOnError: true, strict: false });
    } catch (e) {
      errors++;
      console.log(`ERREUR [${id}] (${field}): "${m[1]}" -> ${e.message}`);
    }
  }
}

questions.forEach(q => {
  checkString(q.q, q.id, 'q');
  if (q.opts) q.opts.forEach((o, i) => checkString(o.text, q.id, 'opt' + i));
  checkString(q.ansText, q.id, 'ansText');
});

console.log(`\n${total} expressions LaTeX verifiees, ${errors} erreur(s).`);
process.exit(errors > 0 ? 1 : 0);
