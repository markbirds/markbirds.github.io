<template>
  <div id="about-me" class="bg-topography py-8 sm:py-16">
    <section class="grid-lg-cols-2 section-container">
      <div class="content-centered-550">
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
        <SectionDescription>
          Helloooooo! I'm Owen, a <small><q>cute</q></small> software developer
          with a passion for building apps. I mostly work on backend and
          web-based applications, but I can also build mobile and desktop apps.
          Outside of software development, I'm interested in learning more about
          blockchain and cybersecurity. Right now, my goal is to start a
          business, preferably in food or something related to software
          development.
        </SectionDescription>
      </div>
      <div class="content-centered-550">
        <img
          class="w-full rounded-xl"
          src="/images/about-me.webp"
          alt="about-me"
          loading="lazy"
          decoding="async"
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
import SectionDescription from "@/components/commons/SectionDescription.vue";
</script>
