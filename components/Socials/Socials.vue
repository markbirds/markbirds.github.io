<template>
  <section
    class="mw-full mx-4 my-16 cursor-default text-gray-600 md:mx-auto md:mt-24 md:w-[80%] lg:w-[60%]"
  >
    <div
      class="rounded-lg bg-gradient-to-r from-slate-600 px-4 py-3 text-xl font-bold uppercase text-slate-100"
    >
      Follow me
    </div>
    <section class="my-2 grid w-full gap-2 text-center md:grid-cols-3">
      <section
        class="rounded-lg bg-slate-100 transition duration-500 hover:bg-slate-200"
      >
        <div
          class="flex items-center justify-center bg-slate-200 py-3 font-medium"
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
        class="rounded-lg bg-slate-100 transition duration-500 hover:bg-slate-200"
      >
        <div
          class="flex items-center justify-center bg-slate-200 py-3 font-medium"
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
        class="rounded-lg bg-slate-100 transition duration-500 hover:bg-slate-200"
      >
        <div
          class="flex items-center justify-center bg-slate-200 py-3 font-medium"
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
