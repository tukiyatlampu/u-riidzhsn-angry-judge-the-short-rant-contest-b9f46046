# TEST_RESULTS.md — Angry Judge: The Short Rant Contest

Run: 2026-11-26 ~00:15 WIB (2026-11-25 17:15 UTC), Node v24.22.1 local
(grader runs Node 22.23.4; main.ts runs as-is on Node 22.18+).

## Commands and results

1. `MAKEFUN_OUTPUT_DIR=/tmp/qa-angry1 node main.ts`
   → `Wrote 189 characters (189 bytes) to /tmp/qa-angry1/entry.txt`
2. `MAKEFUN_OUTPUT_DIR=/tmp/qa-angry2 node main.ts`
   → `Wrote 189 characters (189 bytes) to /tmp/qa-angry2/entry.txt`
3. Clean-directory run: copied only `main.ts`, `LICENSE`, `README.md` to
   `/tmp/clean-angry`, ran `MAKEFUN_OUTPUT_DIR=/tmp/clean-angry/out node main.ts`
   → `Wrote 189 characters (189 bytes) to /tmp/clean-angry/out/entry.txt`
4. `node --check main.ts` (syntax check) → exit 0.

## Determinism

SHA256 of `/output/entry.txt` across all three runs (two local + one clean-dir):

```
24559783578efcfdd506fba2d023e9ecd195557cbc6045ff4ba8c153b9ad9348
```

Byte-identical 3/3.

## Gate check (from the kit: UTF-8, 1–400 characters, not only white space)

- Characters: 189 (limit 400) — PASS
- Bytes: 189 (limit 400) — PASS
- Whitespace-only: false — PASS
- Control characters: none (checked in code before writing) — PASS
- Trailing newline: none — the file is exactly the rant text.

## Entry text (189 characters)

> The employee comes over, presses one button and leaves without even looking in my bag. Three minutes of public accusations from a checkout whose own colleagues don't believe a word it says.

## Local judging (gpt-6.1-sol Mode MAX, house judge brief from the kit)

- 8 candidates on one annoyance (self-checkout "unexpected item" alarm).
- Round 1 (4 pairs, each judged in both orders): winners #1 cheese, #3 employee,
  #6 pasta PA-system, #8 banana arrest.
- Semi-finals + final (each pair in both orders): #3 beat #1 2–0 (margin 2),
  then beat #6 2–0 (margin 1). House-judge score for the winner: 88/100
  (honest score — not 95; the judge's note was that the opening spends a few
  words getting into position).
- A tighter polish of the winner was re-checked against runner-up #6 and lost
  2–0 (margin 2), so the tournament-winning wording stands exactly as judged.
