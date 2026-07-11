import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const pub = 'public';
const orig = path.join(pub, 'originals');
fs.mkdirSync(orig, { recursive: true });

// longest-side cap + quality per asset (matched to how each is displayed)
const cfg = [
  ['LandingPage Full SEC1v2-01.jpg', 1000, 72],
  ['LandingPage Full Sec3-BG.jpg', 1400, 66],
  ['LandingPage Full Sec4-BG.jpg', 1000, 72],
  ['LandingPage Full Sec5-BG.jpg', 1400, 66],
  ['LandingPage Full Sec6-BG.jpg', 1400, 66],
  ['LandingPage Full Sec2 Box-1v2.png', 800, 80],
  ['LandingPage Full Sec2 Box-2v2.png', 800, 80],
  ['LandingPage Full Sec2 Box-3v2.png', 800, 80],
  ['LandingPage Full Sec2 Box-4v2.png', 800, 80],
  ['LandingPage Full Sec2 Box-5v2.png', 800, 80],
  ['LandingPage Full Sec2 Box-6v2.png', 800, 80],
  ['LandingPage Full Sec4-IC1.png', 256, 80],
  ['LandingPage Full Sec4-IC2.png', 256, 80],
  ['LandingPage Full Sec4-IC3.png', 256, 80],
  ['LandingPage Full Sec6- Box1.png', 1000, 80],
  ['LandingPage Full Sec6- Box2.png', 1000, 80],
];

const fmt = (n) => (n / 1024 / 1024).toFixed(2) + ' MB';
let before = 0, after = 0;

for (const [file, cap, q] of cfg) {
  const src = path.join(pub, file);
  if (!fs.existsSync(src)) { console.log('MISSING', file); continue; }
  const backup = path.join(orig, file);
  if (!fs.existsSync(backup)) fs.copyFileSync(src, backup);

  const inputBuf = fs.readFileSync(backup); // always optimize from pristine original
  const b = inputBuf.length;
  const isPng = file.toLowerCase().endsWith('.png');
  let pipe = sharp(inputBuf).resize({ width: cap, height: cap, fit: 'inside', withoutEnlargement: true });
  pipe = isPng
    ? pipe.png({ quality: q, compressionLevel: 9, palette: true, effort: 8 })
    : pipe.jpeg({ quality: q, mozjpeg: true });
  const outBuf = await pipe.toBuffer();
  fs.writeFileSync(src, outBuf);
  const a = outBuf.length;
  before += b; after += a;
  console.log(`${file.padEnd(40)} ${fmt(b).padStart(9)} -> ${fmt(a).padStart(9)}`);
}

console.log('-'.repeat(64));
console.log(`TOTAL ${fmt(before)} -> ${fmt(after)}  (${(100 - after / before * 100).toFixed(1)}% smaller)`);
