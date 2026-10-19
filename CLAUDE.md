# Project rules for Claude Code

This repo tests the TodoMVC demo at https://demo.playwright.dev/todomvc with Playwright and TypeScript. The goal is a reviewed workflow: user stories become test cases, test cases become automated tests, and a person checks every step.

## Folder map

- `docs/user-stories.md`: the input. Stories with numbered acceptance criteria (AC-x.y). Do not edit it unless asked.
- `test-cases/`: one file per story. Written by the `generate-test-cases` skill, corrected by the `review-test-cases` skill.
- `tests/`: Playwright tests. `tests/pages/todo-page.ts` is the page object, `tests/fixtures.ts` opens the app for each test.
- `specs/`: Markdown plans from the Playwright planner agent.
- `REVIEW_LOG.md`: every mistake found in generated cases or tests, and how it was fixed.

## Rules for test cases

- Every acceptance criterion needs at least one test case. Every test case names the criteria it covers.
- Case IDs look like `TC-US3-02`. Never reuse or renumber an ID.
- Steps describe what a user does and sees, not Playwright commands.
- Expected results must be something a person can observe.
- If a requirement is unclear, write it under "Open questions". Do not guess and do not automate it.

## Rules for Playwright tests

- One test per test case. The test title starts with the case ID, for example `TC-US3-02: Escape cancels an edit`.
- Prefer locators by role, label, placeholder or test id. Avoid CSS and XPath unless nothing else works.
- Use web-first assertions (`await expect(locator).toHaveText(...)`). Never use `waitForTimeout` or fixed sleeps.
- Tests must not depend on each other. Each one starts from an empty app through the `todoPage` fixture.
- Keep locators and actions in the page object, assertions in the test.
- If a test fails, find out whether the test or the app is wrong. Never weaken an assertion just to make it pass. Log the fix in `REVIEW_LOG.md`.

## Commands

- `npm ci` then `npx playwright install chromium` to set up
- `npx playwright test` to run everything
- `npx playwright test tests/edit-todo.spec.ts` to run one file
- `npm run typecheck` to check types
