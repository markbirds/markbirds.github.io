<template>
  <div id="gallery" class="bg-temple py-8">
    <section class="content-centered-1187 px-4 sm:px-8">
      <Divider>
        <template #title>
          <span class="bg-soft-white flex items-center p-2">
            <span class="mr-2 font-medium">Gallery </span>
            <Icon
              name="twemoji:framed-picture"
              size="24"
              class="animate-wiggle"
            />
          </span>
        </template>
      </Divider>
      <div class="description content-centered-800">
        Here’s a bunch of photos — my family, friends, my girlfriend, and some
        random pictures I thought looked cool. It’s a mix of sweet moments,
        funny memories, and little things that made me smile. Not the most
        organized gallery, but that’s what makes it fun.
      </div>
      <div class="content-padding-x mx-auto mt-5">
        <Swiper />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import Divider from "@/components/commons/Divider.vue";
import Swiper from "@/components/Gallery/Swiper.vue";
</script>
