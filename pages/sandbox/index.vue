<template>
  <div class="font-Montserrat relative">
    <div class="relative">
      <div class="flex justify-center font-bold text-5xl pt-12">Recipes</div>
      <button class="p-4 m-4 bg-blue-500" @click="fetchRecipe">
        Get Random Recipes
      </button>
      <div class="grid grid-cols-5 gap-5 p-4">
        <div v-if="spoon.length === 0">No recipes found.</div>
        <div v-for="p in spoon" :key="p.id">
          <Card :recipes="p" />
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
          number: 5,
        },
      }
    );
    spoon.value = response.recipes || [];
  } catch (err) {
    console.error("Error fetching recipes:", err);
  }
};
</script>

<style scoped></style>
