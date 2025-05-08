<template>
  <div class="flex items-center justify-center text-2xl">
    <div
      class="flex items-center bg-white rounded-full py-1 px-4 bg-opacity-20 shadow-lg"
    >
      <span>Anime</span>
      <Icon name="twemoji:television" class="ml-2" />
    </div>
  </div>
  <div class="mt-10">
    <section>
      <div class="flex items-center mb-2 mt-4">
        <div
          class="bg-white rounded-full w-7 h-7 flex items-center justify-center"
        >
          <Icon name="twemoji:crossed-swords" size="18" />
        </div>
        <div class="ml-2 flex items-center">
          <span class="font-bold">Bleach</span>
          <a
            :href="`https://www.google.com/search?q=${encodeURIComponent('Bleach')}`"
            target="_blank"
            class="ml-2 pt-1.5"
          >
            <Icon name="twemoji:magnifying-glass-tilted-right" size="20" />
          </a>
        </div>
      </div>
      <div class="text-sm text-justify">
        It’s a mix of awesome action and cool characters, all about a teen who
        becomes a Soul Reaper to protect both the living and the dead.
      </div>
    </section>
    <section>
      <div class="flex items-center mb-2 mt-4">
        <div
          class="bg-white rounded-full w-7 h-7 flex items-center justify-center"
        >
          <Icon name="twemoji:oncoming-fist-medium-light-skin-tone" size="20" />
        </div>
        <div class="ml-2 flex items-center">
          <span class="font-bold">One Punch Man</span>
          <a
            :href="`https://www.google.com/search?q=${encodeURIComponent('One Punch Man')}`"
            target="_blank"
            class="ml-2 pt-1.5"
          >
            <Icon name="twemoji:magnifying-glass-tilted-right" size="20" />
          </a>
        </div>
      </div>
      <div class="text-sm text-justify">
        This anime is hilarious! It’s about a superhero (bald) who’s so strong
        he beats everyone in one punch.
      </div>
    </section>
    <section>
      <div class="flex items-center mb-2 mt-4">
        <div
          class="bg-white rounded-full w-7 h-7 flex items-center justify-center"
        >
          <Icon name="twemoji:basketball" size="20" />
        </div>
        <div class="ml-2 flex items-center">
          <span class="font-bold">Kuroko's Basketball</span>
          <a
            :href="`https://www.google.com/search?q=${encodeURIComponent('Kuroko\'s Basketball')}`"
            target="_blank"
            class="ml-2 pt-1.5"
          >
            <Icon name="twemoji:magnifying-glass-tilted-right" size="24" />
          </a>
        </div>
      </div>
      <div class="text-sm text-justify">
        This one’s about Kuroko, a quiet player who’s amazing at passing and
        wants to beat his old teammates, the “Generation of Miracles”, through
        real teamwork.
      </div>
    </section>
  </div>
</template>
