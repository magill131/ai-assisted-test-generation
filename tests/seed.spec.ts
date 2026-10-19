import { test, expect } from './fixtures';

// Seed test: shows the generator the setup, the fixture and the style to copy.
test('seed: the app opens with an empty list and accepts a todo', async ({ todoPage }) => {
  await expect(todoPage.items).toHaveCount(0);
  await todoPage.addTodo('Seed todo');
  await expect(todoPage.items).toHaveCount(1);
});
