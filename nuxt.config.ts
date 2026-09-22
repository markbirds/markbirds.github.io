import tailwindcss from "@tailwindcss/vite";
import { version } from "./package.json";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "./shared/seo";

export default defineNuxtConfig({
  compatibilityDate: "2026-09-22",

  modules: ["@nuxt/eslint", "@nuxt/icon", "nuxt-swiper"],

  app: {
    head: {
      // SSR defaults — useHomePageSeo() keeps these in sync on the client
      title: DEFAULT_TITLE,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        { name: "description", content: DEFAULT_DESCRIPTION },
        { name: "author", content: SITE_NAME },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#1d3557" },

        // Open Graph (link previews)
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: SITE_NAME },
        { property: "og:title", content: DEFAULT_TITLE },
        { property: "og:description", content: DEFAULT_DESCRIPTION },
        { property: "og:url", content: SITE_URL },
        { property: "og:image", content: DEFAULT_OG_IMAGE },

        // Twitter / X
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: DEFAULT_TITLE },
        { name: "twitter:description", content: DEFAULT_DESCRIPTION },
        { name: "twitter:image", content: DEFAULT_OG_IMAGE },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: SITE_URL },
        {
          rel: "preload",
          href: "/fonts/Quicksand/Quicksand-Regular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Quicksand/Quicksand-Medium.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Quicksand/Quicksand-SemiBold.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Quicksand/Quicksand-Bold.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
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
        {
          rel: "preload",
          href: "/images/about-me-portfolio.webp",
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

  icon: {
    clientBundle: {
      scan: true,
      icons: ["devicon:nuxtjs", "devicon:tailwindcss"],
    },
    serverBundle: {
      collections: [
        "carbon",
        "devicon",
        "logos",
        "material-symbols",
        "simple-icons",
        "twemoji",
      ],
    },
  },

  ssr: true,

  runtimeConfig: {
    public: {
      // Baked at generate time. CI sets NUXT_PUBLIC_VERSION from the git tag
      // (or package.json on branch pushes).
      version: process.env.NUXT_PUBLIC_VERSION || version,
    },
  },

  routeRules: {
    "/**": { prerender: true },
  },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        noUncheckedIndexedAccess: true,
        noImplicitOverride: true,
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/apps"],
    },
  },
});
