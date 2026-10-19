import { test, expect } from './fixtures';

// Source: test-cases/US-03-edit-todo.md
test.describe('US-03 Edit a todo', () => {
  test('TC-US3-01: edit a title and save with Enter', async ({ todoPage }) => {
    await todoPage.addTodo('Old title');
    await todoPage.editTodo('Old title', 'New title');
    await todoPage.expectTitles(['New title']);
    await expect(todoPage.editInput).toBeHidden();
  });

  test('TC-US3-02: Escape cancels an edit', async ({ todoPage }) => {
    await todoPage.addTodo('Keep me');
    await todoPage.startEdit('Keep me');
    await todoPage.editInput.fill('Something else');
    await todoPage.editInput.press('Escape');
    await todoPage.expectTitles(['Keep me']);
  });

  test('TC-US3-03: saving an empty title deletes the todo', async ({ todoPage }) => {
    await todoPage.addTodos(['Stay', 'Remove']);
    await todoPage.editTodo('Remove', '');
    await todoPage.expectTitles(['Stay']);
  });

  test('TC-US3-04: spaces around an edited title are removed', async ({ todoPage }) => {
    await todoPage.addTodo('Before');
    await todoPage.editTodo('Before', '   After   ');
    await todoPage.expectTitles(['After']);
  });
});
