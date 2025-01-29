<template>
  <div class="font-Montserrat">
    <div class="flex flex-col justify-center">
      <p class="flex font-bold text-5xl p-12 justify-center">Recipes</p>
    </div>
    <div class="grid grid-cols-4 gap-5 p-4 pb-16">
      <div v-if="spoon.length === 0">No recipes found.</div>
      <div v-for="p in spoon" :key="p.id">
        <Card :recipes="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const spoon = ref([]);

const response = await $fetch("https://api.spoonacular.com/recipes/random", {
  params: {
    apiKey: config.public.SPOON_API_KEY,
    number: 16,
  },
});
spoon.value = response.recipes || [];
</script>

<style scoped></style>
