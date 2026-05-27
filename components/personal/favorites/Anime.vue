<template>
  <section>
    <SectionDescription>
      These are some of the anime shows I really enjoyed watching. For Bleach,
      the soundtrack hits just as hard as the fights, so I added a few of my
      favorite tracks below.
    </SectionDescription>
    <section class="relative my-8">
      <section v-if="!allLoaded" class="top-0 left-0 h-full w-full lg:absolute">
        <div v-for="i in 3" :key="i" class="w-full rounded-md">
          <div class="flex animate-pulse space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-[152px] rounded-2xl bg-gray-100"></div>
            </div>
          </div>
        </div>
      </section>
      <div
        class="top-0 left-0 h-full w-full lg:absolute"
        :class="['iframe-wrapper', { loaded: allLoaded }]"
      >
        <iframe
          v-for="(track, index) in tracks"
          :key="index"
          style="border-radius: 12px"
          :src="track"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          class="my-2"
          @load="loadings[index] = true"
        ></iframe>
      </div>
    </section>
  </section>
</template>
<script setup lang="ts">
import SectionDescription from "@/components/commons/SectionDescription.vue";

const loadings = ref(Array(3).fill(false));

const allLoaded = computed(() => {
  return loadings.value.every((loading) => loading);
});

const tracks = [
  "https://open.spotify.com/embed/track/1FN5MIbMWhM0rRe8Y8RyX1?utm_source=generator",
  "https://open.spotify.com/embed/track/1wlXoXzUuwQP67zATlqt4E?utm_source=generator",
  "https://open.spotify.com/embed/track/3c391J2d1gnfL0qbjqbPA6?utm_source=generator",
];
</script>
<style scoped>
.iframe-wrapper {
  opacity: 0;
  transition: opacity 1s ease;
}

.iframe-wrapper.loaded {
  opacity: 1;
}
</style>
