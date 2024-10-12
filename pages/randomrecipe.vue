<template>
  <div>
    Get Random Recipe
    <div v-if="pending">Loading...</div>
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

if (spoon.value) {
  console.log("Spoonacular API response:", spoon.value);
}
</script>

<style scoped></style>
