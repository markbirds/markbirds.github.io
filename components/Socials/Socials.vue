<template>
  <section
    class="mw-full md:w-[80%] lg:w-[60%] mx-4 md:mx-auto md:mt-24 my-16 text-gray-600 cursor-default"
  >
    <div
      class="text-xl bg-gradient-to-r from-slate-600 text-slate-100 rounded-lg py-3 px-4 font-bold uppercase"
    >
      Follow me
    </div>
    <section class="my-2 grid md:grid-cols-3 gap-2 w-full text-center">
      <section
        class="bg-slate-100 rounded-lg transition hover:bg-slate-200 duration-500"
      >
        <div
          class="flex justify-center items-center font-medium bg-slate-200 py-3"
        >
          <span class="mx-1">Instagram</span>
          <Icon name="ri:instagram-fill" size="24" />
        </div>
        <div class="p-4">
          <a href="https://www.instagram.com/owenfalculan/" target="_blank">
            @owenfalculan
          </a>
        </div>
      </section>
      <section
        class="bg-slate-100 rounded-lg transition hover:bg-slate-200 duration-500"
      >
        <div
          class="flex justify-center items-center font-medium bg-slate-200 py-3"
        >
          <span class="mx-1">LinkedIn</span>
          <Icon name="mdi:linkedin" size="24" />
        </div>
        <div class="p-4">
          <a
            href="https://www.linkedin.com/in/owen-patrick-falculan-4500b521a/"
            target="_blank"
          >
            Owen Patrick Falculan
          </a>
        </div>
      </section>
      <section
        class="bg-slate-100 rounded-lg transition hover:bg-slate-200 duration-500"
      >
        <div
          class="flex justify-center items-center font-medium bg-slate-200 py-3"
        >
          <span class="mx-1">GitHub</span>
          <Icon name="ri:github-fill" size="24" />
        </div>
        <div class="p-4">
          <a href="https://github.com/markbirds" target="_blank"> markbirds </a>
        </div>
      </section>
    </section>
  </section>
</template>
<script setup lang="ts"></script>
