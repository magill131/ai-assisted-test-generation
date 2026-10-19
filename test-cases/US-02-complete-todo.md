# US-02: Complete a todo

- AC-2.1: Checking a todo's checkbox marks it as completed.
- AC-2.2: Unchecking a completed todo's checkbox makes it active again.
- AC-2.3: The items-left counter goes down when a todo is completed and up when it is made active again.

## TC-US2-01: Completing a todo
- Type: Functional
- Priority: High
- Covers: AC-2.1, AC-2.3
- Preconditions: Two active todos, "One" and "Two"
- Steps:
  1. Given the counter reads "2 items left"
  2. When the user checks the checkbox of "One"
- Expected result: "One" is shown as completed. The counter reads "1 item left".

## TC-US2-02: Making a completed todo active again
- Type: Functional
- Priority: High
- Covers: AC-2.2, AC-2.3
- Preconditions: Two todos, "One" completed and "Two" active
- Steps:
  1. Given the counter reads "1 item left"
  2. When the user unchecks the checkbox of "One"
- Expected result: "One" is no longer shown as completed. The counter reads "2 items left".

## TC-US2-03: Completing one todo leaves the others active
- Type: Edge
- Priority: Medium
- Covers: AC-2.1
- Preconditions: Three active todos, "One", "Two", "Three"
- Steps:
  1. Given all three todos are active
  2. When the user checks the checkbox of "Two"
- Expected result: Only "Two" is shown as completed. "One" and "Three" are not.

## Coverage table

| Criterion | Test cases |
|---|---|
| AC-2.1 | TC-US2-01, TC-US2-03 |
| AC-2.2 | TC-US2-02 |
| AC-2.3 | TC-US2-01, TC-US2-02 |

## Open questions

- None.
