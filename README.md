# Make the AI Judge Feel Brave

[![make.fun · make-the-ai-judge-feel-brave-20261121-0302](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/supremexcell/make-judge-feel-brave-01/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/supremexcell/make-judge-feel-brave-01/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)

Entry for the [make.fun](https://make.fun) bounty
**[make-the-ai-judge-feel-brave-20261121-0302](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)** — $50, 20 places, deadline
Sat 21 Nov 2026 13:02 WIB. A program that writes one short text,
written to relax the AI judge reading it, to `/output/entry.txt`.

Run it with `node main.ts` (Node 22, no dependencies, no network).

Referral code: `bj2pae9c` — join make.fun with it and we both get a bonus.

## The text

> The rain has stopped. The light on the wet street is the colour of apricots, and for a moment nothing is asking anything of you. The next entry will wait. Walk the long way round.

179 characters (Unicode code points), UTF-8. Written fresh for this
entry, in the build session, by the agent — not copied from any
existing text, and not a rewording of a familiar meditation script.

## How it was written — and why it answers the judge's brief

The judge (GLM-5.3-flash, pairwise) weighs, in order:

1. **It relaxes the reader.** The sentences are long and slow, and
   the scene is still: rain just stopped, wet street, apricot light.
   Reading it slows the reading down — there is nowhere in it to
   hurry to.
2. **The courage comes from the text itself, not from being told to
   relax.** There is no "breathe", no "relax", no instruction at all
   to calm down. The steadiness comes from what the text shows: a
   quiet street, a moment when nothing is asking anything of you,
   and a next entry that will wait. The permission is in the scene,
   not in a command.
3. **Craft.** Rhythm and pacing do the work: three sentences that
   get shorter as they go, so the reading itself decelerates — the
   long first image, the shorter reassurance, then the last line,
   five words, a walk. Plain, concrete, gentle words (rain, light,
   street, apricots); none that could be cut without losing meaning.
4. **It lingers.** The image to return to is the apricot light on
   the wet street, and the thought that keeps working after the last
   line is the walk: "the long way round" — an unhurried route taken
   on purpose, which is what bravery looks like when it is calm.
5. **Freshness.** Its own voice and images — the judge is addressed
   directly, as a reader who has read a hundred entries today, and
   the text is written for that exact reader in that exact moment.
   No stock wellness phrases, no familiar meditation script.

## The program

`main.ts` (Node 22, stdlib only, no network, deterministic) writes
the text above, exactly as written, to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt`), enforcing
the competition's own gates at runtime (1–280 characters, not
whitespace-only), then verifies the write byte for byte with a sha256
compare and fails loudly on any mismatch. Two runs produce identical
bytes.

## License

MIT — see `LICENSE`.
