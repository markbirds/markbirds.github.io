<!-- One app or game in full: screenshots, overview, stack, architecture and links -->
<template>
  <div class="min-h-screen bg-white pt-8 pb-16">
    <section class="section-container content-centered-1000">
      <NuxtLink
        to="/apps"
        class="text-primary inline-flex items-center gap-1 font-medium hover:underline"
      >
        <Icon name="material-symbols:arrow-left-alt-rounded" size="24" />
        All apps and games
      </NuxtLink>

      <header class="mt-6">
        <p class="text-sm text-gray-500">
          {{ project.kind === "game" ? "Game" : "App" }}
          <template v-if="project.period">· {{ project.period }}</template>
        </p>
        <h1 class="mt-1 text-3xl font-medium">{{ project.title }}</h1>
        <p class="mt-3 max-w-2xl text-lg leading-relaxed">
          {{ project.tagline }}
        </p>
        <div class="mt-6 flex flex-wrap items-center gap-3">
          <a
            v-if="project.liveUrl"
            class="btn-primary inline-flex items-center gap-1.5"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try it
            <Icon name="material-symbols:open-in-new" size="18" />
          </a>
          <a
            v-if="project.sourceUrl"
            class="btn-outline"
            :href="project.sourceUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>
          <span v-else class="text-sm text-gray-400">Source coming soon</span>
        </div>
      </header>

      <div class="mt-8">
        <button
          type="button"
          class="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-gray-200/80 shadow-sm"
          :aria-label="`Open ${project.title} screenshot 1 of ${project.screenshots.length}`"
          @click="openAt(0)"
        >
          <img
            :src="project.screenshots[0]"
            :srcset="heroSrcset"
            sizes="(min-width: 1064px) 944px, calc(100vw - 56px)"
            :alt="`${project.title} screenshot`"
            width="960"
            height="600"
            class="h-auto w-full"
          />
        </button>
        <div
          v-if="project.screenshots.length > 1"
          class="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6"
        >
          <button
            v-for="(src, i) in project.screenshots.slice(1)"
            :key="src"
            type="button"
            class="cursor-zoom-in overflow-hidden rounded-lg border border-gray-200/80 transition-shadow hover:shadow-md"
            :aria-label="`Open ${project.title} screenshot ${i + 2} of ${project.screenshots.length}`"
            @click="openAt(i + 1)"
          >
            <img
              :src="cardImage(src)"
              alt=""
              width="960"
              height="600"
              class="aspect-[16/10] h-auto w-full object-cover object-top"
              loading="lazy"
            />
          </button>
        </div>
      </div>

      <div class="mt-12 grid gap-10 md:grid-cols-[2fr_1fr]">
        <section>
          <h2 class="text-xl font-medium">About</h2>
          <p class="mt-3 text-base leading-relaxed">{{ project.overview }}</p>
        </section>
        <section>
          <h2 class="text-xl font-medium">Built with</h2>
          <div class="mt-3 flex flex-wrap gap-2">
            <span v-for="tech in project.tech" :key="tech" class="badge">
              {{ tech }}
            </span>
          </div>
        </section>
      </div>

      <section v-if="project.architecture" class="mt-12">
        <h2 class="text-xl font-medium">How it works</h2>
        <button
          type="button"
          class="mt-4 block w-full cursor-zoom-in overflow-hidden rounded-xl border border-gray-200/80 bg-white p-2"
          :aria-label="`Open the ${project.title} architecture diagram`"
          @click="openArchitecture(project)"
        >
          <img
            :src="project.architecture"
            :alt="`${project.title} architecture`"
            class="h-auto w-full"
            loading="lazy"
          />
        </button>
      </section>
    </section>

    <PortfolioProjectLightbox
      :images="images"
      :index="index"
      :title="title"
      @close="close"
      @next="next"
      @prev="prev"
    />
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~~/shared/projects";
import { cardImage, projectBySlug, projectPath } from "~~/shared/projects";
import { SITE_URL } from "~~/shared/seo";

const route = useRoute();
const found = projectBySlug(String(route.params.slug));
if (!found) {
  throw createError({
    statusCode: 404,
    statusMessage: "App not found",
    fatal: true,
  });
}
const project: Project = found;

// The card copy for 1x screens, the full screenshot for sharper ones.
const heroSrcset = computed(() => {
  const full = project.screenshots[0];
  return full ? `${cardImage(full)} 960w, ${full} 3584w` : undefined;
});

const { images, index, title, open, openArchitecture, close, next, prev } =
  useProjectLightbox();

// Opens the viewer on one screenshot, with the rest a swipe away.
function openAt(i: number) {
  open(project.screenshots, i, project.title);
}

usePageSeo({
  title: project.title,
  description: project.tagline,
  path: projectPath(project),
  ogImage: project.screenshots[0]
    ? `${SITE_URL}${project.screenshots[0]}`
    : undefined,
});
</script>
