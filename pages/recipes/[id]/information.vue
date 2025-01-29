<template>
  <div>
    <ProductDetails v-if="product" :product="product" />
  </div>
</template>

<script setup>
// extracting the dynamic id from the URL (like /products/5 would give you id = 5).
const { id } = useRoute().params;
const config = useRuntimeConfig();

const product = ref(null);

const response = await $fetch(
  `https://api.spoonacular.com/recipes/${id}/information`,
  {
    params: {
      apiKey: config.public.SPOON_API_KEY,
    },
  }
);

product.value = response;

console.log(response);
</script>

<style scoped></style>
