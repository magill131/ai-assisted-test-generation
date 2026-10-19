import { test, expect } from './fixtures';

// Source: test-cases/US-09-persistence.md
test.describe('US-09 Persistence', () => {
  test('TC-US9-01: todos survive a reload', async ({ todoPage, page }) => {
    await todoPage.addTodos(['Alpha', 'Beta']);
    await page.reload();
    await todoPage.expectTitles(['Alpha', 'Beta']);
  });

  test('TC-US9-02: completed state survives a reload', async ({ todoPage, page }) => {
    await todoPage.addTodos(['Alpha', 'Beta']);
    await todoPage.complete('Alpha');
    await page.reload();
    await expect(todoPage.checkbox('Alpha')).toBeChecked();
    await expect(todoPage.checkbox('Beta')).not.toBeChecked();
  });
});
