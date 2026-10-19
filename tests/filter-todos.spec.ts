import { test, expect } from './fixtures';
import type { TodoPage } from './pages/todo-page';

// Source: test-cases/US-06-filter-todos.md
async function setUpMixedList(todoPage: TodoPage) {
  await todoPage.addTodos(['Open one', 'Done one', 'Open two']);
  await todoPage.complete('Done one');
}

test.describe('US-06 Filter todos', () => {
  test('TC-US6-01: Active filter', async ({ todoPage }) => {
    await setUpMixedList(todoPage);
    await todoPage.selectFilter('Active');
    await todoPage.expectTitles(['Open one', 'Open two']);
  });

  test('TC-US6-02: Completed filter', async ({ todoPage }) => {
    await setUpMixedList(todoPage);
    await todoPage.selectFilter('Completed');
    await todoPage.expectTitles(['Done one']);
  });

  test('TC-US6-03: All filter after another filter', async ({ todoPage }) => {
    await setUpMixedList(todoPage);
    await todoPage.selectFilter('Active');
    await todoPage.selectFilter('All');
    await todoPage.expectTitles(['Open one', 'Done one', 'Open two']);
  });

  test('TC-US6-04: selected filter is highlighted and in the address', async ({ todoPage, page }) => {
    await todoPage.addTodo('One');
    await todoPage.selectFilter('Active');
    await expect(todoPage.filterLink('Active')).toHaveClass(/selected/);
    await expect(page).toHaveURL(/#\/active$/);
  });
});
