<!-- Project cards — replace placeholder data when ready -->
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
          class="rounded-xl border border-gray-200/80 bg-white/80 p-5"
        >
          <h3 class="text-xl font-semibold">{{ project.title }}</h3>
          <p class="mt-2 text-lg leading-relaxed">{{ project.description }}</p>
          <div class="mt-3 flex flex-wrap gap-2">
            <span v-for="tech in project.tech" :key="tech" class="badge">
              {{ tech }}
            </span>
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <a
              class="btn-primary inline-flex items-center justify-center rounded-md px-4 py-2"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code
            </a>
            <a
              class="border-primary text-primary inline-flex items-center justify-center rounded-md border px-4 py-2 text-lg"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionDescription from "@/components/commons/SectionDescription.vue";

// TODO: swap for real projects (title, description, tech, repo/demo URLs)
const projects = [
  {
    title: "Project One",
    description:
      "Short placeholder description. Swap this for what the app does and who it's for.",
    tech: ["Python", "FastAPI", "Vue"],
    githubUrl: "https://github.com/markbirds",
    demoUrl: "https://example.com",
  },
  {
    title: "Project Two",
    description:
      "Another placeholder. One or two sentences on the problem you solved is enough.",
    tech: ["Nuxt", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/markbirds",
    demoUrl: "https://example.com",
  },
  {
    title: "Project Three",
    description:
      "Third placeholder card. Link the repo and a live demo when you have them.",
    tech: ["Flask", "TypeScript", "AWS"],
    githubUrl: "https://github.com/markbirds",
    demoUrl: "https://example.com",
  },
];
</script>
