// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@pinia/nuxt",
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  runtimeConfig: {
    public: {
      SPOON_API_KEY: process.env.SPOON_API_KEY,
    },
  },
});
