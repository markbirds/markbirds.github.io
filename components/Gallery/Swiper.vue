<template>
  <ClientOnly>
    <div class="relative">
      <swiper-container
        ref="containerRef"
        class="swiper-container bg-white bg-opacity-60 px-10 py-3"
        :init="false"
      >
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic1.jpeg" alt="pic1" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic2.jpeg" alt="pic2" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic3.jpg" alt="pic3" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic4.jpeg" alt="pic4" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic5.jpeg" alt="pic5" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic6.jpeg" alt="pic6" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic7.jpg" alt="pic7" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic8.jpg" alt="pic8" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic9.jpeg" alt="pic9" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic10.jpeg" alt="pic10" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic11.jpeg" alt="pic11" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic12.jpeg" alt="pic12" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic13.jpg" alt="pic13" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~/assets/images/gallery/pic14.jpeg" alt="pic14" />
        </swiper-slide>
      </swiper-container>
      <div class="flex justify-center gap-4">
        <div class="swiper-button-prev">
          <Icon
            name="material-symbols:arrow-left-alt-rounded"
            size="36"
            :class="progressValue > 0 ? 'text-primary' : 'text-secondary'"
          />
        </div>
        <div class="swiper-button-next">
          <Icon
            name="material-symbols:arrow-right-alt-rounded"
            size="36"
            :class="progressValue < 1 ? 'text-primary' : 'text-secondary'"
          />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script setup lang="ts">
const containerRef = ref(null);
const progressValue = ref(0);

useSwiper(containerRef, {
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grid: {
    fill: "row",
    rows: 2,
  },
  spaceBetween: 10,
  on: {
    progress: (_, progress) => {
      progressValue.value = progress;
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
