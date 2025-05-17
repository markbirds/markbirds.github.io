<template>
  <div class="bg-jigsaw pb-16 pt-24 lg:pb-36">
    <section class="grid-lg-two container my-8">
      <section
        class="mx-auto flex w-full max-w-[700px] flex-1 items-center justify-center md:-rotate-[0.3rad] md:pl-24 lg:pl-12"
      >
        <div class="hidden md:block">
          <img
            class="max-w-[230px] rotate-[0.3rad] rounded-full"
            :src="shuffledImages[0]"
            alt="shuffled-image-1"
          />
          <img
            class="mt-1.5 max-w-[200px] rotate-[0.3rad] rounded-full"
            :src="shuffledImages[1]"
            alt="shuffled-image-2"
          />
        </div>
        <div>
          <img
            class="w-full max-w-[300px] rounded-full md:-ml-8 md:mt-20 md:rotate-[0.3rad]"
            :src="shuffledImages[2]"
            alt="shuffled-image-3"
          />
        </div>
      </section>
      <section class="content-centered-500">
        <section
          class="section-padding mt-16 flex flex-col items-start justify-center lg:ml-10"
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
  "/images/me1.jpeg",
  "/images/me3.jpeg",
  "/images/me2.jpeg",
]);

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
