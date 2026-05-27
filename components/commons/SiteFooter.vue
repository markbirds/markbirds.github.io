<!-- Shared footer: internet dog easter egg + Nuxt/Tailwind credits -->
<template>
  <section class="mt-12 mb-4 w-full text-center text-gray-600">
    <div class="italic">
      <a
        href="/internetdog.gif"
        target="_blank"
        aria-label="View internet dog GIF"
        title="Internet Dog GIF"
      >
        On the Internet, nobody knows you're a dog
      </a>
    </div>
    <div class="flex-center mt-4">
      <span class="mx-2">Built with</span>
      <Tooltip tooltip-text="Nuxt">
        <a
          href="https://nuxt.com"
          target="_blank"
          aria-label="Visit Nuxt.js website"
          title="Nuxt.js"
        >
          <Icon name="devicon:nuxtjs" size="24" />
        </a>
      </Tooltip>
      <Tooltip tooltip-text="Tailwind CSS">
        <a
          href="https://tailwindcss.com"
          class="ml-1"
          target="_blank"
          aria-label="Visit Tailwind CSS website"
          title="Tailwind CSS"
        >
          <Icon name="devicon:tailwindcss" size="24" />
        </a>
      </Tooltip>
    </div>
  </section>
</template>

<script setup lang="ts">
import Tooltip from "@/components/commons/Tooltip.vue";
</script>
