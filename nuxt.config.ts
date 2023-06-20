// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Hi! I'm Owen",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
    "nuxt-swiper",
    "dayjs-nuxt",
    "nuxt-icon",
  ],
  ssr: false,
});
