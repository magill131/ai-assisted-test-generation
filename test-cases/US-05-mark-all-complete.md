# US-05: Mark all todos complete

- AC-5.1: Checking "Mark all as complete" marks every todo as completed.
- AC-5.2: Unchecking it when every todo is completed makes every todo active again.
- AC-5.3: When every todo has been completed one by one, "Mark all as complete" becomes checked.

## TC-US5-01: Mark all as complete
- Type: Functional
- Priority: High
- Covers: AC-5.1
- Preconditions: Three active todos
- Steps:
  1. Given all three todos are active
  2. When the user checks "Mark all as complete"
- Expected result: All three todos are shown as completed.

## TC-US5-02: Unmark all
- Type: Functional
- Priority: High
- Covers: AC-5.2
- Preconditions: Three todos, all completed
- Steps:
  1. Given all three todos are completed
  2. When the user unchecks "Mark all as complete"
- Expected result: All three todos are active.

## TC-US5-03: Completing every todo one by one checks Mark all
- Type: Edge
- Priority: Medium
- Covers: AC-5.3
- Preconditions: Two active todos
- Steps:
  1. Given "Mark all as complete" is unchecked
  2. When the user checks the checkbox of each todo, one at a time
- Expected result: "Mark all as complete" is checked.

## Coverage table

| Criterion | Test cases |
|---|---|
| AC-5.1 | TC-US5-01 |
| AC-5.2 | TC-US5-02 |
| AC-5.3 | TC-US5-03 |

## Open questions

- When one completed todo is unchecked, does "Mark all as complete" also become unchecked?
