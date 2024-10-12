<template>
  <div class="font-Montserrat relative">
    <div>
      <div class="absolute inset-0 bg-cover bg-center opacity-40 z-5">
        <img
          src="@/assets/images/home-bg.jpg"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="relative min-h-[70vh] flex justify-center">
        <div class="mt-40 ml-12">
          <div class="text-6xl font-bold my-2">
            What Recipe will You Search Today?
          </div>
          <div class="flex justify-center">
            <input
              type="text"
              class="w-3/4 p-3 border-2 border-green-500 rounded-3xl my-6"
              placeholder="Search Here..."
            />
          </div>
          <div class="flex justify-center">
            <Button title="Search" class="text-xl px-6 py-2"></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
