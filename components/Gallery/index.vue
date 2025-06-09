<template>
  <div id="gallery" class="bg-temple py-8">
    <section class="section-container content-centered-1238">
      <Divider>
        <template #title>
          <span class="section-title">
            <span class="mr-2">Gallery </span>
            <Icon
              name="twemoji:framed-picture"
              size="24"
              class="animate-wiggle"
            />
          </span>
        </template>
      </Divider>
      <div class="content-centered-800">
        <SectionDescription>
          Here’s a bunch of photos — my family, friends, my girlfriend, and some
          random pictures I thought looked cool. It’s a mix of sweet moments,
          funny memories, and little things that made me smile. Not the most
          organized gallery, but that’s what makes it fun.
        </SectionDescription>
      </div>
      <div class="mx-auto mt-8">
        <Swiper />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import Divider from "@/components/commons/Divider.vue";
import SectionDescription from "@/components/commons/SectionDescription.vue";
import Swiper from "@/components/Gallery/Swiper.vue";
</script>
