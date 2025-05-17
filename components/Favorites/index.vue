<template>
  <div id="favorites" class="bg-food py-5 sm:py-12">
    <section class="grid-lg-two container">
      <div class="content-centered-500">
        <Divider>
          <template #title>
            <span class="title">
              <span class="mr-2">My Favorites </span>
              <Icon name="twemoji:red-heart" size="24" class="animate-wiggle" />
            </span>
          </template>
        </Divider>
        <Swiper v-if="mdView" effect="creative" @change="change" />
        <section class="min-h-[750px]">
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
      <Swiper v-if="!mdView" effect="cards" @change="change" />
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
const windowWidth = ref(0);

const change = (activeIndex: number) => {
  index.value = activeIndex;
};

const mdView = computed(() => windowWidth.value < 1024);

onMounted(() => {
  windowWidth.value = window.innerWidth;

  const updateWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  window.addEventListener("resize", updateWidth);

  onUnmounted(() => {
    window.removeEventListener("resize", updateWidth);
  });
});
</script>
