import { test, expect } from './fixtures';

// Source: test-cases/US-02-complete-todo.md
test.describe('US-02 Complete a todo', () => {
  test('TC-US2-01: completing a todo', async ({ todoPage }) => {
    await todoPage.addTodos(['One', 'Two']);
    await expect(todoPage.count).toHaveText('2 items left');
    await todoPage.complete('One');
    await expect(todoPage.checkbox('One')).toBeChecked();
    await expect(todoPage.count).toHaveText('1 item left');
  });

  test('TC-US2-02: making a completed todo active again', async ({ todoPage }) => {
    await todoPage.addTodos(['One', 'Two']);
    await todoPage.complete('One');
    await expect(todoPage.count).toHaveText('1 item left');
    await todoPage.uncomplete('One');
    await expect(todoPage.checkbox('One')).not.toBeChecked();
    await expect(todoPage.count).toHaveText('2 items left');
  });

  test('TC-US2-03: completing one todo leaves the others active', async ({ todoPage }) => {
    await todoPage.addTodos(['One', 'Two', 'Three']);
    await todoPage.complete('Two');
    await expect(todoPage.checkbox('Two')).toBeChecked();
    await expect(todoPage.checkbox('One')).not.toBeChecked();
    await expect(todoPage.checkbox('Three')).not.toBeChecked();
  });
});
