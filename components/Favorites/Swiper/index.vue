<template>
  <div class="flex flex-col items-center justify-center p-3">
    <ClientOnly>
      <swiper-container
        ref="containerRef"
        :init="false"
        class="swiper-container"
      >
        <swiper-slide class="swiper-slide slider-content-1">
          <div class="slider-content">
            <Movies />
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide slider-content-2">
          <div class="slider-content">
            <Songs />
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide slider-content-3">
          <div class="slider-content">
            <Foods />
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide slider-content-4">
          <div class="slider-content">
            <Anime />
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <div class="media-description">Swipe to see more!</div>
  </div>
</template>
<script setup lang="ts">
import Movies from "@/components/Favorites/Swiper/Movies.vue";
import Songs from "@/components/Favorites/Swiper/Songs.vue";
import Foods from "@/components/Favorites/Swiper/Foods.vue";
import Anime from "@/components/Favorites/Swiper/Anime.vue";

const emit = defineEmits(["change"]);

const containerRef = ref(null);

interface Props {
  effect: "cards" | "creative";
}
const props = defineProps<Props>();

useSwiper(containerRef, {
  effect: props.effect,
  grabCursor: true,
  pagination: {
    dynamicBullets: true,
  },
  rewind: true,
  on: {
    slideChange: (swiper) => {
      emit("change", swiper.activeIndex);
    },
  },
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
      shadow: true,
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
</script>

<style scoped>
.swiper-container {
  --swiper-theme-color: white;
  width: 100%;
  height: 580px;
}

@media (width > 560px) {
  .swiper-container {
    width: 470px;
    height: 580px;
  }
}

@media (width > 1023px) {
  .swiper-container {
    width: 310px;
    height: 580px;
  }
}

@media (width > 1280px) {
  .swiper-container {
    width: 400px;
    height: 600px;
  }
}

.swiper-slide {
  border-radius: 25px;
  width: fit-content;
  padding: 30px;
}

.slider-content {
  border-radius: 25px;
  height: 100%;
  color: white;
}

.slider-content-1 {
  background: linear-gradient(to bottom right, #1d3557, #457b9d);
}

.slider-content-2 {
  background: linear-gradient(to bottom right, #0a3d2c, #1db954);
}

.slider-content-3 {
  background: linear-gradient(to bottom right, #6f1d1b, #e63946);
}

.slider-content-4 {
  background: linear-gradient(to bottom right, #8b6f00, #d9a21b);
}
</style>
