<template>
  <div>
    Get Random Recipe
    <div
      v-if="
        spoon &&
        spoon.value &&
        spoon.value.recipes &&
        spoon.value.recipes.length > 0
      "
    >
      <h1>{{ spoon.value.recipes[0].title }}</h1>
      <p v-html="spoon.value.recipes[0].summary"></p>
    </div>
    <div v-if="error">You have run into an unexpected error.</div>
    <div v-else-if="!spoon.value">Loading...</div>
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

console.log("Spoon API title response:", spoon.value.recipes[0].title);

console.log("Spoon API summary response:", spoon.value.recipes[0].summary);
</script>

<style scoped></style>
