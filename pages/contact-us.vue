<template>
  <div class="font-Montserrat relative">
    <div>
      <div class="relative min-h-[70vh] flex justify-center text-center">
        <div class="mt-40">
          <div class="text-6xl font-bold">Got Any Questions? Ask Here!</div>
          <div
            class="flex flex-col items-center bg-green-400 rounded-lg my-12 p-4"
          >
            <div class="text-2xl my-2">
              Our Support Staff replies within 24 hours.
            </div>
            <input
              type="text"
              class="w-full p-2 border-2 border-green-500 rounded-lg my-2"
              placeholder="Name"
            />
            <input
              type="text"
              class="w-full p-2 border-2 border-green-500 rounded-lg my-2"
              placeholder="Email"
            />
            <textarea
              class="w-full p-2 border-2 border-green-500 rounded-lg my-2 h-36"
              placeholder="Type your message..."
            />
            <Button title="Send Message" class="text-xl px-6 py-2"></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
