<template>
  <div class="grid grid-cols-2 gap-10">
    <div class="p-7">
      <img
        :src="product.image"
        alt="recipe image"
        class="my-7 thumb border-4 border-green-500 rounded-xl"
      />
    </div>
    <div class="p-7">
      <div class="text-4xl font-bold truncate text-gray-500 my-7">
        {{ product.title }}
      </div>
      <div class="text-2xl">Price - ${{ product.price }}</div>
      <div class="border-b border-gray-500 my-7"></div>
      <div>{{ product.description }}</div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
  @apply max-h-[70%] max-w-[70%] mx-auto;
}
</style>
