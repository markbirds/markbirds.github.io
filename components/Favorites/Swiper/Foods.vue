<template>
  <div class="flex items-center justify-center text-2xl">
    <div
      class="flex items-center bg-white rounded-full py-1 px-4 bg-opacity-20 shadow-lg"
    >
      <span>Foods</span>
      <Icon name="twemoji:face-savoring-food" class="ml-2" />
    </div>
  </div>
  <div class="mt-10">
    <section>
      <div class="flex items-center mb-2 mt-4">
        <div
          class="bg-white rounded-full w-7 h-7 flex items-center justify-center"
        >
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
      <div class="text-sm text-justify">
        I love pizza with meat toppings, especially from Shakey’s and Nonna’s,
        and I’m always up to try more—got any recommendations?
      </div>
    </section>
    <section>
      <div class="flex items-center mb-2 mt-4">
        <div
          class="bg-white rounded-full w-7 h-7 flex items-center justify-center"
        >
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
      <div class="text-sm text-justify">
        It’s that crispy, cheesy chicken dish I enjoy a lot, but honestly,
        nothing beats the one my mom makes.
      </div>
    </section>
    <section>
      <div class="flex items-center mb-2 mt-4">
        <div
          class="bg-white rounded-full w-7 h-7 flex items-center justify-center"
        >
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
      <div class="text-sm text-justify">
        I’ve only tried lasagna from Greenwich and Pizza Hut so far, so if you
        know a place that serves a great one, send it my way!
      </div>
    </section>
  </div>
</template>
