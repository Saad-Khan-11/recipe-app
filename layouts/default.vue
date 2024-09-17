<template>
  <div class="container">
    <header>
      <nav class="flex justify-between bg-green-300 px-8 py-6 font-Montserrat">
        <div>Logo</div>
        <div class="flex justify-around gap-5">
          <div>Home</div>
          <div>Products</div>
          <div>Recipes</div>
          <div>Blog</div>
        </div>
        <div>Contact Us</div>
      </nav>
    </header>
    <div><slot /></div>
    <footer>
      <div
        class="flex flex-col-3 justify-around bg-green-500 p-12 font-Montserrat"
      >
        <div class="w-1/3">
          <div>Logo</div>
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
