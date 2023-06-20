<template>
  <section
    class="mw-full md:w-[80%] lg:w-[60%] mx-4 md:mx-auto mt-24 my-16 text-gray-600 cursor-default"
  >
    <div
      class="flex items-center text-xl bg-gradient-to-r from-slate-600 text-slate-100 rounded-lg py-3 px-4 font-bold uppercase"
    >
      <span class="mx-2">Get to know me</span>
      <Icon name="twemoji:see-no-evil-monkey" size="24" />
    </div>
    <section class="my-2 grid md:grid-cols-2 gap-2 w-full">
      <section
        class="group bg-slate-100 rounded-lg transition hover:bg-slate-200 duration-500"
      >
        <div
          class="flex justify-center items-center font-medium bg-slate-200 py-3"
        >
          <span class="mx-2">All-time favorite movies</span>
          <Icon name="mdi:movie-open" size="24" />
        </div>
        <div class="p-4">
          <ul class="list-disc ml-8">
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Interstellar (2014)</span>
                <span class="hidden group-hover:inline">
                  <Icon name="openmoji:black-hole" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Knowing (2009)</span>
                <span class="hidden group-hover:inline">
                  <Icon name="icon-park:notes" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Snowpiercer (2013)</span>
                <span class="hidden group-hover:inline">
                  <Icon name="fluent-emoji-flat:snowflake" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">The Martian (2015)</span>
                <span class="hidden group-hover:inline">
                  <Icon name="noto:astronaut" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Mad Max: Fury Road (2015)</span>
                <span class="hidden group-hover:inline">
                  <Icon name="noto:racing-car" size="24" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section
        class="group bg-slate-100 rounded-lg transition hover:bg-slate-200 duration-500"
      >
        <div
          class="flex justify-center items-center font-medium bg-slate-200 py-3"
        >
          <span class="mx-2">Favorite songs in my playlist</span>
          <Icon name="mdi:music" size="24" />
        </div>
        <div class="p-4">
          <ul class="list-disc ml-8">
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">The Woman I Love (Jason Mraz)</span>
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
                <span class="mr-2 my-1">If You Stay (Joseph Vincent)</span>
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
                <span class="mr-2 my-1">Out of my League (Stephen Speaks)</span>
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
                <span class="mr-2 my-1">Rainbow (South Border)</span>
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
                <span class="mr-2 my-1">So Close (Jon McLaughlin)</span>
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
    <section class="my-2 grid md:grid-cols-3 gap-2 w-full">
      <section
        class="group bg-slate-100 rounded-lg transition hover:bg-slate-200 duration-500"
      >
        <div
          class="flex justify-center items-center font-medium bg-slate-200 py-3"
        >
          <span class="mx-2">My favorite foods</span>
          <Icon name="dashicons:food" size="24" />
        </div>
        <div class="p-4">
          <ul class="list-disc ml-8">
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Lasagna</span>
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
                <span class="mr-2 my-1">Pizza</span>
                <span class="hidden group-hover:inline">
                  <Icon name="emojione:pizza" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Carbonara</span>
                <span class="hidden group-hover:inline">
                  <Icon name="mdi:pasta" size="24" color="#94a3b8" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Mom's Cooking</span>
                <span class="hidden group-hover:inline">
                  <Icon name="streamline-emojis:family-woman-boy-2" size="24" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section
        class="group bg-slate-100 rounded-lg transition hover:bg-slate-200 duration-500"
      >
        <div
          class="flex justify-center items-center font-medium bg-slate-200 py-3"
        >
          <span class="mx-2">Tech stack</span>
          <Icon name="fa6-solid:computer" size="24" />
        </div>
        <div class="p-4">
          <ul class="list-disc ml-8 mt-2">
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Vue</span>
                <span class="hidden group-hover:inline">
                  <Icon name="logos:vue" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Python</span>
                <span class="hidden group-hover:inline">
                  <Icon name="logos:python" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">PostgreSQL</span>
                <span class="hidden group-hover:inline">
                  <Icon name="logos:postgresql" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Docker</span>
                <span class="hidden group-hover:inline">
                  <Icon name="logos:docker-icon" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">AWS</span>
                <span class="hidden group-hover:inline">
                  <Icon name="logos:aws" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">GitLab</span>
                <span class="hidden group-hover:inline">
                  <Icon name="logos:gitlab" size="24" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section
        class="group bg-slate-100 rounded-lg transition hover:bg-slate-200 duration-500"
      >
        <div
          class="flex justify-center items-center font-medium bg-slate-200 py-3"
        >
          <span class="mx-2">Outdoor and indoor games</span>
          <Icon name="ic:twotone-sports-kabaddi" size="24" />
        </div>
        <div class="p-4">
          <ul class="list-disc ml-8 mt-2">
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Basketball</span>
                <span class="hidden group-hover:inline">
                  <Icon name="fluent-emoji:basketball" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Perdigana (Reverse Checkers)</span>
                <span class="hidden group-hover:inline">
                  <Icon name="bxs:chess" size="24" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <section class="my-2 grid md:grid-cols-2 gap-2 w-full">
      <section
        class="group bg-slate-100 rounded-lg transition hover:bg-slate-200 duration-500"
      >
        <div
          class="flex justify-center items-center font-medium bg-slate-200 py-3"
        >
          <span class="mx-2">Desktop and mobile games</span>
          <Icon name="fa6-solid:computer" size="24" />
        </div>
        <div class="p-4">
          <ul class="list-disc ml-8 mt-2">
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Dota 2</span>
                <span class="hidden group-hover:inline">
                  <Icon name="flat-color-icons:steam" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Clash of Clans</span>
                <span class="hidden group-hover:inline">
                  <Icon name="arcticons:clash-of-clans" size="24" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section
        class="group bg-slate-100 rounded-lg transition hover:bg-slate-200 duration-500"
      >
        <div
          class="flex justify-center items-center font-medium bg-slate-200 py-3"
        >
          <span class="mx-2">Favorite anime series</span>
          <Icon name="solar:tv-bold" size="24" />
        </div>
        <div class="p-4">
          <ul class="list-disc ml-8 mt-2">
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Bleach</span>
                <span class="hidden group-hover:inline">
                  <Icon name="noto:crossed-swords" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">One Punch Man</span>
                <span class="hidden group-hover:inline">
                  <Icon name="game-icons:punch" size="24" />
                </span>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mr-2 my-1">Kuroko's Basketball</span>
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
