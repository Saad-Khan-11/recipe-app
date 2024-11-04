<template>
  <div class="font-Montserrat relative">
    <div>
      <div class="relative">
        <div class="flex justify-center font-bold text-5xl pt-12">Recipes</div>
        <div class="grid grid-cols-5 gap-5 p-20">
          <div v-for="p in recipes">
            <Card :recipes="p"></Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: recipes } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
