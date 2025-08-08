<template>
  <div class="flex-center text-2xl">
    <div class="swiper-card-title">
      <span>Movies</span>
      <Icon name="twemoji:movie-camera" class="ml-2" />
    </div>
  </div>
  <div class="mt-10">
    <section v-for="movie in movies" :key="movie.title">
      <div class="mt-4 mb-2 flex items-center">
        <div class="swiper-card-item-icon">
          <Icon :name="movie.icon" size="18" />
        </div>
        <div class="ml-2 flex items-center">
          <span class="font-bold">{{ movie.title }}</span>
          <a
            :href="movie.link"
            target="_blank"
            class="ml-2 pt-1.5"
            :aria-label="`View ${movie.title} on IMDb`"
            title="View on IMDb"
          >
            <Icon name="twemoji:magnifying-glass-tilted-right" size="24" />
          </a>
        </div>
      </div>
      <div class="text-justify text-sm">
        {{ movie.description }}
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const movies = [
  {
    title: "Knowing (2009)",
    link: "https://www.imdb.com/title/tt0448011/",
    icon: "twemoji:input-numbers",
    description:
      "A disaster thriller with a mysterious list of numbers that predicts tragic events. It really made me think about fate and whether we're just following a plan we can't change.",
  },
  {
    title: "Interstellar (2014)",
    link: "https://www.imdb.com/title/tt0816692/",
    icon: "openmoji:black-hole",
    description:
      "This is a mind-blowing and visually amazing space movie. It's about a father traveling through space and time to save humanity",
  },
  {
    title: "Hidden (2015)",
    link: "https://www.imdb.com/title/tt2131532/",
    icon: "twemoji:family",
    description:
      "A suspenseful story about a family hiding in a bunker after a disaster. It's tense all throughout, and the twist made it even better.",
  },
];
</script>
