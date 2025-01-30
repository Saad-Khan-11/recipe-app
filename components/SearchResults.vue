<template>
  <div class="card text-center flex flex-col justify-center">
    <img :src="recipes.image" alt="recipe image" class="thumbnail" />
    <div class="font-bold m-4 truncate">{{ recipes.title }}</div>
    <NuxtLink :to="`/recipes/${recipes.id}/information`"
      ><button class="button py-2 px-6">View Recipe</button></NuxtLink
    >
  </div>
</template>

<script setup>
const { recipes } = defineProps(["recipes"]);
</script>

<style scoped>
.card {
  @apply font-bold rounded-lg bg-slate-50 shadow-lg h-full m-8;
}
.thumbnail {
  @apply max-h-[150px] max-w-[90%] mx-auto;
}
.button {
  @apply bg-green-500 hover:bg-green-700 duration-200 text-white font-bold rounded-lg;
}
</style>
