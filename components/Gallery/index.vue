<template>
  <div class="bg-cogs py-24">
    <section class="w-[80%] mx-auto">
      <Divider>
        <template #title>
          <span class="flex items-center bg-white bg-opacity-60 p-2 rounded-xl">
            <span class="mr-2">Gallery </span>
            <Icon name="twemoji:framed-picture" />
          </span>
        </template>
      </Divider>
      <div>
        <Swiper />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import Divider from "@/components/commons/Divider.vue";
import Swiper from "@/components/Gallery/Swiper.vue";
</script>
