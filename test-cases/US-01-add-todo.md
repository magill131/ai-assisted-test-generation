# US-01: Add a todo

- AC-1.1: Typing text in the input and pressing Enter adds a todo at the bottom of the list.
- AC-1.2: After a todo is added, the input is empty and still has focus.
- AC-1.3: Spaces before and after the text are removed from the todo title.
- AC-1.4: An empty entry, or one with only spaces, does not add a todo.
- AC-1.5: When there are no todos, the list and the footer are hidden. They appear after the first todo is added.

## TC-US1-01: Add one todo with Enter
- Type: Functional
- Priority: High
- Covers: AC-1.1, AC-1.2
- Preconditions: App open, no todos
- Steps:
  1. Given the input is empty
  2. When the user types "Buy milk" and presses Enter
- Expected result: One todo titled "Buy milk" is in the list. The input is empty and has focus.

## TC-US1-02: Todos are added in order
- Type: Functional
- Priority: High
- Covers: AC-1.1
- Preconditions: App open, no todos
- Steps:
  1. Given no todos exist
  2. When the user adds "First", then "Second", then "Third"
- Expected result: The list shows First, Second, Third from top to bottom.

## TC-US1-03: Spaces around the title are removed
- Type: Boundary
- Priority: Medium
- Covers: AC-1.3
- Preconditions: App open, no todos
- Steps:
  1. Given the input is empty
  2. When the user types three spaces, "Trim me", three spaces, and presses Enter
- Expected result: One todo titled exactly "Trim me" is in the list.

## TC-US1-04: Empty entry adds nothing
- Type: Negative
- Priority: High
- Covers: AC-1.4
- Preconditions: App open, no todos
- Steps:
  1. Given the input is empty
  2. When the user presses Enter
- Expected result: No todo is added and the list stays hidden.

## TC-US1-05: Spaces-only entry adds nothing
- Type: Negative
- Priority: Medium
- Covers: AC-1.4
- Preconditions: App open, no todos
- Steps:
  1. Given the input is empty
  2. When the user types five spaces and presses Enter
- Expected result: No todo is added and the list stays hidden.

## TC-US1-06: List and footer are hidden until the first todo
- Type: Functional
- Priority: Medium
- Covers: AC-1.5
- Preconditions: App open, no todos
- Steps:
  1. Given no todos exist
  2. Then the list and footer are not shown
  3. When the user adds one todo
- Expected result: The list and the footer are shown.

## Coverage table

| Criterion | Test cases |
|---|---|
| AC-1.1 | TC-US1-01, TC-US1-02 |
| AC-1.2 | TC-US1-01 |
| AC-1.3 | TC-US1-03 |
| AC-1.4 | TC-US1-04, TC-US1-05 |
| AC-1.5 | TC-US1-06 |

## Open questions

- Is there a maximum length for a todo title?
