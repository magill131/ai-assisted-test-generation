import { test, expect } from './fixtures';

// Source: test-cases/US-08-items-left-counter.md
test.describe('US-08 Items-left counter', () => {
  test('TC-US8-01: one active todo', async ({ todoPage }) => {
    await todoPage.addTodo('One');
    await expect(todoPage.count).toHaveText('1 item left');
  });

  test('TC-US8-02: several active todos', async ({ todoPage }) => {
    await todoPage.addTodos(['One', 'Two']);
    await expect(todoPage.count).toHaveText('2 items left');
  });

  test('TC-US8-03: no active todos', async ({ todoPage }) => {
    await todoPage.addTodo('One');
    await expect(todoPage.count).toHaveText('1 item left');
    await todoPage.complete('One');
    await expect(todoPage.count).toHaveText('0 items left');
  });
});
