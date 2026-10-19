# US-08: Items-left counter

- AC-8.1: With exactly one active todo, the counter reads "1 item left".
- AC-8.2: With zero or more than one active todo, the counter reads "N items left".

## TC-US8-01: One active todo
- Type: Boundary
- Priority: High
- Covers: AC-8.1
- Preconditions: App open, no todos
- Steps:
  1. Given no todos exist
  2. When the user adds one todo
- Expected result: The counter reads "1 item left".

## TC-US8-02: Several active todos
- Type: Functional
- Priority: High
- Covers: AC-8.2
- Preconditions: App open, no todos
- Steps:
  1. Given no todos exist
  2. When the user adds two todos
- Expected result: The counter reads "2 items left".

## TC-US8-03: No active todos
- Type: Boundary
- Priority: Medium
- Covers: AC-8.2
- Preconditions: One active todo
- Steps:
  1. Given the counter reads "1 item left"
  2. When the user completes that todo
- Expected result: The counter reads "0 items left".

## Coverage table

| Criterion | Test cases |
|---|---|
| AC-8.1 | TC-US8-01 |
| AC-8.2 | TC-US8-02, TC-US8-03 |

## Open questions

- None.
