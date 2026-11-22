// bring-the-humans-03 entry (Node 22, standard library only).
//
// The entry is the video itself: an original vertical TikTok ad for
// make.fun, posted publicly on TikTok from @klippodcast64. This program's
// only job is to hand the video's address to the grader — it copies
// VIDEO.json from the repository root to /output, byte for byte, and
// refuses to run when the file is missing, unreadable, or does not name
// a TikTok video address. Nothing this program writes about the video is
// scored: the house reads the video itself through TikTok and ranks
// entries by views (most first).
//
// Local run (the way the grader runs it):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Revision gate (v2): run `node main.ts --check` to validate VIDEO.json
// without writing anything. It refuses a placeholder address (an
// all-zero video id), so a forgotten placeholder can never be submitted:
// replace the URL with the posted TikTok video's real address first.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'VIDEO.json');
const TARGET = join(OUTPUT_DIR, 'VIDEO.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

let raw: Buffer;
try {
  raw = readFileSync(SOURCE);
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

let video: unknown;
try {
  video = JSON.parse(raw.toString('utf8'));
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof video !== 'object' || video === null || typeof (video as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a string "url" field.');
  process.exit(1);
}

// The gate only accepts a TikTok video address: a full video link
// (tiktok.com/@handle/video/<digits>) or a TikTok short link
// (vt.tiktok.com/<code> or vm.tiktok.com/<code>). Catch a bad address
// here instead of letting the grader refuse the entry for it.
const url = (video as { url: string }).url;
const TIKTOK_URL =
  /^https:\/\/(www\.|m\.)?tiktok\.com\/@[A-Za-z0-9._-]+\/video\/\d+([?&#].*)?$|^https:\/\/(vt|vm)\.tiktok\.com\/[A-Za-z0-9]+(\/)?$/;
if (!TIKTOK_URL.test(url)) {
  console.error(`VIDEO.json url is not a TikTok video address: ${url}`);
  process.exit(1);
}

// Revision gate (v2): --check validates without writing, and refuses a
// placeholder video id (all zeros) so the entry can never be submitted
// before the real posted TikTok URL is filled in.
if (process.argv.includes('--check')) {
  const PLACEHOLDER = /\/video\/0+([?&#]|$)/;
  if (PLACEHOLDER.test(url)) {
    console.error('VIDEO.json still holds the placeholder URL — replace it with the posted TikTok video address before submitting.');
    process.exit(1);
  }
  console.log(`VIDEO.json OK: ${url}`);
  process.exit(0);
}

try {
  copyFileSync(SOURCE, TARGET);
} catch (err) {
  console.error(`VIDEO.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The grader runs the program twice and the two runs must write the same
// bytes, so verify the copy matches the source before reporting success.
const copied = readFileSync(TARGET);
if (!copied.equals(raw)) {
  console.error('VIDEO.json copy does not match the source.');
  process.exit(1);
}
