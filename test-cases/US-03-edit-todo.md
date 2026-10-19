# US-03: Edit a todo

- AC-3.1: Double-clicking a todo's title opens it for editing.
- AC-3.2: Pressing Enter saves the new title.
- AC-3.3: Pressing Escape cancels the edit and keeps the original title.
- AC-3.4: Saving an empty title deletes the todo.
- AC-3.5: Spaces before and after the new title are removed when it is saved.

## TC-US3-01: Edit a title and save with Enter
- Type: Functional
- Priority: High
- Covers: AC-3.1, AC-3.2
- Preconditions: One todo titled "Old title"
- Steps:
  1. Given the todo "Old title" is in the list
  2. When the user double-clicks its title, replaces the text with "New title", and presses Enter
- Expected result: The todo is titled "New title" and is no longer in edit mode.

## TC-US3-02: Escape cancels an edit
- Type: Functional
- Priority: High
- Covers: AC-3.3
- Preconditions: One todo titled "Keep me"
- Steps:
  1. Given the todo "Keep me" is in the list
  2. When the user double-clicks its title, types different text, and presses Escape
- Expected result: The todo is still titled "Keep me".

## TC-US3-03: Saving an empty title deletes the todo
- Type: Negative
- Priority: High
- Covers: AC-3.4
- Preconditions: Two todos, "Stay" and "Remove"
- Steps:
  1. Given both todos are in the list
  2. When the user double-clicks "Remove", clears the text, and presses Enter
- Expected result: "Remove" is gone. "Stay" is the only todo left.

## TC-US3-04: Spaces around an edited title are removed
- Type: Boundary
- Priority: Medium
- Covers: AC-3.5
- Preconditions: One todo titled "Before"
- Steps:
  1. Given the todo "Before" is in the list
  2. When the user double-clicks its title, replaces the text with three spaces, "After", three spaces, and presses Enter
- Expected result: The todo is titled exactly "After".

## Coverage table

| Criterion | Test cases |
|---|---|
| AC-3.1 | TC-US3-01 |
| AC-3.2 | TC-US3-01 |
| AC-3.3 | TC-US3-02 |
| AC-3.4 | TC-US3-03 |
| AC-3.5 | TC-US3-04 |

## Open questions

- Does clicking outside the edit field save or cancel the edit? The story does not say.
