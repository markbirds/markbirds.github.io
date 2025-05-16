<template>
  <div id="about-me" class="bg-topography py-1 sm:py-8">
    <section class="container my-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div class="mx-auto mt-3 max-w-[500px]">
        <Divider>
          <template #title>
            <span class="section-title">
              <span class="mr-2">A Little Bit About Me </span>
              <Icon
                name="twemoji:see-no-evil-monkey"
                size="24"
                class="animate-wiggle"
              />
            </span>
          </template>
        </Divider>
        <div class="section-description w-full">
          Helloooooo! I'm Owen, a cute software developer with a passion for
          building apps. I mostly work on backend and web-based applications,
          but I can also build mobile and desktop apps. Outside of software
          development, I'm interested in learning more about blockchain and
          cybersecurity. Right now, my goal is to start a business, preferably
          in food or something related to software development.
        </div>
      </div>
      <div class="mx-auto max-w-[500px] sm:mt-3">
        <div class="px-3 sm:px-0">
          <img
            class="w-full rounded-xl"
            src="~assets/images/about-me.jpeg"
            alt="about-me"
          />
        </div>
        <div class="media-description">
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
