<template>
  <div class="flex-center text-2xl">
    <div class="swiper-card-title">
      <span>Foods</span>
      <Icon name="twemoji:face-savoring-food" class="ml-2" />
    </div>
  </div>
  <div class="mt-10">
    <section v-for="food in foods" :key="food.title">
      <div class="mt-4 mb-2 flex items-center">
        <div class="swiper-card-item-icon">
          <Icon :name="food.icon" size="20" />
        </div>
        <div class="ml-2 flex items-center">
          <span class="font-bold">{{ food.title }}</span>
          <a
            :href="food.link"
            target="_blank"
            class="ml-2 pt-1.5"
            :aria-label="`Search for ${food.title} food`"
            title="Search on Google"
          >
            <Icon name="twemoji:magnifying-glass-tilted-right" size="24" />
          </a>
        </div>
      </div>
      <div class="text-justify text-sm">
        {{ food.description }}
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const foods = [
  {
    title: "Pizza",
    link: `https://www.google.com/search?q=${encodeURIComponent("Pizza")}`,
    icon: "twemoji:pizza",
    description:
      "I love pizza with meat toppings, especially from Shakey’s and Nonna’s. I’m always up to try more — got any recommendations?",
  },
  {
    title: "Cordon Bleu",
    link: `https://www.google.com/search?q=${encodeURIComponent("Cordon Bleu")}`,
    icon: "twemoji:chicken",
    description:
      "That crispy, cheesy chicken dish is one of my favorites. But honestly, nothing beats the one my mom makes.",
  },
  {
    title: "Lasagna",
    link: `https://www.google.com/search?q=${encodeURIComponent("Lasagna")}`,
    icon: "twemoji:tomato",
    description:
      "So far, I’ve only tried lasagna from Greenwich and Pizza Hut. If you know a place that serves an amazing one, send it my way!",
  },
];
</script>
