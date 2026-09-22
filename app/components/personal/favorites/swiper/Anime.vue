<template>
  <div class="flex-center text-2xl">
    <div class="swiper-card-title">
      <span>Anime</span>
      <Icon name="twemoji:television" class="ml-2" />
    </div>
  </div>
  <div class="mt-10">
    <section v-for="anime in animes" :key="anime.title">
      <div class="mt-4 mb-2 flex items-center">
        <div class="swiper-card-item-icon">
          <Icon :name="anime.icon" size="18" />
        </div>
        <div class="ml-2 flex items-center">
          <span class="font-bold">{{ anime.title }}</span>
          <a
            :href="anime.link"
            target="_blank"
            class="ml-2 pt-1.5"
            :aria-label="`Search for ${anime.title} anime`"
            title="Search on Google"
          >
            <Icon name="twemoji:magnifying-glass-tilted-right" size="20" />
          </a>
        </div>
      </div>
      <div class="text-justify text-sm">
        {{ anime.description }}
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const animes = [
  {
    title: "Bleach",
    link: `https://www.google.com/search?q=${encodeURIComponent("Bleach Anime")}`,
    icon: "twemoji:crossed-swords",
    description:
      "A mix of epic action and cool characters. It follows a teen who becomes a Soul Reaper to protect both the living and the dead.",
  },
  {
    title: "One Punch Man",
    link: `https://www.google.com/search?q=${encodeURIComponent("One Punch Man Anime")}`,
    icon: "twemoji:oncoming-fist-medium-light-skin-tone",
    description:
      "This anime is hilarious! It's about a superhero (bald) who's so strong, he defeats every enemy with just one punch.",
  },
  {
    title: "Kuroko's Basketball",
    link: `https://www.google.com/search?q=${encodeURIComponent("Kuroko's Basketball Anime")}`,
    icon: "twemoji:basketball",
    description:
      "It's about Kuroko, a quiet but amazing passer who wants to take down his old teammates — the 'Generation of Miracles' — using real teamwork.",
  },
];
</script>
