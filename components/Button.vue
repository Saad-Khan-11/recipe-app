<template>
  <button class="button">{{ title }}</button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<style scoped>
.button {
  @apply bg-green-500 hover:bg-green-700 duration-200 text-white font-bold py-2 px-4 rounded-lg;
}
</style>
