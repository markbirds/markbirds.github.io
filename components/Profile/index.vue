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
            alt="shuffled-image-1"
            loading="eager"
            decoding="async"
          />
          <img
            class="mt-1.5 max-w-[200px] rotate-[0.3rad] rounded-full"
            :src="shuffledImages[1]"
            alt="shuffled-image-2"
            loading="eager"
            decoding="async"
          />
        </div>
        <div>
          <img
            class="w-full max-w-[300px] rounded-full md:mt-20 md:-ml-8 md:rotate-[0.3rad]"
            :src="shuffledImages[2]"
            alt="shuffled-image-3"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>
      <section class="content-centered-550">
        <section
          class="mt-16 flex flex-col items-start justify-center lg:ml-10"
        >
          <div class="text-center text-3xl lg:text-left">
            <span id="typed-text"></span>
            <span v-if="showDetails">
              <Icon name="twemoji:pizza" size="28" />
              <Icon v-if="evenSecond" name="twemoji:winking-face" size="28" />
              <Icon v-else name="twemoji:slightly-smiling-face" size="28" />
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
                v-for="link in sectionLinks"
                :key="link.to"
                :to="link.to"
                :text="link.text"
                :icon="link.icon"
              />
            </div>
            <div class="mt-8">
              <a
                class="btn-primary"
                href="/collaborate-with-me"
                target="_blank"
              >
                <span class="mr-2">Let's collaborate!</span>
                <Icon name="streamline:collaborations-idea-solid" size="20" />
              </a>
            </div>
          </section>
        </section>
      </section>
    </section>
  </div>
</template>
<script setup>
import Typed from "typed.js";
import SectionLink from "@/components/Profile/SectionLink.vue";

const showDetails = ref(false);
const evenSecond = ref(true);

const shuffledImages = ref([
  "/images/profile/me1.webp",
  "/images/profile/me3.webp",
  "/images/profile/me2.webp",
]);

const sectionLinks = [
  {
    to: "#about-me",
    text: "A Little Bit About Me",
    icon: "twemoji:see-no-evil-monkey",
  },
  {
    to: "#favorites",
    text: "My Favorites",
    icon: "twemoji:red-heart",
  },
  {
    to: "#sports-and-games",
    text: "Sports and Games",
    icon: "twemoji:basketball",
  },
  {
    to: "#gallery",
    text: "Gallery",
    icon: "twemoji:framed-picture",
  },
  {
    to: "#follow-me",
    text: "Follow Me",
    icon: "twemoji:mobile-phone",
  },
];

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

onMounted(() => {
  new Typed("#typed-text", {
    strings: [
      `<span>Hi, I'm Owen! I love pizza!</span>`,
      `<span>Hi, I'm Owen! I love <span class="line-through">pizza!</span> building apps. </span>`,
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    smartBackspace: true,
    showCursor: false,
    cursorChar: "|",
    onComplete: () => {
      showDetails.value = true;
    },
  });

  setInterval(updateImages, 3000);

  setInterval(() => {
    const now = new Date().getSeconds();
    evenSecond.value = now % 2 === 0;
  }, 1000);
});
</script>
