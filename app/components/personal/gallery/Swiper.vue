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
          :data-photo-index="index"
        >
          <img
            :src="image"
            :alt="`pic-${index + 1}`"
            class="cursor-pointer"
            loading="lazy"
            decoding="async"
            @click="openPhoto(index)"
          />
        </swiper-slide>
      </swiper-container>
      <div class="mt-5 flex justify-center gap-4">
        <button
          type="button"
          class="gallery-nav-prev cursor-pointer"
          aria-label="Previous photos"
        >
          <Icon
            name="material-symbols:arrow-left-alt-rounded"
            size="36"
            class="text-primary"
          />
        </button>
        <button
          type="button"
          class="gallery-nav-next cursor-pointer"
          aria-label="Next photos"
        >
          <Icon
            name="material-symbols:arrow-right-alt-rounded"
            size="36"
            class="text-primary"
          />
        </button>
      </div>
    </div>
    <PortfolioProjectLightbox
      :images="lightboxImages"
      :index="lightboxIndex"
      :title="lightboxTitle"
      @close="closeLightbox"
      @next="next"
      @prev="prev"
    />
  </ClientOnly>
</template>
<script setup lang="ts">
const containerRef = ref(null);

const images = [
  "/images/gallery/pic1.webp",
  "/images/gallery/pic2.webp",
  "/images/gallery/pic3.webp",
  "/images/gallery/pic4.webp",
  "/images/gallery/pic5.webp",
  "/images/gallery/pic6.webp",
  "/images/gallery/pic7.webp",
  "/images/gallery/pic8.webp",
  "/images/gallery/pic9.webp",
  "/images/gallery/pic10.webp",
  "/images/gallery/pic11.webp",
  "/images/gallery/pic12.webp",
  "/images/gallery/pic13.webp",
  "/images/gallery/pic14.webp",
  "/images/gallery/pic15.webp",
  "/images/gallery/pic16.webp",
  "/images/gallery/pic17.webp",
  "/images/gallery/pic18.webp",
];

const {
  images: lightboxImages,
  index: lightboxIndex,
  title: lightboxTitle,
  open,
  close: closeLightbox,
  next,
  prev,
} = useProjectLightbox();

function openPhoto(startIndex: number) {
  open(images, startIndex, "Gallery");
}

useSwiper(containerRef, {
  slidesPerView: 1,
  navigation: {
    nextEl: ".gallery-nav-next",
    prevEl: ".gallery-nav-prev",
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
  on: {
    click(swiper) {
      const slide = swiper.clickedSlide as HTMLElement | undefined;
      if (!slide) return;
      const raw =
        slide.getAttribute("data-photo-index") ??
        slide.getAttribute("data-swiper-slide-index");
      const startIndex = Number(raw);
      if (!Number.isInteger(startIndex) || startIndex < 0) return;
      openPhoto(startIndex);
    },
  },
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

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none;
}
</style>
