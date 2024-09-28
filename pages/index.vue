<template>
  <div class="font-Montserrat">
    <img src="../assets/images/home-hero.jpg" alt="" />
    <div class="min-h-[60vh] flex justify-between">
      <div class="mt-40 ml-12">
        <div class="text-5xl font-bold my-2">
          Green Recipes for Anyone, Anywhere.
        </div>
        <div class="text-2xl font-semibold my-2">
          We're called a recipe haven for a reason.
        </div>
        <div class="my-2">
          Like I said, we're just a bunch of recipes. Green, healthy ones that
          your body will like.
        </div>
        <button class="button">View Our Recipes</button>
      </div>
      <div class="object-cover h-[50vh] w-[50vw]">
        <img src="../assets/images/showcase-image.jpg" alt="my hero" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.button {
  @apply bg-green-500 hover:bg-green-700 duration-200 text-white font-bold py-2 px-4 rounded;
}
</style>
