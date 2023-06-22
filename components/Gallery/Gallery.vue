<template>
  <section
    class="mw-full mx-4 my-16 cursor-default text-gray-600 md:mx-auto md:mt-24 md:w-[80%] lg:w-[60%]"
  >
    <div
      class="rounded-lg bg-gradient-to-r from-slate-600 px-4 py-3 text-xl font-bold uppercase text-slate-100"
    >
      Gallery
    </div>
    <GallerySwiper :images="images" />
  </section>
</template>
<script setup>
const images = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
  "/gallery/gallery5.jpg",
  "/gallery/gallery6.jpg",
  "/gallery/gallery7.jpg",
  "/gallery/gallery8.jpg",
];
</script>
