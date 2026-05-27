<!-- Personal hero: rotating profile photos + typed greeting + section nav -->
<template>
  <div class="bg-jigsaw pt-24 pb-16 lg:pb-36">
    <section class="grid-lg-cols-2 section-container my-8">
      <section
        class="flex-center content-centered-600 flex-1 md:-rotate-[0.3rad] md:pl-24 lg:pl-12"
      >
        <div class="hidden md:block">
          <img
            class="max-w-[230px] rotate-[0.3rad] rounded-full"
            :src="shuffledImages[0]"
            alt="Owen Patrick Falculan"
            fetchpriority="high"
            loading="eager"
            decoding="async"
          />
          <img
            class="mt-1.5 max-w-[200px] rotate-[0.3rad] rounded-full"
            :src="shuffledImages[1]"
            alt="Owen Patrick Falculan"
            fetchpriority="high"
            loading="eager"
            decoding="async"
          />
        </div>
        <div>
          <img
            class="w-full max-w-[300px] rounded-full md:mt-20 md:-ml-8 md:rotate-[0.3rad]"
            :src="shuffledImages[2]"
            alt="Owen Patrick Falculan"
            fetchpriority="high"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      <section class="content-centered-600">
        <section
          class="mt-16 flex flex-col items-start justify-center lg:ml-10"
        >
          <h1 class="sr-only">Owen Patrick Falculan</h1>

          <div class="text-center text-3xl lg:text-left">
            <span id="typed-text" :key="typedKey"></span>
            <span v-if="showDetails">
              <Icon name="twemoji:person-running" size="28" class="ml-0.5" />
              <Icon name="twemoji:mountain" size="28" class="ml-0.5" />
            </span>
          </div>

          <section v-if="showDetails" class="mx-auto text-lg lg:mx-0">
            <div class="mt-5 flex items-center">
              <span class="mr-2 text-xl">Check out what's here</span>
              <Icon
                name="twemoji:backhand-index-pointing-down-medium-light-skin-tone"
                class="animate-bounce"
                size="24"
              />
            </div>
            <div class="mt-5">
              <SectionLink
                to="#about-me"
                text="A Little Bit About Me"
                icon="twemoji:see-no-evil-monkey"
              />
              <SectionLink
                to="#favorites"
                text="My Favorites"
                icon="twemoji:red-heart"
              />
              <SectionLink
                to="#sports-and-games"
                text="Sports and Games"
                icon="twemoji:basketball"
              />
              <SectionLink
                to="#gallery"
                text="Gallery"
                icon="twemoji:framed-picture"
              />
              <SectionLink
                to="#follow-me"
                text="Follow Me"
                icon="twemoji:mobile-phone"
              />
            </div>
          </section>
        </section>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import Typed from "typed.js";
import SectionLink from "@/components/personal/profile/SectionLink.vue";

// Typed.js copy — shown in #typed-text
const typedStrings = [`<span>Hi, I'm Owen! I run and hike for fun!</span>`];

const showDetails = ref(false);
const typedKey = ref(0);
let typedInstance: Typed | null = null;
let imageInterval: ReturnType<typeof setInterval> | null = null;

const shuffledImages = ref([
  "/images/profile/me1.webp",
  "/images/profile/me3.webp",
  "/images/profile/me2.webp",
]);

// Rotate which photo appears in each slot every 3s
function shuffle() {
  const copy = [];
  copy[0] = shuffledImages.value[1];
  copy[1] = shuffledImages.value[2];
  copy[2] = shuffledImages.value[0];
  return copy;
}

function updateImages() {
  shuffledImages.value = shuffle().slice(0, 3);
}

function destroyTyped() {
  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = null;
  }
}

function initTyped() {
  destroyTyped();
  showDetails.value = false;

  const el = document.getElementById("typed-text");
  if (!el) return;

  typedInstance = new Typed("#typed-text", {
    strings: typedStrings,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    smartBackspace: true,
    showCursor: false,
    cursorChar: "|",
    onComplete: () => {
      // Reveal section links after typing finishes
      showDetails.value = true;
    },
  });
}

function startImageRotation() {
  stopImageRotation();
  imageInterval = setInterval(updateImages, 3000);
}

function stopImageRotation() {
  if (imageInterval) {
    clearInterval(imageInterval);
    imageInterval = null;
  }
}

onMounted(() => {
  initTyped();
  startImageRotation();
});

onBeforeUnmount(() => {
  destroyTyped();
  stopImageRotation();
});
</script>
