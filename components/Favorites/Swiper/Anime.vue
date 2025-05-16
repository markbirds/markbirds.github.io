<template>
  <div class="flex items-center justify-center text-2xl">
    <div
      class="flex items-center rounded-full bg-white bg-opacity-20 px-4 py-1 shadow-lg"
    >
      <span>Anime</span>
      <Icon name="twemoji:television" class="ml-2" />
    </div>
  </div>
  <div class="mt-10">
    <section>
      <div class="mb-2 mt-4 flex items-center">
        <div
          class="flex h-7 w-7 items-center justify-center rounded-full bg-white"
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
      <div class="text-justify text-sm">
        A mix of epic action and cool characters. It follows a teen who becomes
        a Soul Reaper to protect both the living and the dead.
      </div>
    </section>
    <section>
      <div class="mb-2 mt-4 flex items-center">
        <div
          class="flex h-7 w-7 items-center justify-center rounded-full bg-white"
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
      <div class="text-justify text-sm">
        This anime is hilarious! It’s about a superhero (bald) who’s so strong,
        he defeats every enemy with just one punch.
      </div>
    </section>
    <section>
      <div class="mb-2 mt-4 flex items-center">
        <div
          class="flex h-7 w-7 items-center justify-center rounded-full bg-white"
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
      <div class="text-justify text-sm">
        It’s about Kuroko, a quiet but amazing passer who wants to take down his
        old teammates — the “Generation of Miracles” — using real teamwork.
      </div>
    </section>
  </div>
</template>
