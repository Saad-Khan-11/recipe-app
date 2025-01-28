<template>
  <div class="font-Montserrat">
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 class="text-2xl font-bold text-gray-800 mb-4 text-center">
          To-Do List
        </h1>

        <div class="flex mb-4">
          <input
            type="text"
            v-model="newTodo"
            @keyup.enter="addTodo"
            placeholder="Add a new task"
            class="flex-grow border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            @click="addTodo"
            class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add
          </button>
        </div>
        <ul class="space-y-2">
          <li
            v-for="todo in todoStore.todos"
            :key="todo.id"
            class="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-md shadow-sm"
          >
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                v-model="todo.completed"
                @change="toggleTodo(todo.id)"
                class="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <span
                :class="{ 'line-through text-gray-500': todo.completed }"
                class="text-gray-800"
              >
                {{ todo.text }}</span
              >
            </label>
            <button
              @click="deleteTodo(todo.id)"
              class="text-red-500 hover:text-red-600 focus:outline-none"
            >
              Delete
            </button>
          </li>
        </ul>

        <div class="mt-4 text-sm text-gray-600">
          <p>
            Remaining:
            <span class="font-semibold">{{
              todoStore.remainingTodos.length
            }}</span>
          </p>
          <p>
            Completed:
            <span class="font-semibold">{{
              todoStore.completedTodos.length
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from "~/stores/todoStore";

const todoStore = useTodoStore();
const newTodo = ref("");

const addTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value.trim());
    newTodo.value = "";
  }
};

const toggleTodo = (id) => {
  todoStore.toggleTodo(id);
};

const deleteTodo = (id) => {
  todoStore.deleteTodo(id);
};
</script>

<style></style>
