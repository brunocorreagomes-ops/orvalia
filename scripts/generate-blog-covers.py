"""Render precise editorial sharing cards from the article registry (requires Pillow)."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import json
root=Path(__file__).resolve().parents[1]
s=(root/'src/data/articles.ts').read_text()
articles=json.loads(s.split('export const articles: Article[] = ',1)[1].rstrip().rstrip(';'))
out=root/'public/blog/capas';out.mkdir(parents=True,exist_ok=True)
font='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
bold='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
categories={'branding':'MARCA E POSICIONAMENTO','gap':'GAP DE PERCEPÇÃO','sites':'SITES E EXPERIÊNCIA','busca':'BUSCA E INTELIGÊNCIA ARTIFICIAL'}
for a in articles+[dict(id='perspectivas',title='Ideias que tornam o valor visível.',category='gap')]:
 im=Image.new('RGB',(1200,630),'#e9e8e3');d=ImageDraw.Draw(im)
 d.rectangle((900,0,1200,630),fill='#101e20')
 for y in range(50,630,60):d.line((900,y,1200,y),fill='#304b49')
 for x in range(900,1200,60):d.line((x,0,x,630),fill='#304b49')
 d.arc((955,195,1145,385),35,325,fill='#c3d0c8',width=3)
 d.ellipse((1033,278,1067,312),fill='#66e7e1')
 d.text((55,45),'ORVALIA / PERSPECTIVAS',font=ImageFont.truetype(bold,19),fill='#080a0c')
 d.text((55,112),categories[a['category']],font=ImageFont.truetype(font,16),fill='#006a67')
 size=48
 while True:
  f=ImageFont.truetype(font,size); lines=[];line=''
  for word in a['title'].split():
   test=(line+' '+word).strip()
   if d.textlength(test,font=f)>780 and line: lines.append(line);line=word
   else:line=test
  lines.append(line)
  if len(lines)<=5:break
  size-=2
 y=185
 for line in lines:d.text((52,y),line,font=f,fill='#080a0c');y+=size+12
 d.line((55,545,845,545),fill='#a5b1a9',width=1)
 d.text((55,566),'ESTRATÉGIA DE MARCA / EXPERIÊNCIA DIGITAL',font=ImageFont.truetype(font,15),fill='#46524d')
 im.save(out/(a['id']+'.png'),optimize=True)
print('Rendered',len(articles)+1,'sharing cards')
