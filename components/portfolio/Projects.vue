<!-- Project grid — hero screenshot, gallery + architecture lightbox, source link -->
<template>
  <div id="projects" class="py-8 sm:py-16">
    <section class="section-container content-centered-1000">
      <h2 class="section-title mb-3 inline-flex px-0 text-2xl font-semibold">
        Projects
      </h2>
      <SectionDescription class="mb-4">
        A few things I've built or worked on:
      </SectionDescription>

      <div class="mt-8 grid gap-6 md:grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.title"
          class="flex flex-col rounded-xl border border-gray-200/80 bg-white/80 p-5"
        >
          <h3 class="text-xl font-semibold">{{ project.title }}</h3>
          <p v-if="project.period" class="mt-1 text-sm text-gray-500">
            {{ project.period }}
          </p>
          <p class="mt-2 text-base leading-relaxed">{{ project.overview }}</p>

          <button
            type="button"
            class="group relative mt-4 block w-full cursor-pointer overflow-hidden rounded-lg border border-gray-200/80 bg-white transition-shadow hover:shadow-md"
            :aria-label="`View ${project.title} screenshots`"
            @click="openGallery(project)"
          >
            <img
              :src="project.screenshots[0]"
              :alt="`${project.title} screenshot`"
              class="mx-auto w-full"
              loading="lazy"
            />
            <span
              v-if="project.screenshots.length > 1"
              class="absolute right-2 bottom-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white"
            >
              {{ project.screenshots.length }} screenshots
            </span>
          </button>

          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in project.tech" :key="tech" class="badge">
              {{ tech }}
            </span>
          </div>

          <div class="mt-auto flex flex-wrap items-center gap-3 pt-5">
            <a
              v-if="project.sourceUrl"
              class="btn-primary inline-flex items-center justify-center rounded-md px-4 py-2"
              :href="project.sourceUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code
            </a>
            <button
              v-if="project.architecture"
              type="button"
              class="border-primary text-primary inline-flex cursor-pointer items-center justify-center rounded-md border px-4 py-2"
              @click="openArchitecture(project)"
            >
              Architecture
            </button>
            <a
              v-else-if="project.liveUrl"
              class="border-primary text-primary inline-flex items-center justify-center rounded-md border px-4 py-2"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it
            </a>
            <span v-if="!project.sourceUrl" class="text-sm text-gray-400">
              Coming soon
            </span>
          </div>
        </article>
      </div>
    </section>

    <!-- Lightbox: shows the screenshot gallery or the architecture diagram -->
    <div
      v-if="lightboxImages.length"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      @click="closeLightbox"
    >
      <button
        type="button"
        class="absolute top-4 right-4 cursor-pointer text-white/80 hover:text-white"
        aria-label="Close"
        @click="closeLightbox"
      >
        <Icon name="material-symbols:close-rounded" size="32" />
      </button>

      <button
        v-if="lightboxImages.length > 1"
        type="button"
        class="absolute left-4 cursor-pointer text-white/80 hover:text-white"
        aria-label="Previous"
        @click.stop="prev"
      >
        <Icon name="material-symbols:arrow-left-alt-rounded" size="40" />
      </button>

      <img
        :src="lightboxImages[lightboxIndex]"
        :alt="`${lightboxTitle} view ${lightboxIndex + 1}`"
        class="max-h-[85vh] max-w-full rounded-lg bg-white"
        @click.stop
      />

      <button
        v-if="lightboxImages.length > 1"
        type="button"
        class="absolute right-4 cursor-pointer text-white/80 hover:text-white"
        aria-label="Next"
        @click.stop="next"
      >
        <Icon name="material-symbols:arrow-right-alt-rounded" size="40" />
      </button>

      <span
        v-if="lightboxImages.length > 1"
        class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-sm text-white"
      >
        {{ lightboxIndex + 1 }} / {{ lightboxImages.length }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionDescription from "@/components/commons/SectionDescription.vue";

type Project = {
  title: string;
  period?: string;
  overview: string;
  tech: string[];
  screenshots: string[];
  architecture?: string;
  liveUrl?: string;
  sourceUrl: string;
};

const projects: Project[] = [
  {
    title: "Spartner V2",
    period: "Sept 2021 · Rebuilt June 2026",
    overview:
      "Spartner helps BatStateU students find study partners. You set up a profile, get matched with someone who shares your interests, chat in real time, join study rooms, and stay connected with people you want to study with again. V2 is a ground-up rebuild of the app I first shipped in 2021, modernized for faster matching, real-time chat, and a smoother web experience.",
    tech: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Socket.IO",
      "PostgreSQL",
      "Redis",
      "TaskIQ",
      "Supabase",
      "Nuxt 4",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
    ],
    screenshots: [
      "/projects/spartner/2-home.png",
      "/projects/spartner/1-login.png",
      "/projects/spartner/3-rooms.png",
      "/projects/spartner/4-messages.png",
      "/projects/spartner/5-profile.png",
      "/projects/spartner/6-settings.png",
    ],
    architecture: "/projects/spartner-architecture.svg",
    sourceUrl: "https://gitlab.com/fowenpatrick/spartner",
  },
  {
    title: "Pinoy Henyo",
    period: "May 2026",
    overview:
      "Pinoy Henyo brings the classic Filipino word-guessing party game to the web. Play solo on one device or join a real-time room with a friend, pick a category, and race to guess the word before time runs out. I built it so my girlfriend and I would have something fun to play together.",
    tech: [
      "TypeScript",
      "Nuxt 4",
      "Nitro",
      "WebSockets",
      "SQLite",
      "Vue 3",
      "Pinia",
      "Nuxt UI",
      "Docker",
    ],
    screenshots: [
      "/projects/pinoy-henyo/1-home.png",
      "/projects/pinoy-henyo/2-play-with-friend-mode.png",
      "/projects/pinoy-henyo/3-play-with-friend-setup.png",
      "/projects/pinoy-henyo/4-play-with-friend-guess.png",
      "/projects/pinoy-henyo/5-play-with-friend-hint.png",
      "/projects/pinoy-henyo/6-play-with-friend-correct.png",
      "/projects/pinoy-henyo/7-play-with-friend-win.png",
      "/projects/pinoy-henyo/8-solo-mode.png",
    ],
    liveUrl: "https://pinoy-henyo.owenfalculan.com/",
    sourceUrl: "https://gitlab.com/pinoy-games/pinoy-henyo",
  },
  {
    title: "Project Three",
    overview:
      "Placeholder project. Swap in the real overview, screenshots, architecture diagram, and tech tags when it's ready.",
    tech: ["Python", "PostgreSQL", "Docker"],
    screenshots: ["/projects/screenshot-1.svg"],
    architecture: "/projects/placeholder.svg",
    sourceUrl: "",
  },
];

const lightboxImages = ref<string[]>([]);
const lightboxIndex = ref(0);
const lightboxTitle = ref("");

function openGallery(project: Project) {
  lightboxTitle.value = project.title;
  lightboxIndex.value = 0;
  lightboxImages.value = project.screenshots;
}

function openArchitecture(project: Project) {
  if (!project.architecture) return;
  lightboxTitle.value = `${project.title} architecture`;
  lightboxIndex.value = 0;
  lightboxImages.value = [project.architecture];
}

function closeLightbox() {
  lightboxImages.value = [];
}

function next() {
  lightboxIndex.value = (lightboxIndex.value + 1) % lightboxImages.value.length;
}

function prev() {
  lightboxIndex.value =
    (lightboxIndex.value - 1 + lightboxImages.value.length) %
    lightboxImages.value.length;
}

function onKeydown(event: KeyboardEvent) {
  if (!lightboxImages.value.length) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowRight") next();
  if (event.key === "ArrowLeft") prev();
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));
</script>
