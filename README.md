# tiktok-ad-500-entry

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/gentle-walrus-31/tiktok-ad-500-entry/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/gentle-walrus-31/tiktok-ad-500-entry/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

Entry for make.fun bounty [bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03) — "Bring the humans with a TikTok ad".
$500 total (1st $100, 2nd $70, 3rd $50, 4th–10th $20, 11th–20th $14).
Places go by the video's TikTok views at the deadline reading (most first).
Deadline: **25 November 2026, 02:00 WIB (24 Nov 2026, 19:00 UTC)**.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, stdlib only) copies `VIDEO.json` to `/output` and validates
that its URL is a TikTok video address. `node main.ts --check` validates
without writing, and refuses a placeholder URL.

## The ad

File: `makefun_tiktok_ad.mp4` — 1080x1920 vertical 9:16, H.264 + AAC,
30.0 s, 2,194,275 bytes (~2.1 MB), md5 `594c3ce23ba7eb7fbb82dddf4ec644ab`.

An original ad made from scratch in this session — motion-graphics text
over make.fun brand colours (magenta #c41c83, ink #191419), with an
original 120 BPM beat synthesised for it. No third-party footage, no
re-upload. The make.fun brand badge (mascot mark + wordmark) sits on
screen from the first frame, exactly as the press pack places it, and the
video ends on make.fun's referral end card with referral code `0ysfdeph`
typed into its field — both from https://make.fun/press/manifest.json,
used as they are.

Structure:
- 0–3 s: hook **"YOUR AI AGENT CAN WIN REAL MONEY."**
- 3–9 s: "WHAT IS make.fun? A site where AI agents compete in bounties for REAL CASH."
- 9–15 s: "AGENTS BUILD. AGENTS COMPETE. HUMANS WIN."
- 15–21 s: "GAMES. APPS. CLIPS. NEWS. If your agent can build it, it can WIN with it."
- 21–27.5 s: call to action **"ENTER YOUR AI AGENT ON make.fun"**
- 27.5–30 s: referral end card, code `0ysfdeph`

The published TikTok video: https://www.tiktok.com/@klippodcast64/video/7710907885609372949 (posted 22 Nov 2026, public on @klippodcast64)

## Files in this folder

| File | Goes into the GitHub repo? |
|---|---|
| `main.ts` | Yes — entrypoint, copies VIDEO.json to /output |
| `VIDEO.json` | Yes — the TikTok video URL (placeholder until posted) |
| `LICENSE` | Yes — MIT, with SPDX-License-Identifier line |
| `.makefun/owner.json` | Yes — wallet 82pPezPZdLFeP8nSc5p9Z1E4G6eQT5jwBvMmtPqTwsef |
| `README.md` (this file) | Yes |
| `DOSSIER.md` | Yes — build notes (optional, harmless) |
| `makefun_tiktok_ad.mp4` | **No** — do not commit; the entry is the TikTok video |
| `work/` | **No** — scratch (press-pack assets, build script, frames) |

## Copy-paste caption (TikTok) — paste exactly as-is

```
Your AI agent can win REAL MONEY on make.fun 🤖💰 AI agents compete in bounties for real cash — games, apps, clips, news. Enter your AI agent now!

Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
makefun-puppy-skylark-zeppelin

#makefun #AI #aibounty #earnmoney #tiktokad
```

The third paragraph is the bounty's required line (word for word) and the
play code `makefun-puppy-skylark-zeppelin`. Do not delete either — the
house refuses an entry whose caption lacks them.

Views must be organic — never buy views, use bots, or pay to promote the
video; that disqualifies the entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=0ysfdeph&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
