<template>
  <ClientOnly>
    <div class="relative">
      <swiper-container
        ref="containerRef"
        class="swiper-container bg-white/50"
        :init="false"
      >
        <swiper-slide
          v-for="(image, index) in images"
          :key="index"
          class="swiper-slide"
        >
          <img :src="image" :alt="`pic-${index + 1}`" />
        </swiper-slide>
      </swiper-container>
      <div class="mt-5 flex justify-center gap-4">
        <div class="swiper-button-prev">
          <Icon
            name="material-symbols:arrow-left-alt-rounded"
            size="36"
            class="text-primary"
          />
        </div>
        <div class="swiper-button-next">
          <Icon
            name="material-symbols:arrow-right-alt-rounded"
            size="36"
            class="text-primary"
          />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script setup lang="ts">
const containerRef = ref(null);

const images = [
  "/images/gallery/pic1.jpeg",
  "/images/gallery/pic2.jpeg",
  "/images/gallery/pic3.jpg",
  "/images/gallery/pic4.jpeg",
  "/images/gallery/pic5.jpeg",
  "/images/gallery/pic6.jpeg",
  "/images/gallery/pic7.jpg",
  "/images/gallery/pic8.jpg",
  "/images/gallery/pic9.jpeg",
  "/images/gallery/pic10.jpeg",
  "/images/gallery/pic11.jpeg",
  "/images/gallery/pic12.jpeg",
  "/images/gallery/pic13.jpg",
  "/images/gallery/pic14.jpeg",
  "/images/gallery/pic15.jpg",
  "/images/gallery/pic16.jpg",
  "/images/gallery/pic17.jpeg",
  "/images/gallery/pic18.JPG",
];

useSwiper(containerRef, {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grid: {
    fill: "row",
    rows: 1,
  },
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
    },
    768: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
    520: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
    },
  },
});
</script>

<style scoped>
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
</style>
