<!-- Personal bio + casual photo -->
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
          <span>
            Helloooooo! I'm Owen. I mostly write code for a living, backend and
            web stuff, sometimes mobile too. Outside of that I like to run,
            hike, and play basketball with friends when I get the chance. This
            is the chill version of my site. If you wanted the work/portfolio
            version instead, switch to <strong>Portfolio</strong> up top.
          </span>
        </SectionDescription>
      </div>
      <div class="content-centered-550">
        <img
          class="w-full rounded-xl"
          src="/images/about-me.webp"
          alt="about-me"
          fetchpriority="high"
          loading="eager"
          decoding="async"
        />
        <div class="media-description">
          Me and my source of stress, taken while building this website (May 2,
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
