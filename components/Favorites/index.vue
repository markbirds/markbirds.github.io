<template>
  <div class="bg-food py-8">
    <section class="grid grid-cols-2 gap-4 mx-auto p-16 rounded-lg">
      <div class="w-[80%] ml-auto">
        <Divider>
          <template #title>
            <span
              class="flex items-center bg-white bg-opacity-60 p-2 rounded-xl"
            >
              <span class="mr-2">My Favorites </span>
              <Icon name="twemoji:red-heart" />
            </span>
          </template>
        </Divider>
        <section class="min-h-[700px]">
          <keep-alive>
            <Movies v-show="index === 0" />
          </keep-alive>
          <keep-alive>
            <Songs v-show="index === 1" />
          </keep-alive>
          <keep-alive>
            <Foods v-show="index === 2" />
          </keep-alive>
          <keep-alive>
            <Anime v-show="index === 3" />
          </keep-alive>
        </section>
      </div>
      <div class="flex items-center justify-center">
        <Swiper @change="change" />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import Divider from "@/components/commons/Divider.vue";
import Swiper from "@/components/Favorites/Swiper/index.vue";
import Movies from "@/components/Favorites/Movies.vue";
import Songs from "@/components/Favorites/Songs.vue";
import Foods from "@/components/Favorites/Foods.vue";
import Anime from "@/components/Favorites/Anime.vue";

const index = ref(0);

const change = (activeIndex: number) => {
  index.value = activeIndex;
};
</script>
