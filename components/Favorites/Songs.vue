<template>
  <section class="p-3">
    <div class="text-description bg-soft-white">
      These are some of my favorite songs. I’ve embedded them here from Spotify
      so you can listen right away.
    </div>
    <section class="bg-soft-white my-8">
      <div
        v-if="!allLoaded"
        class="flex items-center justify-center"
        style="margin-top: 200px"
      >
        <Loading />
      </div>
      <div :class="['iframe-wrapper', { loaded: allLoaded }]">
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/track/6Vn8lTVMjILXQCjZUXS8n4?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          class="my-2"
          @load="firstLoaded = true"
        ></iframe>
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/track/2uImdLlBYr2PeGdzmWIYwJ?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          class="my-2"
          @load="secondLoaded = true"
        ></iframe>
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/track/73Nw51XTNstlk3Wu1K26cB?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          class="my-2"
          @load="thirdLoaded = true"
        ></iframe>
      </div>
    </section>
  </section>
</template>
<script setup lang="ts">
import Loading from "@/components/commons/Loading.vue";

const firstLoaded = ref(false);
const secondLoaded = ref(false);
const thirdLoaded = ref(false);

const allLoaded = computed(() => {
  return firstLoaded.value && secondLoaded.value && thirdLoaded.value;
});
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
