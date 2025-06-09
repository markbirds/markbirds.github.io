<template>
  <div id="favorites" class="bg-food py-8 sm:py-16">
    <section class="grid-lg-cols-2 section-container">
      <div class="content-centered-550">
        <Divider>
          <template #title>
            <span class="section-title">
              <span class="mr-2">My Favorites </span>
              <Icon name="twemoji:red-heart" size="24" class="animate-wiggle" />
            </span>
          </template>
        </Divider>
        <div class="my-8 block lg:hidden">
          <Swiper effect="creative" @change="change" />
        </div>
        <section>
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
      <div class="my-8 hidden lg:block">
        <Swiper effect="cards" @change="change" />
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
