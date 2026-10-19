import { test as base } from '@playwright/test';
import { TodoPage } from './pages/todo-page';

type Fixtures = {
  /** A TodoPage that has already opened the app with no todos. */
  todoPage: TodoPage;
};

export const test = base.extend<Fixtures>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await use(todoPage);
  },
});

export { expect } from '@playwright/test';
