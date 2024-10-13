<template>
  <div>
    Get Random Recipe
    <div v-if="error">You have run into an unexpected error.</div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { data: spoon, error } = await useFetch(
  "https://api.spoonacular.com/recipes/random",
  {
    params: {
      apiKey: config.public.spoonApiKey,
      number: 1,
    },
  }
);

console.log("Spoon API response:", spoon.value.recipes);

console.log("Spoon API title response:", spoon.value.recipes.title);

console.log("Spoon API summary response:", spoon.value.recipes.summary);
</script>

<style scoped></style>
