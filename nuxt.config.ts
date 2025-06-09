import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Hi, I'm Owen!",
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "dayjs-nuxt",
    // "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxtjs/stylelint-module",
    "@nuxt/icon",
    "nuxt-swiper",
  ],

  ssr: false,
  compatibilityDate: "2024-08-11",
});
