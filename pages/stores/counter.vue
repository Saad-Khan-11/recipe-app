<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-8"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
      <h1 class="text-2xl font-semibold text-gray-800 mb-4">Counter Page</h1>

      <p class="text-xl font-medium text-gray-600 mb-6">
        Count: <span class="text-blue-600">{{ counter.count }}</span>
      </p>

      <div class="flex space-x-4 justify-center">
        <button
          @click="counter.increment"
          class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
        >
          Increment
        </button>
        <button
          @click="counter.decrement"
          class="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-200"
        >
          Decrement
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "~/stores/counter";

const counter = useCounterStore();

// Call initialize to load the count from localStorage if available
onMounted(() => {
  counter.initialize();
});
</script>

<style scoped></style>
