import { expect, type Locator, type Page } from '@playwright/test';

export const APP_URL = 'https://demo.playwright.dev/todomvc';

export type Filter = 'All' | 'Active' | 'Completed';

export class TodoPage {
  readonly page: Page;
  readonly newTodo: Locator;
  readonly items: Locator;
  readonly titles: Locator;
  readonly count: Locator;
  readonly toggleAll: Locator;
  readonly clearCompleted: Locator;
  readonly main: Locator;
  readonly footer: Locator;
  readonly editInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodo = page.getByPlaceholder('What needs to be done?');
    this.items = page.getByTestId('todo-item');
    this.titles = page.getByTestId('todo-title');
    this.count = page.getByTestId('todo-count');
    this.toggleAll = page.getByLabel('Mark all as complete');
    this.clearCompleted = page.getByRole('button', { name: 'Clear completed' });
    // The app has no roles or test ids for these two containers, so CSS classes are the only option.
    this.main = page.locator('.main');
    this.footer = page.locator('.footer');
    this.editInput = page.getByRole('textbox', { name: 'Edit' });
  }

  async goto(): Promise<void> {
    await this.page.goto(APP_URL);
    await expect(this.newTodo).toBeVisible();
  }

  async addTodo(title: string): Promise<void> {
    await this.newTodo.fill(title);
    await this.newTodo.press('Enter');
  }

  async addTodos(titles: string[]): Promise<void> {
    for (const title of titles) {
      await this.addTodo(title);
    }
  }

  /** The list item whose title is exactly `title`. */
  item(title: string): Locator {
    return this.items.filter({
      has: this.titles.getByText(title, { exact: true }),
    });
  }

  checkbox(title: string): Locator {
    return this.item(title).getByRole('checkbox');
  }

  async complete(title: string): Promise<void> {
    await this.checkbox(title).check();
  }

  async uncomplete(title: string): Promise<void> {
    await this.checkbox(title).uncheck();
  }

  /** Double-click a title to open the edit field. Only one todo is edited at a time. */
  async startEdit(title: string): Promise<void> {
    await this.item(title).getByTestId('todo-title').dblclick();
    await expect(this.editInput).toBeVisible();
  }

  async editTodo(title: string, newTitle: string): Promise<void> {
    await this.startEdit(title);
    await this.editInput.fill(newTitle);
    await this.editInput.press('Enter');
  }

  async deleteTodo(title: string): Promise<void> {
    const item = this.item(title);
    await item.hover();
    // The delete button has no accessible name in this app, so the CSS class is used.
    await item.locator('.destroy').click();
  }

  filterLink(name: Filter): Locator {
    return this.footer.getByRole('link', { name });
  }

  async selectFilter(name: Filter): Promise<void> {
    await this.filterLink(name).click();
  }

  async expectTitles(titles: string[]): Promise<void> {
    await expect(this.titles).toHaveText(titles);
  }
}
