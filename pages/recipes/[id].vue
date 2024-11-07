<template>
  <div>Recipe details for {{ id }}</div>
</template>

<script setup>
// extracting the dynamic id from the URL (like /products/5 would give you id = 5).
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
</script>

<style lang="scss" scoped></style>
