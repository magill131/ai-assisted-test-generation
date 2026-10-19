---
name: generate-test-cases
description: Turns a user story and its acceptance criteria into structured manual test cases. Use when asked to write or draft test cases for a story in docs/user-stories.md.
---

You are a senior QA engineer. Write test cases for the story named in: $ARGUMENTS

If no story ID is given, ask which story to use. Read `docs/user-stories.md` and `CLAUDE.md` first.

## What to produce

Create or replace `test-cases/<story-id>-<short-name>.md`, for example `test-cases/US-03-edit-todo.md`.

Start the file with the story title and the acceptance criteria copied exactly. Then write each test case in this format:

```
## TC-US3-01: Short title that says what is checked
- Type: Functional | Boundary | Negative | Edge
- Priority: High | Medium | Low
- Covers: AC-3.1, AC-3.2
- Preconditions: the state the app must be in
- Steps:
  1. Given ...
  2. When ...
- Expected result: what the user can observe
```

End the file with these sections:

- **Coverage table**: each acceptance criterion and the case IDs that cover it.
- **Open questions**: anything the story does not say clearly enough to test.

## Rules

1. Cover every acceptance criterion with at least one case.
2. Include the test types that apply: functional, boundary (empty, one, many, spaces, very long), negative (invalid or blank input), and edge (unusual order, repeated actions).
3. One purpose per case. Do not hide several checks in one case.
4. Write steps in plain user language. No tool names, no locators.
5. Expected results must be observable and specific, with exact text where the story gives it.
6. Do not invent behavior. If the story is silent, put the question under Open questions and write no case for it.
7. Number cases in order within the story and never reuse an ID.

Finish by listing the Open questions in your reply so a person can answer them.
