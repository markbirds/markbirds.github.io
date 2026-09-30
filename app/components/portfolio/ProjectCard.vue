<!-- One app or game as a card: cover, title, tagline, tags, and its links -->
<template>
  <article
    class="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200/80 bg-white/80 transition-shadow hover:shadow-md"
  >
    <NuxtLink
      :to="projectPath(project)"
      class="block overflow-hidden border-b border-gray-200/80 bg-white"
      tabindex="-1"
      aria-hidden="true"
    >
      <img
        :src="coverImage(project)"
        :alt="`${project.title} screenshot`"
        width="960"
        height="600"
        class="aspect-[16/10] h-auto w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        loading="lazy"
      />
    </NuxtLink>

    <div class="flex flex-1 flex-col p-5">
      <div class="flex items-center justify-between gap-3">
        <h3 class="text-xl font-medium">{{ project.title }}</h3>
        <NuxtLink
          :to="projectPath(project)"
          class="text-primary inline-flex shrink-0 items-center gap-1 text-sm font-medium hover:underline"
          :aria-label="`${project.title} details`"
        >
          Details
          <Icon name="material-symbols:arrow-right-alt-rounded" size="20" />
        </NuxtLink>
      </div>
      <p class="mt-1 text-sm text-gray-500">
        {{ project.kind === "game" ? "Game" : "App" }}
        <template v-if="project.period">· {{ project.period }}</template>
      </p>
      <p class="mt-3 text-base leading-relaxed">{{ project.tagline }}</p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="tech in project.tech" :key="tech" class="badge">
          {{ tech }}
        </span>
      </div>

      <div class="mt-auto flex flex-wrap items-center gap-3 pt-5">
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
        <span v-else class="text-sm text-gray-400">Coming soon</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from "~~/shared/projects";
import { coverImage, projectPath } from "~~/shared/projects";

defineProps<{
  project: Project;
}>();
</script>
