import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const project = process.cwd();
const marketing = fs.readFileSync(path.join(project,'public/intelligence/index.html'),'utf8');
const demo = fs.readFileSync(path.join(project,'public/intelligence/demo/index.html'),'utf8');
const footer = fs.readFileSync(path.join(project,'src/components/Footer.tsx'),'utf8');

assert.match(marketing, /href="\/intelligence\/demo\/"/, 'Commercial landing must link to the demo');
assert.match(marketing, /href="\/contato\/"/, 'Landing must link to contact');
assert.match(footer, /href="\/intelligence\/"/, 'React footer must link to the microsite with a normal anchor');
assert.match(marketing, /noindex,nofollow/, 'Unvalidated service landing must not be indexed');
assert.match(demo, /noindex,nofollow/, 'Interactive prototype must not be indexed');
assert.match(demo, /Dados fictícios|dados fictícios|fictícios/, 'Must clearly label fictional data');
assert.match(demo, /respostas simuladas|respostas por regras/, 'Must disclose that this is not a connected model');

const ids = ['scenario','reset','leads','metric-conversations','metric-qualified','metric-forwarded','interest','priority','status','stage0','stage1','stage2','qualify','forward','chat-log','quick','chat-form','message','export','assistant-name','scenario-description'];
for (const id of ids) assert.ok(demo.includes('id="'+id+'"'), 'Missing interactive element: '+id);
const script = demo.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, 'Missing demo JavaScript');
new vm.Script(script, { filename: 'intelligence-demo.js' });
assert.doesNotMatch(script, /\bfetch\s*\(|XMLHttpRequest|WebSocket|localStorage|sessionStorage/, 'Demo must not use networking or browser storage');
assert.match(script,/createElement\("div"\)/,'Messages should use safe DOM nodes');
assert.match(script,/textContent=content/,'Chat must render user text without HTML interpolation');
assert.match(script,/text\/csv/,'CSV export should be available');

const outputRoot=path.join(project,'dist');
if(fs.existsSync(outputRoot)){
  for (const page of ['intelligence/index.html','intelligence/demo/index.html']){
    assert.ok(fs.existsSync(path.join(outputRoot,page)),'Build must include '+page);
  }
}
console.log('PASS: Orvalia Intelligence landing and simulator assets, JavaScript syntax, privacy guards, navigation and CSV export.');
