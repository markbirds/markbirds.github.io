<template>
  <section class="mw-full md:w-[80%] lg:w-[60%] mx-4 md:mx-auto md:mt-24 my-16 text-gray-600 cursor-default">
    <div class="text-xl bg-gradient-to-r from-slate-600 text-slate-100 rounded-lg py-3 px-4 font-bold uppercase">
      Gallery
    </div>
    <GallerySwiper :images="images"/>
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
]
</script>
