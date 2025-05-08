<template>
  <section class="rounded-xl p-5" :class="loaded && 'bg-white bg-opacity-80'">
    <div class="text-lg flex items-center leading-[2] text-justify">
      I really enjoy sci-fi movies, especially ones with dystopian or
      apocalyptic stories because they’re exciting and make you think. Knowing
      (2009) is one of my favorites because of its mix of mystery, disaster, and
      deeper themes that feel connected to God or angels. I’ve embedded the
      trailer below if you want to check it out.
    </div>
    <div class="mt-8">
      <div
        v-if="!loaded"
        class="flex justify-center items-center"
        style="margin-top: 120px"
      >
        <Loading />
      </div>
      <div :class="['video-frame', { loaded: loaded }]">
        <iframe
          style="border-radius: 12px"
          width="100%"
          height="300"
          class="mx-auto"
          src="https://www.youtube.com/embed/C2zSFElhgE0?si=eqzmPqDecSzpbd9A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          @load="loaded = true"
        ></iframe>
      </div>
      <div class="mt-2 text-sm text-gray-500 italic text-center">
        Knowing (2009) Trailer
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Loading from "@/components/commons/Loading.vue";

const loaded = ref(false);
</script>
<style scoped>
.video-frame {
  opacity: 0;
  transition: opacity 1s ease;
}

.video-frame.loaded {
  opacity: 1;
}
</style>
