<template>
  <div class="font-Montserrat relative">
    <div>
      <div class="absolute inset-0 bg-cover bg-center opacity-40 z-5">
        <img
          src="../assets/images/home-bg.jpg"
          alt=""
          class="h-full w-full object-cover"
        />
      </div>
      <div class="relative min-h-[70vh] flex justify-between">
        <div class="mt-40 ml-12">
          <div class="text-6xl font-bold my-2">
            Green Recipes for Anyone, Anywhere.
          </div>
          <div class="text-2xl my-2">
            Like I said, we're just a bunch of recipes. Green, healthy ones that
            your body will like. And it won't cost you anything.
          </div>
          <Button title="View Recipes"></Button>
        </div>
        <div class="object-cover h-1/2 w-1/2 p-10">
          <img
            src="../assets/images/showcase-image.jpg"
            alt="my hero"
            class="border-4 border-green-500 rounded-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
