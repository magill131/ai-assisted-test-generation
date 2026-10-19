# US-09: Persistence

- AC-9.1: Todos are still in the list after the page is reloaded.
- AC-9.2: A todo's completed state is kept after the page is reloaded.

## TC-US9-01: Todos survive a reload
- Type: Functional
- Priority: High
- Covers: AC-9.1
- Preconditions: Two todos, "Alpha" and "Beta"
- Steps:
  1. Given both todos are in the list
  2. When the user reloads the page
- Expected result: "Alpha" and "Beta" are still in the list, in the same order.

## TC-US9-02: Completed state survives a reload
- Type: Functional
- Priority: High
- Covers: AC-9.2
- Preconditions: Two todos, "Alpha" completed and "Beta" active
- Steps:
  1. Given "Alpha" is completed
  2. When the user reloads the page
- Expected result: "Alpha" is still shown as completed and "Beta" is still active.

## Coverage table

| Criterion | Test cases |
|---|---|
| AC-9.1 | TC-US9-01 |
| AC-9.2 | TC-US9-02 |

## Open questions

- None.
