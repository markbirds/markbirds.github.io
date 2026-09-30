<!-- Apps catalog: every app and game as a card, with search and an Apps/Games filter -->
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
      <div v-else class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PortfolioProjectCard
          v-for="project in filtered"
          :key="project.slug"
          :project="project"
        />
      </div>
    </section>
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
      project.tagline,
      project.overview,
      project.period ?? "",
      ...project.tech,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
});

usePageSeo({
  title: "Apps & Games",
  description:
    "Apps and games by Owen Patrick Falculan. Search by name or filter apps and games.",
  path: "/apps",
});
</script>
