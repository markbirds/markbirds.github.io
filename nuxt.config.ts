import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Hi, I'm Owen!",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Owen Patrick Falculan - Personal Portfolio",
        },
        { name: "theme-color", content: "#000000" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preload",
          href: "/fonts/Quicksand/Quicksand-Regular.woff2",
          as: "font",
          type: "font/woff2",
        },
        {
          rel: "preload",
          href: "/fonts/Quicksand/Quicksand-Medium.woff2",
          as: "font",
          type: "font/woff2",
        },
        {
          rel: "preload",
          href: "/fonts/Quicksand/Quicksand-SemiBold.woff2",
          as: "font",
          type: "font/woff2",
        },
        {
          rel: "preload",
          href: "/fonts/Quicksand/Quicksand-Bold.woff2",
          as: "font",
          type: "font/woff2",
        },
        {
          rel: "preload",
          href: "/images/profile/me1.webp",
          as: "image",
          type: "image/webp",
        },
        {
          rel: "preload",
          href: "/images/profile/me2.webp",
          as: "image",
          type: "image/webp",
        },
        {
          rel: "preload",
          href: "/images/profile/me3.webp",
          as: "image",
          type: "image/webp",
        },
        {
          rel: "preload",
          href: "/images/about-me.webp",
          as: "image",
          type: "image/webp",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/stylelint-module",
    "@nuxt/icon",
    "nuxt-swiper",
  ],

  ssr: true,
  compatibilityDate: "2024-08-11",
});
