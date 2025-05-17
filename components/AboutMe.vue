<template>
  <div id="about-me" class="bg-topography py-1 sm:py-8">
    <section class="grid-lg-two container my-8">
      <div class="content-centered-500 mt-3">
        <Divider>
          <template #title>
            <span class="title">
              <span class="mr-2">A Little Bit About Me </span>
              <Icon
                name="twemoji:see-no-evil-monkey"
                size="24"
                class="animate-wiggle"
              />
            </span>
          </template>
        </Divider>
        <div class="description">
          Helloooooo! I'm Owen, a cute software developer with a passion for
          building apps. I mostly work on backend and web-based applications,
          but I can also build mobile and desktop apps. Outside of software
          development, I'm interested in learning more about blockchain and
          cybersecurity. Right now, my goal is to start a business, preferably
          in food or something related to software development.
        </div>
      </div>
      <div class="content-centered-500 content-padding-x">
        <img
          class="w-full rounded-xl"
          src="~assets/images/about-me.jpeg"
          alt="about-me"
        />
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
