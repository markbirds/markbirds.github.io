<template>
  <section>
    <SectionDescription>
      I really enjoy sci-fi movies, especially those with dystopian or
      apocalyptic themes. I like how different the settings are from everyday
      life, and they make me imagine what it would be like to live in those
      worlds. Knowing (2009) is one of my favorites because of how well the
      story is written, and I find the connection to higher beings beyond humans
      really fascinating. I’ve embedded the trailer below if you want to check
      it out.
    </SectionDescription>
    <div class="relative my-8">
      <div class="top-0 left-0 h-full w-full lg:absolute">
        <iframe
          loading="lazy"
          style="border-radius: 12px"
          width="100%"
          height="350"
          class="mx-auto"
          src="https://www.youtube.com/embed/C2zSFElhgE0?si=eqzmPqDecSzpbd9A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div class="media-description">Knowing (2009) Trailer</div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SectionDescription from "@/components/commons/SectionDescription.vue";
</script>
