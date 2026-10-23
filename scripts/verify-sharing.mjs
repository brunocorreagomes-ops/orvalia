import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const imageSize = buffer => {
  if (buffer.subarray(1,4).toString()==='PNG') return [buffer.readUInt32BE(16),buffer.readUInt32BE(20)];
  assert.equal(buffer.readUInt16BE(0),0xffd8,'JPEG signature');
  let offset=2;
  while(offset<buffer.length){
    assert.equal(buffer[offset],0xff); const marker=buffer[offset+1]; offset+=2;
    if(marker===0xd9||marker===0xda) break;
    const length=buffer.readUInt16BE(offset);
    if([0xc0,0xc1,0xc2].includes(marker)) return [buffer.readUInt16BE(offset+5),buffer.readUInt16BE(offset+3)];
    offset+=length;
  }
  throw new Error('Image dimensions unavailable');
};
const files = fs.readdirSync('dist',{recursive:true}).filter(file=>file.endsWith('index.html'));
let pages=0;
for(const file of files){
 const html=fs.readFileSync(path.join('dist',file),'utf8');
 if(!html.includes('id="root"')||!html.includes('/assets/index-')) continue;
 const tags=[...html.matchAll(/<meta\b[^>]*>/gi)].map(m=>m[0]);
 const get=key=>tags.filter(tag=>tag.match(/(?:property|name)="([^"]+)"/)?.[1]===key);
 const value=key=>get(key)[0]?.match(/content="([^"]*)"/)?.[1];
 for(const key of ['og:title','og:description','og:url','og:type','og:image','og:image:secure_url','og:image:type','og:image:width','og:image:height','og:image:alt','twitter:card','twitter:image','twitter:title','twitter:description']){
   assert.equal(get(key).length,1,`${file}: ${key} exactly once`);assert(value(key),`${file}: ${key} empty`);
 }
 const image=new URL(value('og:image'));
 assert.equal(image.hostname,'orvalia.com.br');assert.equal(image.protocol,'https:');
 const local=path.join('public',decodeURIComponent(image.pathname));
 assert(fs.existsSync(local),`${file}: missing ${local}`);
 assert(fs.statSync(local).size<300000,`${file}: preview exceeds 300 KB`);
 assert.deepEqual(imageSize(fs.readFileSync(local)),[1200,630]);
 assert.equal(value('og:image:width'),'1200');assert.equal(value('og:image:height'),'630');
 assert.equal(value('og:image:secure_url'),value('og:image'));assert.equal(value('twitter:image'),value('og:image'));
 assert.equal(value('og:image:type'),local.endsWith('.png')?'image/png':'image/jpeg');
 if(file==='index.html') assert(value('og:title').includes('Seu negócio vale mais do que parece.'));
 if(file==='sobre/index.html') assert(value('og:title').includes('Sobre'));
 if(file==='portfolio/index.html') assert(value('og:title').includes('Portfólio'));
 if(html.includes('class="article-page"')) assert(image.pathname.startsWith('/blog/capas/'));
 pages++;
}
assert(pages>=50,'Expected all pre-rendered website pages');
console.log(`PASS: ${pages} pages with one complete sharing card each; all preview images exist, are 1200 × 630 and under 300 KB. Blog covers preserved.`);
