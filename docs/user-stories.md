# User stories: TodoMVC

App under test: https://demo.playwright.dev/todomvc

These stories are the input for the `generate-test-cases` skill. Each acceptance criterion has an ID so test cases can point back to it.

## US-01: Add a todo

As a user, I want to add a todo so that I can track a task.

- AC-1.1: Typing text in the input and pressing Enter adds a todo at the bottom of the list.
- AC-1.2: After a todo is added, the input is empty and still has focus.
- AC-1.3: Spaces before and after the text are removed from the todo title.
- AC-1.4: An empty entry, or one with only spaces, does not add a todo.
- AC-1.5: When there are no todos, the list and the footer are hidden. They appear after the first todo is added.

## US-02: Complete a todo

As a user, I want to mark a todo as done so that I can see what is finished.

- AC-2.1: Checking a todo's checkbox marks it as completed.
- AC-2.2: Unchecking a completed todo's checkbox makes it active again.
- AC-2.3: The items-left counter goes down when a todo is completed and up when it is made active again.

## US-03: Edit a todo

As a user, I want to change a todo's text so that I can fix mistakes.

- AC-3.1: Double-clicking a todo's title opens it for editing.
- AC-3.2: Pressing Enter saves the new title.
- AC-3.3: Pressing Escape cancels the edit and keeps the original title.
- AC-3.4: Saving an empty title deletes the todo.
- AC-3.5: Spaces before and after the new title are removed when it is saved.

## US-04: Delete a todo

As a user, I want to delete a todo so that I can remove tasks I no longer need.

- AC-4.1: Hovering over a todo shows a delete button.
- AC-4.2: Clicking the delete button removes that todo and no others.
- AC-4.3: Deleting the last todo hides the list and the footer.

## US-05: Mark all todos complete

As a user, I want to complete every todo at once so that I save time.

- AC-5.1: Checking "Mark all as complete" marks every todo as completed.
- AC-5.2: Unchecking it when every todo is completed makes every todo active again.
- AC-5.3: When every todo has been completed one by one, "Mark all as complete" becomes checked.

## US-06: Filter todos

As a user, I want to filter the list so that I can focus on what matters.

- AC-6.1: The Active filter shows only todos that are not completed.
- AC-6.2: The Completed filter shows only completed todos.
- AC-6.3: The All filter shows every todo.
- AC-6.4: The selected filter is highlighted and shown in the page address.

## US-07: Clear completed todos

As a user, I want to remove all finished todos in one step so that the list stays short.

- AC-7.1: The "Clear completed" button is shown only when at least one todo is completed.
- AC-7.2: Clicking "Clear completed" removes every completed todo and keeps the active ones.

## US-08: Items-left counter

As a user, I want to see how many todos are still open.

- AC-8.1: With exactly one active todo, the counter reads "1 item left".
- AC-8.2: With zero or more than one active todo, the counter reads "N items left".

## US-09: Persistence

As a user, I want my todos to survive a page reload so that I do not lose my list.

- AC-9.1: Todos are still in the list after the page is reloaded.
- AC-9.2: A todo's completed state is kept after the page is reloaded.
