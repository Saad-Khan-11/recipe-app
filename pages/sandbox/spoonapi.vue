<template>
  <div class="font-Montserrat relative flex flex-col text-center p-10">
    <div class="text-6xl font-bold">Spoonacular API</div>
    <div class="text-2xl">This is a sandbox page for the Spoonacular API</div>
  </div>
  <div>
    <div class="flex justify-center">
      <div class="text-xl mb-6">Recipe</div>
      <div class="grid grid-cols-4">
        <div v-for="(r, index) in spoon.value?.recipes" :key="index">
          <Card :recipes="r"></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const spoon = ref(null);

const { data } = await useFetch("https://api.spoonacular.com/recipes/random", {
  params: {
    apiKey: config.public.spoonApiKey,
    number: 4,
  },
});

spoon.value = data.value;

console.log(spoon.value?.recipes);
</script>

<style scoped></style>
