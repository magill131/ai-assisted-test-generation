# US-07: Clear completed todos

- AC-7.1: The "Clear completed" button is shown only when at least one todo is completed.
- AC-7.2: Clicking "Clear completed" removes every completed todo and keeps the active ones.

## TC-US7-01: Button is hidden when nothing is completed
- Type: Boundary
- Priority: Medium
- Covers: AC-7.1
- Preconditions: Two active todos
- Steps:
  1. Given no todo is completed
  2. Then look at the footer
- Expected result: The "Clear completed" button is not shown.

## TC-US7-02: Button appears once a todo is completed
- Type: Functional
- Priority: Medium
- Covers: AC-7.1
- Preconditions: Two active todos
- Steps:
  1. Given no todo is completed
  2. When the user completes one todo
- Expected result: The "Clear completed" button is shown.

## TC-US7-03: Clear completed keeps active todos
- Type: Functional
- Priority: High
- Covers: AC-7.2
- Preconditions: Three todos: "Keep" (active), "Gone one" (completed), "Gone two" (completed)
- Steps:
  1. Given two todos are completed
  2. When the user clicks "Clear completed"
- Expected result: Only "Keep" is left. The "Clear completed" button is hidden.

## Coverage table

| Criterion | Test cases |
|---|---|
| AC-7.1 | TC-US7-01, TC-US7-02 |
| AC-7.2 | TC-US7-03 |

## Open questions

- None.
