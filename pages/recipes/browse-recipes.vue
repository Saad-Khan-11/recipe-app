<template>
  <div class="font-Montserrat relative">
    <div>
      <div class="relative min-h-[70vh] flex justify-center">
        <div class="mt-40 ml-12">
          <div class="text-6xl font-bold my-2 text-center">
            What Recipe will You Search Today?
          </div>
          <div class="flex justify-center">
            <input
              type="text"
              class="w-3/4 p-3 border-2 border-green-500 rounded-3xl my-6"
              placeholder="Search Here..."
              v-model="searchQuery"
            />
          </div>
          <div class="flex justify-center">
            <Button
              title="Search"
              class="text-xl px-6 py-2"
              @click="fetchResults()"
            ></Button>
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
          >
            <Card v-for="p in spoon" :key="p.id" :recipes="p" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const spoon = ref([]);
const searchQuery = ref("");

const fetchResults = async () => {
  try {
    if (!searchQuery.value.trim()) return;

    const { data, error } = await useFetch(
      "https://api.spoonacular.com/recipes/complexSearch",
      {
        query: {
          apiKey: config.public.SPOON_API_KEY,
          number: 12,
          query: searchQuery.value,
          fields: "id,title,image",
        },
      }
    );
    console.log("API Response:", data.value);

    spoon.value = data.value.results || [];
  } catch (err) {
    console.error("Error fetching recipe:", err);
  }
};
</script>

<style scoped></style>
