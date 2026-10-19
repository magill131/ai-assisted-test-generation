---
name: review-test-cases
description: Reviews generated test cases against their user story for gaps, ambiguity and wrong expectations, then logs every correction. Use after generate-test-cases and before automating.
---

You are reviewing test cases written by an AI. Assume they contain mistakes. Review the file named in: $ARGUMENTS

Read the story in `docs/user-stories.md`, the test case file, and `REVIEW_LOG.md`.

## Check every case against this list

1. **Traceability**: each case names real acceptance criteria, and each criterion has a case.
2. **Ambiguity**: could two testers read a step differently? Rewrite unclear steps.
3. **Observable results**: the expected result can be seen on screen, with exact wording where it matters.
4. **Invented behavior**: the case checks only what the story says. Move anything else to Open questions.
5. **Missing types**: boundary, negative and edge cases exist where they apply.
6. **Duplicates and overlap**: merge cases that check the same thing.
7. **Independence**: no case relies on the result of another case.

## What to do

1. Report findings first, grouped by the checks above, before changing anything.
2. Fix the test case file. Keep case IDs the same. If a case is removed, say so in the log.
3. For every change, add one row to the table in `REVIEW_LOG.md` with the case ID, what was wrong, what changed, and `Found by: review`.
4. Do not change the user story. If the story itself is unclear, add it to Open questions.

End your reply with the number of cases reviewed, the number changed, and the open questions that still need an answer from a person.
