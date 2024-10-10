<template>
  <div class="card text-center">
    <img src="@/assets/images/home-bg.jpg" alt="" class="thumbnail" />
    <p>Cardbox</p>
    <NuxtLink :to="/recipes-for-sale/"
      ><Button title="View Recipes"></Button
    ></NuxtLink>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  @apply font-bold rounded-lg p-3 bg-slate-50 shadow-lg h-full m-8;
}
.thumbnail {
  @apply max-h-[120px] max-w-[70%] mx-auto;
}
</style>
