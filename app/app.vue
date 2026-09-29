<!-- Root layout: Personal / Portfolio toggle only on the homepage -->
<template>
  <ModeToggle v-if="isHome" />
  <main>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const isHome = computed(() => route.path === "/");
</script>
