<template>
  <div>
    <header>
      <nav class="flex justify-between bg-green-300 px-8 py-6 font-Montserrat">
        <NuxtLink to="/">Home (Logo)</NuxtLink>
        <div class="flex justify-around gap-10">
          <NuxtLink to="/about-us">About Us</NuxtLink>
          <NuxtLink to="/browse-recipes">Browse Recipes</NuxtLink>
          <NuxtLink to="/recipes">Recipes</NuxtLink>
          <NuxtLink to="/create-recipe">Create your Recipe</NuxtLink>
        </div>
        <NuxtLink to="/contact-us">Contact Us</NuxtLink>
      </nav>
    </header>
    <div><slot /></div>
    <footer>
      <div
        class="flex flex-col-3 justify-around bg-green-500 p-12 font-Montserrat"
      >
        <div class="w-1/3">
          <div class="text-4xl font-bold">Logo</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, nisi?
          </div>
        </div>
        <div class="w-1/3">
          <div>Home</div>
          <div>Products</div>
          <div>Recipes</div>
          <div>Blog</div>
          <div>Contact Us</div>
        </div>
        <div>Contact Form</div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped></style>
