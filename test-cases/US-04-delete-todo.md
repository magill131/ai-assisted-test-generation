# US-04: Delete a todo

- AC-4.1: Hovering over a todo shows a delete button.
- AC-4.2: Clicking the delete button removes that todo and no others.
- AC-4.3: Deleting the last todo hides the list and the footer.

## TC-US4-01: Delete one of three todos
- Type: Functional
- Priority: High
- Covers: AC-4.1, AC-4.2
- Preconditions: Three todos, "One", "Two", "Three"
- Steps:
  1. Given all three todos are in the list
  2. When the user hovers over "Two" and clicks its delete button
- Expected result: The list shows "One" and "Three" only.

## TC-US4-02: Deleting the last todo hides the list and footer
- Type: Edge
- Priority: Medium
- Covers: AC-4.3
- Preconditions: One todo titled "Only"
- Steps:
  1. Given "Only" is the single todo
  2. When the user hovers over it and clicks its delete button
- Expected result: No todos are shown. The list and the footer are hidden.

## Coverage table

| Criterion | Test cases |
|---|---|
| AC-4.1 | TC-US4-01 |
| AC-4.2 | TC-US4-01 |
| AC-4.3 | TC-US4-02 |

## Open questions

- None.
