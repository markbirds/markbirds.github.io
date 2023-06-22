<template>
  <section
    class="mw-full mx-4 my-16 mt-24 cursor-default text-gray-600 md:mx-auto md:w-[80%] lg:w-[60%]"
  >
    <div
      class="flex items-center rounded-lg bg-gradient-to-r from-slate-600 px-4 py-3 text-xl font-bold uppercase text-slate-100"
    >
      <span class="mx-2">Get to know me</span>
      <Icon name="twemoji:see-no-evil-monkey" size="24" />
    </div>
    <section class="my-2 grid w-full gap-2 md:grid-cols-2">
      <section
        class="group rounded-lg bg-slate-100 transition duration-500 hover:bg-slate-200"
      >
        <div
          class="flex items-center justify-center bg-slate-200 py-3 font-medium"
        >
          <span class="mx-2">All-time favorite movies</span>
          <Icon name="mdi:movie-open" size="24" />
        </div>
        <div class="p-4">
          <ul class="ml-8 list-disc">
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Interstellar (2014)</span>
                <span class="hidden group-hover:inline">
                  <Icon name="openmoji:black-hole" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Knowing (2009)</span>
                <span class="hidden group-hover:inline">
                  <Icon name="icon-park:notes" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Snowpiercer (2013)</span>
                <span class="hidden group-hover:inline">
                  <Icon name="fluent-emoji-flat:snowflake" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">The Martian (2015)</span>
                <span class="hidden group-hover:inline">
                  <Icon name="noto:astronaut" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Mad Max: Fury Road (2015)</span>
                <span class="hidden group-hover:inline">
                  <Icon name="noto:racing-car" size="24" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section
        class="group rounded-lg bg-slate-100 transition duration-500 hover:bg-slate-200"
      >
        <div
          class="flex items-center justify-center bg-slate-200 py-3 font-medium"
        >
          <span class="mx-2">Favorite songs in my playlist</span>
          <Icon name="mdi:music" size="24" />
        </div>
        <div class="p-4">
          <ul class="ml-8 list-disc">
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">The Woman I Love (Jason Mraz)</span>
                <a
                  href="https://open.spotify.com/track/6Vn8lTVMjILXQCjZUXS8n4?si=02a66556b0e541fa"
                  target="_blank"
                  class="hidden group-hover:inline"
                >
                  <Icon name="carbon:play-filled" size="24" color="#16a34a" />
                </a>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">If You Stay (Joseph Vincent)</span>
                <a
                  href="https://open.spotify.com/track/2uImdLlBYr2PeGdzmWIYwJ?si=8043841eb2344da7"
                  target="_blank"
                  class="hidden group-hover:inline"
                >
                  <Icon name="carbon:play-filled" size="24" color="#16a34a" />
                </a>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Out of my League (Stephen Speaks)</span>
                <a
                  href="https://open.spotify.com/track/4VoJCUgNmnqG2qF0peDBkw?si=6000a3b5f6154a72"
                  target="_blank"
                  class="hidden group-hover:inline"
                >
                  <Icon name="carbon:play-filled" size="24" color="#16a34a" />
                </a>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Rainbow (South Border)</span>
                <a
                  href="https://open.spotify.com/track/3VcVQmMivq2ISfKUmIuvMK?si=feabe8de36c447d9"
                  target="_blank"
                  class="hidden group-hover:inline"
                >
                  <Icon name="carbon:play-filled" size="24" color="#16a34a" />
                </a>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">So Close (Jon McLaughlin)</span>
                <a
                  href="https://open.spotify.com/track/3XFkhxO5jo2hBOWNzIQ9UB?si=70246f3f9c614818"
                  target="_blank"
                  class="hidden group-hover:inline"
                >
                  <Icon name="carbon:play-filled" size="24" color="#16a34a" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <section class="my-2 grid w-full gap-2 md:grid-cols-3">
      <section
        class="group rounded-lg bg-slate-100 transition duration-500 hover:bg-slate-200"
      >
        <div
          class="flex items-center justify-center bg-slate-200 py-3 font-medium"
        >
          <span class="mx-2">My favorite foods</span>
          <Icon name="dashicons:food" size="24" />
        </div>
        <div class="p-4">
          <ul class="ml-8 list-disc">
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Lasagna</span>
                <span class="hidden group-hover:inline">
                  <Icon
                    name="twemoji:face-savouring-delicious-food"
                    size="24"
                  />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Pizza</span>
                <span class="hidden group-hover:inline">
                  <Icon name="emojione:pizza" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Carbonara</span>
                <span class="hidden group-hover:inline">
                  <Icon name="mdi:pasta" size="24" color="#94a3b8" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Mom's Cooking</span>
                <span class="hidden group-hover:inline">
                  <Icon name="streamline-emojis:family-woman-boy-2" size="24" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section
        class="group rounded-lg bg-slate-100 transition duration-500 hover:bg-slate-200"
      >
        <div
          class="flex items-center justify-center bg-slate-200 py-3 font-medium"
        >
          <span class="mx-2">Tech stack</span>
          <Icon name="fa6-solid:computer" size="24" />
        </div>
        <div class="p-4">
          <ul class="ml-8 mt-2 list-disc">
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Vue</span>
                <span class="hidden group-hover:inline">
                  <Icon name="logos:vue" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Python</span>
                <span class="hidden group-hover:inline">
                  <Icon name="logos:python" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">PostgreSQL</span>
                <span class="hidden group-hover:inline">
                  <Icon name="logos:postgresql" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Docker</span>
                <span class="hidden group-hover:inline">
                  <Icon name="logos:docker-icon" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">AWS</span>
                <span class="hidden group-hover:inline">
                  <Icon name="logos:aws" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">GitLab</span>
                <span class="hidden group-hover:inline">
                  <Icon name="logos:gitlab" size="24" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section
        class="group rounded-lg bg-slate-100 transition duration-500 hover:bg-slate-200"
      >
        <div
          class="flex items-center justify-center bg-slate-200 py-3 font-medium"
        >
          <span class="mx-2">Outdoor and indoor games</span>
          <Icon name="ic:twotone-sports-kabaddi" size="24" />
        </div>
        <div class="p-4">
          <ul class="ml-8 mt-2 list-disc">
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Basketball</span>
                <span class="hidden group-hover:inline">
                  <Icon name="fluent-emoji:basketball" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Perdigana (Reverse Checkers)</span>
                <span class="hidden group-hover:inline">
                  <Icon name="bxs:chess" size="24" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <section class="my-2 grid w-full gap-2 md:grid-cols-2">
      <section
        class="group rounded-lg bg-slate-100 transition duration-500 hover:bg-slate-200"
      >
        <div
          class="flex items-center justify-center bg-slate-200 py-3 font-medium"
        >
          <span class="mx-2">Desktop and mobile games</span>
          <Icon name="fa6-solid:computer" size="24" />
        </div>
        <div class="p-4">
          <ul class="ml-8 mt-2 list-disc">
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Dota 2</span>
                <span class="hidden group-hover:inline">
                  <Icon name="flat-color-icons:steam" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Clash of Clans</span>
                <span class="hidden group-hover:inline">
                  <Icon name="arcticons:clash-of-clans" size="24" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section
        class="group rounded-lg bg-slate-100 transition duration-500 hover:bg-slate-200"
      >
        <div
          class="flex items-center justify-center bg-slate-200 py-3 font-medium"
        >
          <span class="mx-2">Favorite anime series</span>
          <Icon name="solar:tv-bold" size="24" />
        </div>
        <div class="p-4">
          <ul class="ml-8 mt-2 list-disc">
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Bleach</span>
                <span class="hidden group-hover:inline">
                  <Icon name="noto:crossed-swords" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">One Punch Man</span>
                <span class="hidden group-hover:inline">
                  <Icon name="game-icons:punch" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="my-1 mr-2">Kuroko's Basketball</span>
                <span class="hidden group-hover:inline">
                  <Icon name="fluent-emoji:basketball" size="24" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </section>
</template>
<script setup lang="ts"></script>
