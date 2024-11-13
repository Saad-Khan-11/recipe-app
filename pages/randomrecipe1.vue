<template>
  <div>
    <button @click="fetchRecipe">Get a Random Recipe</button>
    <div v-if="spoon && spoon.recipes && spoon.recipes.length > 0">
      <img :src="spoon.recipes[0].image" alt="" />
      <h1>{{ spoon.recipes[0].title }}</h1>
      <p v-html="spoon.recipes[0].summary"></p>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const spoon = ref(null);

const fetchRecipe = async () => {
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
    spoon.value = response.data.value;
  } catch (err) {
    console.error("Error fetching recipe:", err);
  }
};
</script>

<style scoped></style>
