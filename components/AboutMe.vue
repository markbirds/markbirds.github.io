<template>
  <div class="bg-topography py-8">
    <section class="grid grid-cols-2 gap-4 mx-auto my-8 p-16 rounded-lg">
      <div class="w-[80%] ml-auto">
        <Divider>
          <template #title>
            <span
              class="flex items-center bg-white bg-opacity-60 p-2 rounded-xl"
            >
              <span class="mr-2">A Little Bit About Me </span>
              <Icon name="twemoji:see-no-evil-monkey" />
            </span>
          </template>
        </Divider>
        <div
          class="text-lg flex items-center leading-[2] text-center bg-white bg-opacity-60 p-5 rounded-xl"
        >
          Helloooooo! I'm Owen, a cute (according to my girlfriend) full-stack
          developer with a passion for building apps. I specialize in web
          development, but I also have experience creating mobile and desktop
          applications. My goal right now is to have a successful business and
          to travel the world with my loved ones.
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center w-[80%] mr-auto bg-white bg-opacity-60"
      >
        <div>
          <img
            class="max-w-[500px] rounded-xl"
            src="~assets/images/about-me.jpeg"
            alt="about-me"
          />
        </div>
        <div class="mt-2 text-sm text-gray-500 italic">
          Me and my source of stress — taken while building this website (May 2,
          2025).
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import Divider from "@/components/commons/Divider.vue";
</script>
