<template>
  <div class="font-Montserrat relative flex flex-col text-center p-10">
    <div class="text-6xl font-bold">Spoonacular API</div>
    <div class="text-2xl">This is a sandbox page for the Spoonacular API</div>
  </div>
  <div>
    <div class="flex justify-center">
      <div class="text-xl mb-6">Recipe</div>
      <div class="grid grid-cols-4">
        <!-- <div v-for="r in response.data.recipes"></div>
        <Card :recipes="r"></Card> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const spoon = ref(null);

const response = await useFetch("https://api.spoonacular.com/recipes/random", {
  params: {
    apiKey: config.public.spoonApiKey,
    number: 1,
  },
});

spoon.value = response.data.value;

console.log(spoon.value.recipes[0]);
</script>

<style scoped></style>
