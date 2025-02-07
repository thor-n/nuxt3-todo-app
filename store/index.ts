import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as { text: string; completed: boolean }[],
  }),
  actions: {
    addTodo(text: string) {
      this.todos.push({ text, completed: false });
    },
    removeTodo(index: number) {
      this.todos.splice(index, 1);
    },
    toggleTodoCompletion(index: number) {
      this.todos[index].completed = !this.todos[index].completed;
    },
  },
});