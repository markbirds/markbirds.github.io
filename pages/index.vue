<template>
  <section
    class="transition-opacity duration-[1000ms] ease-in-out"
    :class="loaded ? 'opacity-100' : 'opacity-0'"
  >
    <Profile />
    <AboutMe />
    <Favorites />
    <SportsAndGames />
    <Gallery />
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

const loaded = ref(false);

onMounted(() => {
  loaded.value = true;
});
</script>
