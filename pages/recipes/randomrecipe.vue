<template>
  <div class="flex justify-center flex-col items-center text-center">
    <div
      v-if="spoon && spoon.recipes && spoon.recipes.length > 0"
      class="flex justify-center flex-col items-center text-center"
    >
      <h1 class="mb-6 mt-12 text-xl font-bold">{{ spoon.recipes[0].title }}</h1>
      <img :src="spoon.recipes[0].image" alt="" class="my-6" />
      <p v-html="spoon.recipes[0].summary" class="my-6 w-3/4"></p>
    </div>
    <NuxtLink
      v-if="spoon && spoon.recipes && spoon.recipes.length > 0"
      :to="`/recipes/${spoon.recipes[0].id}/information`"
    >
      <Button class="button py-2 px-6" title="View Recipe"></Button>
    </NuxtLink>
    <Button
      @click="fetchRecipe"
      class="p-4 m-4"
      title="Get a Random Recipe"
    ></Button>
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
          apiKey: config.public.SPOON_API_KEY,
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
