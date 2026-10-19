import { test, expect } from './fixtures';

// Source: test-cases/US-07-clear-completed.md
test.describe('US-07 Clear completed todos', () => {
  test('TC-US7-01: button is hidden when nothing is completed', async ({ todoPage }) => {
    await todoPage.addTodos(['One', 'Two']);
    await expect(todoPage.clearCompleted).toBeHidden();
  });

  test('TC-US7-02: button appears once a todo is completed', async ({ todoPage }) => {
    await todoPage.addTodos(['One', 'Two']);
    await todoPage.complete('One');
    await expect(todoPage.clearCompleted).toBeVisible();
  });

  test('TC-US7-03: clear completed keeps active todos', async ({ todoPage }) => {
    await todoPage.addTodos(['Keep', 'Gone one', 'Gone two']);
    await todoPage.complete('Gone one');
    await todoPage.complete('Gone two');
    await todoPage.clearCompleted.click();
    await todoPage.expectTitles(['Keep']);
    await expect(todoPage.clearCompleted).toBeHidden();
  });
});
