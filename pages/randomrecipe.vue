<!-- The code below is AI written code. Need to study this and replicate it with my own logic -->

<template>
  <div>
    <button @click="fetchRecipe">Get Random Recipe</button>
    <div v-if="spoon && spoon.recipes && spoon.recipes.length > 0">
      <h1>{{ spoon.recipes[0].title }}</h1>
      <p v-html="spoon.recipes[0].summary"></p>
    </div>
    <div v-if="error">You have run into an unexpected error.</div>
    <div v-else-if="loading">Loading...</div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

// Define reactive state variables
const spoon = ref(null);
const error = ref(false);
const loading = ref(false);

// Fetch function to retrieve recipe
const fetchRecipe = async () => {
  loading.value = true;
  error.value = false;

  try {
    const response = await useFetch(
      "https://api.spoonacular.com/recipes/random",
      {
        params: {
          apiKey: config.public.spoonApiKey,
          number: 1,
        },
      }
    );

    // Assuming response data is under `data.value` and recipes are in `recipes`
    spoon.value = response.data?.value;
    loading.value = false;
  } catch (err) {
    console.error("Error fetching recipe:", err);
    error.value = true;
    loading.value = false;
  }
};
</script>

<style scoped></style>
