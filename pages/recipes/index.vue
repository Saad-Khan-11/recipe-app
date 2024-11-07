<template>
  <div class="font-Montserrat relative">
    <div class="relative">
      <div class="flex justify-center font-bold text-5xl pt-12">Recipes</div>
      <div class="grid grid-cols-5 gap-5 p-20">
        <!-- It loops through the array "recipes" that we have recieved from fakestoreapi -->
        <div v-for="p in recipes">
          <!-- Card component is used to display the data inside "recipes" array. we represent a single iteration of "recipes" with the letter "p" -->
          <Card :recipes="p"></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// fetches the data from fakestoreapi
const { data: recipes } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
