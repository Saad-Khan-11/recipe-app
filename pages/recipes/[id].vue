<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
// extracting the dynamic id from the URL (like /products/5 would give you id = 5).
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// fetching the data from fakestoreapi
const { data: product } = await useFetch(uri, { key: id });
</script>

<style scoped></style>
