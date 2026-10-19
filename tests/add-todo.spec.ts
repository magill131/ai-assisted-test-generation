import { test, expect } from './fixtures';

// Source: test-cases/US-01-add-todo.md
test.describe('US-01 Add a todo', () => {
  test('TC-US1-01: add one todo with Enter', async ({ todoPage }) => {
    await todoPage.addTodo('Buy milk');
    await todoPage.expectTitles(['Buy milk']);
    await expect(todoPage.newTodo).toBeEmpty();
    await expect(todoPage.newTodo).toBeFocused();
  });

  test('TC-US1-02: todos are added in order', async ({ todoPage }) => {
    await todoPage.addTodos(['First', 'Second', 'Third']);
    await todoPage.expectTitles(['First', 'Second', 'Third']);
  });

  test('TC-US1-03: spaces around the title are removed', async ({ todoPage }) => {
    await todoPage.addTodo('   Trim me   ');
    await todoPage.expectTitles(['Trim me']);
  });

  test('TC-US1-04: empty entry adds nothing', async ({ todoPage }) => {
    await todoPage.newTodo.press('Enter');
    await expect(todoPage.items).toHaveCount(0);
    await expect(todoPage.main).toBeHidden();
  });

  test('TC-US1-05: spaces-only entry adds nothing', async ({ todoPage }) => {
    await todoPage.addTodo('     ');
    await expect(todoPage.items).toHaveCount(0);
    await expect(todoPage.main).toBeHidden();
  });

  test('TC-US1-06: list and footer are hidden until the first todo', async ({ todoPage }) => {
    await expect(todoPage.main).toBeHidden();
    await expect(todoPage.footer).toBeHidden();
    await todoPage.addTodo('First');
    await expect(todoPage.main).toBeVisible();
    await expect(todoPage.footer).toBeVisible();
  });
});
