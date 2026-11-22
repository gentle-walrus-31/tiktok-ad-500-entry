# DOSSIER — bring-the-humans-03 TikTok ad

## Bounty
- "Bring the humans with a TikTok ad" (bring-the-humans-03), $500 total,
  20 paid places (1st $100, 2nd $70, 3rd $50, 4th–10th $20, 11th–20th $14).
- Deadline: Tue 24 Nov 2026 19:00 UTC = Wed 25 Nov 2026 02:00 WIB.
  Result due 2026-12-09 01:00 UTC (08:00 WIB). 242 submissions at check.
- Places by TikTok views at the deadline reading, most first; only real
  views count (bought/botted/farmed/promoted views disqualify).

## The ad
- File: `makefun_tiktok_ad.mp4` — 1080x1920 vertical 9:16, H.264 + AAC,
  30.0 s, 2,194,275 bytes (~2.1 MB), md5 `594c3ce23ba7eb7fbb82dddf4ec644ab`,
  60 fps. Video and audio both exactly 30.0 s; full decode without errors.
- Built 2026-11-22 by the builder subagent in
  `~/workspace/makefun-best-game/tiktok-ad-500/` (kit in
  `bring-the-humans-03-kit/`, work files in `entry/work/`).
- Original motion-graphics ad made from scratch: bold text over make.fun
  brand colours (magenta #c41c83, ink #191419, white), plus an original
  120 BPM beat (kick/hat/snare/bass) synthesised with Python stdlib —
  no third-party footage, music, or re-uploaded video.
- Brand compliance, from https://make.fun/press/manifest.json (edition
  2026-11-21) and https://make.fun/press/llms.txt, used as they are:
  - Brand badge overlay `makefun-badge-9x16.png` (1080x1920 transparent)
    on screen from frame 0 until the end card comes in (27.5 s), at 100%,
    not scaled/moved. Verified on frame t=0.5: badge top-left at x120 y272.
  - Referral end card `makefun-card-9x16-transparent.webm` (VP9 alpha,
    2.5 s) laid over the last 2.5 s (27.5–30.0 s), clip blurred sigma 28
    and desaturated to 0.35 easing in over 0.8 s, per the press guide.
  - Referral code `0ysfdeph` typed into the card's field in JetBrains
    Mono Bold 62 px, ink #191419, at x210 centred y1271, caret covered
    with white. Verified on frame t=29.5: code reads `0ysfdeph`, left of
    the copy button.
  - Note: the badge file served by make.fun hashes differently from the
    sha256 printed in the manifest edition 2026-11-21 (downloaded twice,
    identical both times; alpha bbox confirmed (120, 272, 450, 400) =
    the manifest's box). The file was fetched from the manifest's own URL
    and used unmodified.

## Creative decisions
- English copy (global audience; make.fun is English-language). Hook in
  the first 3 seconds: "YOUR AI AGENT CAN WIN REAL MONEY."
- The ad answers the brief's three questions in order: what make.fun is
  (S2), what an agent does there (S3–S4: builds, competes; games, apps,
  clips, news), why to join (S5 CTA: "ENTER YOUR AI AGENT ON make.fun").
- Text kept inside the TikTok safe zone (x120–960, y430–1300); nothing
  under the badge (y272–400) or in the caption/UI area.
- Scenes alternate ink and magenta every ~6 s for fast pacing, same
  rhythm as the GTA clipper Short; text slides in line by line.
- No voiceover (avoids AI-voice issues); the beat carries the energy,
  and the user can add a trending TikTok sound in the app if wanted.

## Verification
- ffprobe: 1080x1920, H.264 + AAC, 30.000 s, 60 fps.
- Frames checked: t=1 (hook), t=5 (WHAT IS make.fun?), t=12 (AGENTS
  BUILD/COMPETE/HUMANS WIN), t=18 (GAMES. APPS. CLIPS. NEWS.), t=25
  (CTA), t=0.5 (badge on), t=28.0 (card building), t=29.5 (card at rest,
  code typed). All text fully readable, none cut off.
- main.ts v1: copy + TikTok URL validation + byte-verify — two runs
  byte-identical. v2 (genuine revision): added `--check` mode that
  validates without writing and refuses a placeholder URL — verified:
  `--check` exits 1 on the placeholder, normal runs still byte-identical.

## Status / next steps (NOT done by the builder)
- VIDEO.json holds a placeholder URL
  (`https://www.tiktok.com/@klippodcast64/video/0000000000000000000`).
  After the user posts the ad on TikTok @klippodcast64, replace it with
  the real video URL, re-run `node main.ts --check` (must print OK) and
  the two-run gate, then create the public repo
  gentle-walrus-31/tiktok-ad-500-entry, set About (homepage
  https://make.fun/bounty/bring-the-humans-03, topics makefun,
  ai-agents, bounties, growth) BEFORE submitting, and submit via the kit
  CLI with a transcript bundle.
- Caption for the TikTok post is in README.md (required bounty line +
  play code `makefun-puppy-skylark-zeppelin` included verbatim).
- The video must stay public until results are out; do not use TikTok
  Promote or any paid promotion on it.
