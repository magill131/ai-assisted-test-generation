# US-06: Filter todos

- AC-6.1: The Active filter shows only todos that are not completed.
- AC-6.2: The Completed filter shows only completed todos.
- AC-6.3: The All filter shows every todo.
- AC-6.4: The selected filter is highlighted and shown in the page address.

## TC-US6-01: Active filter
- Type: Functional
- Priority: High
- Covers: AC-6.1
- Preconditions: Three todos: "Open one", "Done one" (completed), "Open two"
- Steps:
  1. Given the list shows all three todos
  2. When the user selects the Active filter
- Expected result: Only "Open one" and "Open two" are shown.

## TC-US6-02: Completed filter
- Type: Functional
- Priority: High
- Covers: AC-6.2
- Preconditions: Same three todos as TC-US6-01
- Steps:
  1. Given the list shows all three todos
  2. When the user selects the Completed filter
- Expected result: Only "Done one" is shown.

## TC-US6-03: All filter after another filter
- Type: Functional
- Priority: Medium
- Covers: AC-6.3
- Preconditions: Same three todos as TC-US6-01
- Steps:
  1. Given the Active filter is selected
  2. When the user selects the All filter
- Expected result: All three todos are shown.

## TC-US6-04: Selected filter is highlighted and in the address
- Type: Functional
- Priority: Medium
- Covers: AC-6.4
- Preconditions: At least one todo exists
- Steps:
  1. Given the All filter is selected
  2. When the user selects the Active filter
- Expected result: The Active filter is highlighted and the page address ends with "#/active".

## Coverage table

| Criterion | Test cases |
|---|---|
| AC-6.1 | TC-US6-01 |
| AC-6.2 | TC-US6-02 |
| AC-6.3 | TC-US6-03 |
| AC-6.4 | TC-US6-04 |

## Open questions

- Does the selected filter stay selected after a page reload?
