<!-- Project cards + screenshot / architecture lightbox -->
<template>
  <div>
    <div class="grid gap-6 md:grid-cols-2 md:grid-rows-[repeat(6,auto)]">
      <article
        v-for="project in projects"
        :key="project.title"
        class="flex min-w-0 flex-col rounded-xl border border-gray-200/80 bg-white/80 p-5 md:row-span-6 md:grid md:grid-rows-subgrid md:gap-0"
      >
        <h3 class="text-xl font-medium">{{ project.title }}</h3>
        <p class="mt-1 min-h-5 text-sm text-gray-500">
          {{ project.period ?? "" }}
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
            class="mx-auto h-auto w-full max-w-full"
            loading="lazy"
          />
          <span
            v-if="project.screenshots.length > 1"
            class="absolute right-2 bottom-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white"
          >
            {{ project.screenshots.length }} screenshots
          </span>
        </button>

        <div class="mt-4 flex flex-wrap content-start items-start gap-2">
          <span v-for="tech in project.tech" :key="tech" class="badge">
            {{ tech }}
          </span>
        </div>

        <div class="flex flex-wrap items-center gap-x-4 gap-y-3 pt-5">
          <a
            v-if="project.sourceUrl"
            class="btn-primary inline-flex items-center justify-center"
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
          <span v-if="!project.sourceUrl" class="text-sm text-gray-400">
            Coming soon
          </span>
          <a
            v-if="project.liveUrl"
            class="text-primary ml-auto inline-flex items-center justify-center gap-1.5 px-1 py-2"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try it
            <Icon name="material-symbols:open-in-new" size="18" />
          </a>
        </div>
      </article>
    </div>

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

defineProps<{
  projects: Project[];
}>();

const {
  images,
  index,
  title,
  openGallery,
  openArchitecture,
  close,
  next,
  prev,
} = useProjectLightbox();
</script>
