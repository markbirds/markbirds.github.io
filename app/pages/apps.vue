<!-- Apps catalog: compact list, search, and Apps/Games filter -->
<template>
  <div class="min-h-screen bg-white pt-8 pb-16">
    <section class="section-container content-centered-1000">
      <NuxtLink
        to="/"
        class="text-primary inline-flex items-center"
        aria-label="Back to home"
      >
        <Icon name="material-symbols:arrow-left-alt-rounded" size="32" />
      </NuxtLink>

      <h1 class="mt-2 text-2xl font-medium">Apps & Games</h1>
      <p class="mt-2 text-base">Search by name, or filter apps and games.</p>

      <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <label class="sr-only" for="apps-search">Search apps and games</label>
        <input
          id="apps-search"
          v-model="query"
          type="search"
          placeholder="Search"
          class="w-full rounded-md border border-gray-200 px-4 py-2 sm:flex-1"
        />

        <div
          class="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter apps and games"
        >
          <button
            v-for="option in kindOptions"
            :key="option.value"
            type="button"
            class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
            :class="
              kind === option.value
                ? 'bg-primary text-white'
                : 'border-primary text-primary border bg-white'
            "
            :aria-pressed="kind === option.value"
            @click="kind = option.value"
          >
            {{ option.label }}
          </button>
        </div>
      </div>

      <p v-if="!filtered.length" class="mt-10 text-base">
        Nothing matches. Try another search.
      </p>
      <ul v-else class="mt-8 divide-y divide-gray-200">
        <li v-for="project in filtered" :key="project.title" class="py-5">
          <div class="flex gap-4">
            <button
              v-if="project.screenshots[0]"
              type="button"
              class="h-16 w-24 shrink-0 cursor-pointer overflow-hidden rounded-md border border-gray-200"
              :aria-label="`View ${project.title} screenshots`"
              @click="openGallery(project)"
            >
              <img
                :src="project.screenshots[0]"
                :alt="`${project.title} screenshot`"
                class="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </button>
            <div class="min-w-0 flex-1">
              <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h2 class="text-lg font-medium">{{ project.title }}</h2>
                <span class="text-sm text-gray-500">
                  {{ project.kind === "game" ? "Game" : "App" }}
                </span>
                <span v-if="project.period" class="text-sm text-gray-500">
                  {{ project.period }}
                </span>
              </div>
              <p class="mt-1 line-clamp-2 text-base leading-relaxed">
                {{ project.overview }}
              </p>
              <div class="mt-2 flex flex-wrap items-center gap-4 text-sm">
                <a
                  v-if="project.sourceUrl"
                  class="text-primary underline"
                  :href="project.sourceUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>
                <button
                  v-if="project.screenshots.length"
                  type="button"
                  class="text-primary cursor-pointer underline"
                  @click="openGallery(project)"
                >
                  Screenshots
                </button>
                <button
                  v-if="project.architecture"
                  type="button"
                  class="text-primary cursor-pointer underline"
                  @click="openArchitecture(project)"
                >
                  Architecture
                </button>
                <a
                  v-if="project.liveUrl"
                  class="text-primary ml-auto underline"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try it
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
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
import type { ProjectKind } from "~~/shared/projects";
import { PROJECTS } from "~~/shared/projects";

type KindFilter = "all" | ProjectKind;

const kindOptions: { value: KindFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "app", label: "Apps" },
  { value: "game", label: "Games" },
];

const query = ref("");
const kind = ref<KindFilter>("all");

const filtered = computed(() => {
  const needle = query.value.trim().toLowerCase();
  return PROJECTS.filter((project) => {
    if (kind.value !== "all" && project.kind !== kind.value) return false;
    if (!needle) return true;
    const haystack = [
      project.title,
      project.overview,
      project.period ?? "",
      ...project.tech,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
});

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

usePageSeo({
  title: "Apps & Games",
  description:
    "Apps and games by Owen Patrick Falculan. Search by name or filter apps and games.",
  path: "/apps",
});
</script>
