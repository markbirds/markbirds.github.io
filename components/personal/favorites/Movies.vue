<template>
  <section>
    <SectionDescription>
      I really enjoy sci-fi movies, especially those with dystopian or
      apocalyptic themes. I like how different the settings are from everyday
      life, and they make me imagine what it would be like to live in those
      worlds. Knowing (2009) is one of my favorites because of how well the
      story is written, and I find the connection to higher beings beyond humans
      really fascinating. I've embedded the trailer below if you want to check
      it out.
    </SectionDescription>
    <div class="relative my-8">
      <div class="top-0 left-0 h-full w-full lg:absolute">
        <!-- Thumbnail -->
        <div
          v-if="!isPlaying"
          class="relative cursor-pointer"
          @click="isPlaying = true"
        >
          <img
            :src="thumbnailUrl"
            :alt="videoTitle"
            class="w-full rounded-lg"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <!-- YouTube iframe -->
        <iframe
          v-else
          loading="lazy"
          width="100%"
          height="350"
          :src="embedUrl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="media-description">Knowing (2009) Trailer</div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SectionDescription from "@/components/commons/SectionDescription.vue";

const videoId = "C2zSFElhgE0";
const videoTitle = "YouTube video player";
const isPlaying = ref(false);

const thumbnailUrl = computed(
  () => `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
);

const embedUrl = computed(
  () => `https://www.youtube.com/embed/${videoId}?autoplay=1`,
);
</script>
