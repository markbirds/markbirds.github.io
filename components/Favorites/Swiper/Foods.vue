<template>
  <div class="flex items-center justify-center text-2xl">
    <div class="swiper-card-title">
      <span>Foods</span>
      <Icon name="twemoji:face-savoring-food" class="ml-2" />
    </div>
  </div>
  <div class="mt-10">
    <section>
      <div class="mb-2 mt-4 flex items-center">
        <div class="swiper-card-item-icon">
          <Icon name="twemoji:pizza" size="20" />
        </div>
        <div class="ml-2 flex items-center">
          <span class="font-bold">Pizza</span>
          <a
            :href="`https://www.google.com/search?q=${encodeURIComponent('Pizza')}`"
            target="_blank"
            class="ml-2 pt-1.5"
          >
            <Icon name="twemoji:magnifying-glass-tilted-right" size="24" />
          </a>
        </div>
      </div>
      <div class="text-justify text-sm">
        I love pizza with meat toppings, especially from Shakey’s and Nonna’s.
        I’m always up to try more — got any recommendations?
      </div>
    </section>
    <section>
      <div class="mb-2 mt-4 flex items-center">
        <div class="swiper-card-item-icon">
          <Icon name="twemoji:chicken" size="20" />
        </div>
        <div class="ml-2 flex items-center">
          <span class="font-bold">Cordon Bleu</span>
          <a
            :href="`https://www.google.com/search?q=${encodeURIComponent('Cordon Bleu')}`"
            target="_blank"
            class="ml-2 pt-1.5"
          >
            <Icon name="twemoji:magnifying-glass-tilted-right" size="24" />
          </a>
        </div>
      </div>
      <div class="text-justify text-sm">
        That crispy, cheesy chicken dish is one of my favorites. But honestly,
        nothing beats the one my mom makes.
      </div>
    </section>
    <section>
      <div class="mb-2 mt-4 flex items-center">
        <div class="swiper-card-item-icon">
          <Icon name="twemoji:tomato" size="20" />
        </div>
        <div class="ml-2 flex items-center">
          <span class="font-bold">Lasagna</span>
          <a
            :href="`https://www.google.com/search?q=${encodeURIComponent('Lasagna')}`"
            target="_blank"
            class="ml-2 pt-1.5"
          >
            <Icon name="twemoji:magnifying-glass-tilted-right" size="24" />
          </a>
        </div>
      </div>
      <div class="text-justify text-sm">
        So far, I’ve only tried lasagna from Greenwich and Pizza Hut. If you
        know a place that serves an amazing one, send it my way!
      </div>
    </section>
  </div>
</template>
