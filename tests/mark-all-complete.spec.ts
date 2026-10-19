import { test, expect } from './fixtures';

// Source: test-cases/US-05-mark-all-complete.md
test.describe('US-05 Mark all todos complete', () => {
  test('TC-US5-01: mark all as complete', async ({ todoPage }) => {
    await todoPage.addTodos(['One', 'Two', 'Three']);
    await todoPage.toggleAll.check();
    for (const title of ['One', 'Two', 'Three']) {
      await expect(todoPage.checkbox(title)).toBeChecked();
    }
  });

  test('TC-US5-02: unmark all', async ({ todoPage }) => {
    await todoPage.addTodos(['One', 'Two', 'Three']);
    await todoPage.toggleAll.check();
    await todoPage.toggleAll.uncheck();
    for (const title of ['One', 'Two', 'Three']) {
      await expect(todoPage.checkbox(title)).not.toBeChecked();
    }
  });

  test('TC-US5-03: completing every todo one by one checks Mark all', async ({ todoPage }) => {
    await todoPage.addTodos(['One', 'Two']);
    await expect(todoPage.toggleAll).not.toBeChecked();
    await todoPage.complete('One');
    await todoPage.complete('Two');
    await expect(todoPage.toggleAll).toBeChecked();
  });
});
