/**
 * Re-encode the section artwork in public/ as WebP and repoint src/v2 at it.
 *
 * The previous pass (optimize-images.mjs) only resized and recompressed in the
 * original format, which left photographic artwork sitting in palette PNG —
 * "LandingPage Desktop Part3 BG.png" alone was 1.37 MB. WebP handles both the
 * photographs and the alpha-channel cut-outs, so every one of these becomes a
 * single .webp and the .png/.jpg twin is removed so it cannot ship in dist/.
 *
 * asset-originals/ holds the pristine input where it exists, so re-running this
 * never re-encodes an already-lossy file. Favicons, the OG image and the hero
 * posters are deliberately left alone: they are consumed by crawlers and by
 * <link rel=preload>, where broad format support matters more than the bytes.
 *
 * Run: node scripts/to-webp.mjs
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const pub = 'public';
const orig = 'asset-originals';
const srcDirs = ['src/v2'];

/** Longest-side cap per asset, matching how large it is actually displayed. */
const capFor = (file) => {
  if (/BG|Bg\b|Column/i.test(file)) return 1600; // full-bleed section backgrounds
  if (/Box|PIC/i.test(file)) return 900;         // card photography, ~half the column
  if (/IC\d|MSC\d|FD\d/i.test(file)) return 512; // icons and small art
  return 1000;
};

const targets = fs
  .readdirSync(pub)
  .filter((f) => /\.(png|jpe?g)$/i.test(f))
  .filter((f) => /^LandingPage/.test(f) || f === 'QR Mascot-01.png' || f === 'qr.png');

const fmt = (n) => (n / 1024).toFixed(0).padStart(5) + ' KB';
let before = 0;
let after = 0;
const renames = [];

for (const file of targets) {
  const live = path.join(pub, file);
  const backup = path.join(orig, file);
  const input = fs.readFileSync(fs.existsSync(backup) ? backup : live);
  const cap = capFor(file);

  const out = await sharp(input)
    .resize({ width: cap, height: cap, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toBuffer();

  const webp = file.replace(/\.(png|jpe?g)$/i, '.webp');
  fs.writeFileSync(path.join(pub, webp), out);
  fs.rmSync(live, { force: true });

  renames.push([file, webp]);
  before += input.length;
  after += out.length;
  console.log(`${file.padEnd(46)} ${fmt(input.length)} -> ${fmt(out.length)}`);
}

// Repoint every reference. Filenames appear verbatim in the JSX src strings.
const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : /\.(tsx?|css|html)$/.test(e.name) ? [p] : [];
  });

let touched = 0;
for (const f of [...srcDirs.flatMap(walk), 'index.html']) {
  if (!fs.existsSync(f)) continue;
  const text = fs.readFileSync(f, 'utf8');
  let next = text;
  for (const [from, to] of renames) next = next.split(from).join(to);
  if (next !== text) {
    fs.writeFileSync(f, next);
    touched++;
    console.log('  repointed', f);
  }
}

console.log('-'.repeat(72));
console.log(`${targets.length} images  ${fmt(before)} -> ${fmt(after)}   ${touched} source files updated`);
