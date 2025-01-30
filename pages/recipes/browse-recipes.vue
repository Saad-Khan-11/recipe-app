<template>
  <div class="font-Montserrat relative">
    <div>
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

          <div class="grid grid-cols-4">
            <div v-for="p in spoon" :key="p.id" class="flex justify-between">
              <Card :recipes="p" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const spoon = ref([]);

const fetchResults = async () => {
  try {
    const { data, error } = await useFetch(
      "https://api.spoonacular.com/recipes/complexSearch",
      {
        query: {
          apiKey: config.public.SPOON_API_KEY,
          number: 7,
          query: "chicken tikka",
          fields: "id,title,image", // Ensure the response includes 'id'
        },
      }
    );
    spoon.value = data.value.results || [];
  } catch (err) {
    console.error("Error fetching recipe:", err);
  }
};

fetchResults();
</script>

<style scoped></style>
