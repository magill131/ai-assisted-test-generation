import { test, expect } from './fixtures';

// Source: test-cases/US-04-delete-todo.md
test.describe('US-04 Delete a todo', () => {
  test('TC-US4-01: delete one of three todos', async ({ todoPage }) => {
    await todoPage.addTodos(['One', 'Two', 'Three']);
    await todoPage.deleteTodo('Two');
    await todoPage.expectTitles(['One', 'Three']);
  });

  test('TC-US4-02: deleting the last todo hides the list and footer', async ({ todoPage }) => {
    await todoPage.addTodo('Only');
    await todoPage.deleteTodo('Only');
    await expect(todoPage.items).toHaveCount(0);
    await expect(todoPage.main).toBeHidden();
    await expect(todoPage.footer).toBeHidden();
  });
});
