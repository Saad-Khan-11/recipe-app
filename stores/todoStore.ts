import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: [] as Array<{ id: number; text: string; completed: boolean }>,
  }),
  getters: {
    completedTodos: (state) => state.todos.filter((todo) => todo.completed),
    remainingTodos: (state) => state.todos.filter((todo) => !todo.completed),
  },
  actions: {
    addTodo(text: string) {
      const id = Date.now();
      this.todos.push({ id, text, completed: false });
    },
    toggleTodo(id: number) {
      const todo = this.todos.find((t) => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
  },
});
