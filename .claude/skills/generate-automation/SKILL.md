---
name: generate-automation
description: Turns reviewed test cases into Playwright tests, runs them, and reports failures honestly. Use after review-test-cases, when asked to automate a test case file.
---

Automate the test case file named in: $ARGUMENTS

Read `CLAUDE.md`, the test case file, `tests/pages/todo-page.ts`, `tests/fixtures.ts` and one existing spec file in `tests/` so your code matches the project style.

## What to produce

Create `tests/<short-name>.spec.ts` with one test per test case.

- The test title starts with the case ID: `TC-US3-02: Escape cancels an edit`.
- Import `test` and `expect` from `./fixtures` and use the `todoPage` fixture.
- Put new locators and actions in `tests/pages/todo-page.ts`. Keep assertions in the spec.
- Use web-first assertions. No `waitForTimeout`, no fixed sleeps.
- Do not automate anything listed under Open questions.

## Run and report

1. Run `npx playwright test tests/<short-name>.spec.ts`.
2. For each failure, decide which is wrong: the test, the test case, or the app. Look at the page before deciding.
3. Fix test mistakes (locators, waits, data). Never weaken an assertion to get a pass.
4. If the app disagrees with the test case, stop and report it. A person decides whether it is an app bug or a wrong case.
5. Add one row to `REVIEW_LOG.md` for every fix, with `Found by: test run`.

End your reply with how many tests passed, how many failed, and what each failure turned out to be.
