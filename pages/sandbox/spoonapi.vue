<template>
  <div class="font-Montserrat relative flex flex-col text-center p-10">
    <div class="text-6xl font-bold">Spoonacular API</div>
    <div class="text-2xl">This is a sandbox page for the Spoonacular API.</div>
    <!-- <Button title="Get Random Recipes" @click="fetchRecipe"></Button> -->
  </div>
  <div>
    <div class="flex justify-center">
      <div class="grid grid-cols-4">
        <div v-if="spoon === 0">No recipes found.</div>
        <div v-for="p in spoon" :key="p.id">
          <Card :recipes="p"></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const spoon = ref([]);
const fetchRecipe = async () => {
  try {
    const response = await $fetch(
      "https://api.spoonacular.com/recipes/random",
      {
        params: {
          apiKey: config.public.SPOON_API_KEY,
          number: 4,
        },
      }
    );
    spoon.value = response.recipes || [];
  } catch (err) {
    console.error("Error fetching recipes:", err);
  }
};
fetchRecipe();
</script>

<style scoped></style>
