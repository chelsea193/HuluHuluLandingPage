/**
 * Convert the three hero GIFs to H.264 MP4 + VP9 WebM plus a JPEG poster.
 *
 * The GIFs are 192-frame / 7.7s loops shipped at 39-51 MB each; GIF cannot
 * inter-frame compress, so the same clip as video lands around 1 MB.
 *
 * Originals are preserved in asset-originals/, which sits outside public/ on
 * purpose: Vite copies all of publicDir into dist, so backups kept there would
 * be published.
 *
 * Run: node scripts/gif-to-video.mjs
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import ffmpeg from 'ffmpeg-static';

const pub = 'public';
const orig = 'asset-originals';
fs.mkdirSync(orig, { recursive: true });

const GIFS = ['LP-Desktop-Header.gif', 'LP-Tablet-GIF.gif', 'LP-Mobile-GIF.gif'];

// libx264 needs even dimensions for yuv420p (the mobile GIF is 605px wide).
const EVEN = 'scale=trunc(iw/2)*2:trunc(ih/2)*2';
const fmt = (n) => (n / 1024 / 1024).toFixed(2) + ' MB';
const run = (args) => execFileSync(ffmpeg, ['-y', '-hide_banner', '-loglevel', 'error', ...args]);
const size = (p) => fs.statSync(p).size;

let before = 0;
let after = 0;

for (const gif of GIFS) {
  const live = path.join(pub, gif);
  const backup = path.join(orig, gif);
  if (!fs.existsSync(live) && !fs.existsSync(backup)) {
    console.log('MISSING', gif);
    continue;
  }
  if (!fs.existsSync(backup)) fs.copyFileSync(live, backup);

  const base = path.join(pub, gif.replace(/\.gif$/i, ''));
  const mp4 = `${base}.mp4`;
  const webm = `${base}.webm`;
  const poster = `${base}-poster.jpg`;

  // Always encode from the pristine original so re-runs don't stack losses.
  run(['-i', backup, '-an', '-vf', EVEN, '-pix_fmt', 'yuv420p',
       '-c:v', 'libx264', '-crf', '26', '-preset', 'slow',
       '-movflags', '+faststart', mp4]);
  run(['-i', backup, '-an', '-vf', EVEN, '-pix_fmt', 'yuv420p',
       '-c:v', 'libvpx-vp9', '-crf', '36', '-b:v', '0', '-row-mt', '1', webm]);
  // First frame, used as the <video poster> so the hero paints before the
  // video buffers.
  run(['-i', backup, '-frames:v', '1', '-vf', EVEN, '-q:v', '6', poster]);

  const b = size(backup);
  const a = size(mp4) + size(webm) + size(poster);
  before += b;
  after += a;
  console.log(
    `${gif.padEnd(24)} ${fmt(b).padStart(9)} -> mp4 ${fmt(size(mp4))} | webm ${fmt(size(webm))} | poster ${fmt(size(poster))}`
  );
}

console.log('-'.repeat(78));
console.log(`TOTAL ${fmt(before)} -> ${fmt(after)}  (${(100 - (after / before) * 100).toFixed(1)}% smaller)`);
console.log('Originals kept in asset-originals/ (git-ignored, never published).');
