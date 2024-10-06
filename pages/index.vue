<template>
  <div class="font-Montserrat relative">
    <div>
      <div
        class="absolute inset-0 bg-cover bg-center opacity-50 bg-[url('../assets/images/home-bg.jpg')] z-5"
      >
        <img
          src="../assets/images/home-bg.jpg"
          alt=""
          class="h-full w-full object-cover"
        />
      </div>
      <div class="relative min-h-[60vh] flex justify-between">
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
          <Button class="fit-content" title="View Recipes"></Button>
        </div>
        <div class="object-cover h-[30vh] w-[30vw]">
          <img src="../assets/images/showcase-image.jpg" alt="my hero" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
