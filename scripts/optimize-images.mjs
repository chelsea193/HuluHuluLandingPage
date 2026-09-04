/**
 * SUPERSEDED by scripts/to-webp.mjs — do not run this.
 *
 * This pass kept each asset in its original format, which left photographic
 * artwork in palette PNG (one background was still 1.37 MB). The artwork is now
 * WebP and the components reference `.webp`, so running this would write back
 * the .png/.jpg files that nothing loads any more. Kept only for reference.
 *
 * Resize + recompress every still image in public/ that src/v2 references.
 *
 * Filenames and extensions are kept identical so no component has to change;
 * each asset is just capped at the size it is actually displayed at. Pristine
 * copies live in asset-originals/ and are always the encoder input, so this
 * script is safe to re-run. That directory sits outside public/ on purpose:
 * Vite copies all of publicDir into dist, so backups kept there would ship.
 *
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const pub = 'public';
const orig = 'asset-originals';
fs.mkdirSync(orig, { recursive: true });

// [file, longest-side cap, quality] — caps match how each asset is displayed.
const cfg = [
  // Full-bleed section backgrounds (never wider than the 1280px content column
  // at 2x on the widest common laptop, so 1600 is generous).
  ['LandingPage Full Sec4-BG.jpg', 1600, 70],
  ['LandingPage Full SEC1v2-01.jpg', 1600, 70],
  ['LandingPage Full Sec6-BG.jpg', 1600, 70],
  ['LandingPage Full Sec3-BG.jpg', 1400, 70],
  ['LandingPage Full Sec5-BG.jpg', 1400, 70],
  ['LandingPage Full Sec6-BG above section.jpg', 1200, 70],
  ['LandingPage Full Sec6-BG below section.jpg', 1200, 70],
  ['LandingPage Desktop Part3 BG.png', 1600, 78],
  ['LandingPage Desktop Part4 BG.png', 1600, 78],
  ['LandingPage Desktop Part5 Bg.png', 1600, 78],
  ['LandingPage Desktop Part6 BG.png', 1600, 78],
  ['LandingPage Desktop Part2 Column.png', 1200, 78],

  // Card photography — rendered at roughly half the content width.
  ['LandingPage Full Sec6- Box1.png', 900, 78],
  ['LandingPage Full Sec6- Box2.png', 900, 78],
  ['LandingPage Desktop Part6 Box1 PIC.png', 900, 78],
  ['LandingPage Desktop Part6 Box2 PIC.png', 900, 78],
  ['LandingPage Full Sec2 Box-1v2.png', 800, 78],
  ['LandingPage Full Sec2 Box-2v2.png', 800, 78],
  ['LandingPage Full Sec2 Box-3v2.png', 800, 78],
  ['LandingPage Full Sec2 Box-4v2.png', 800, 78],
  ['LandingPage Full Sec2 Box-5v2.png', 800, 78],
  ['LandingPage Full Sec2 Box-6v2.png', 800, 78],

  // Icons / small art.
  ['LandingPage Full Sec4-IC1.png', 400, 80],
  ['LandingPage Full Sec4-IC2.png', 400, 80],
  ['LandingPage Full Sec4-IC3.png', 400, 80],
  ['LandingPage Desktop Part3 IC1-Mental.png', 256, 80],
  ['LandingPage Desktop Part3 IC2-Wood.png', 256, 80],
  ['LandingPage Desktop Part3 IC3-water.png', 256, 80],
  ['LandingPage Desktop Part3 IC4-fire.png', 256, 80],
  ['LandingPage Desktop Part3 IC5-earth.png', 256, 80],
  ['LandingPage Desktop Part3 MSC1-Metal.png', 512, 80],
  ['LandingPage Desktop Part3 MSC2-WOOD.png', 512, 80],
  ['LandingPage Desktop Part3 MSC3-Water.png', 512, 80],
  ['LandingPage Desktop Part3 MSC4-Fire.png', 512, 80],
  ['LandingPage Desktop Part3 MSC5-earth.png', 512, 80],
  ['LandingPage Desktop Part4 FD1-coconut.png', 512, 80],
  ['LandingPage Desktop Part4 FD2-meal.png', 512, 80],
  ['LandingPage Desktop Part4 FD3-milk.png', 512, 80],
  ['LandingPage Desktop Part4 FD4-salt.png', 512, 80],
  ['QR Mascot-01.png', 600, 80],
  ['HuluHulu Logo FA-02.png', 400, 85],
];

const fmt = (n) => (n / 1024 / 1024).toFixed(2) + ' MB';
let before = 0;
let after = 0;

for (const [file, cap, q] of cfg) {
  const live = path.join(pub, file);
  const backup = path.join(orig, file);
  if (!fs.existsSync(live) && !fs.existsSync(backup)) {
    console.log('MISSING', file);
    continue;
  }
  if (!fs.existsSync(backup)) fs.copyFileSync(live, backup);

  const input = fs.readFileSync(backup); // always encode from the pristine original
  const isPng = file.toLowerCase().endsWith('.png');
  let pipe = sharp(input).resize({ width: cap, height: cap, fit: 'inside', withoutEnlargement: true });
  pipe = isPng
    ? pipe.png({ quality: q, compressionLevel: 9, palette: true, effort: 8 })
    : pipe.jpeg({ quality: q, mozjpeg: true });

  const out = await pipe.toBuffer();
  fs.writeFileSync(live, out);
  before += input.length;
  after += out.length;
  console.log(`${file.padEnd(44)} ${fmt(input.length).padStart(9)} -> ${fmt(out.length).padStart(9)}`);
}

console.log('-'.repeat(70));
console.log(`TOTAL ${fmt(before)} -> ${fmt(after)}  (${(100 - (after / before) * 100).toFixed(1)}% smaller)`);
