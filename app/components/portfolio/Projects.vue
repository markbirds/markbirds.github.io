<!-- Best apps on the homepage + link to the full catalog -->
<template>
  <div id="projects" class="py-8 sm:py-16">
    <section class="section-container content-centered-1000">
      <h2 class="section-title mb-3 inline-flex px-0 text-2xl font-medium">
        Apps & Games
      </h2>
      <SectionDescription class="mb-4">
        Some started as school or side projects. Others are games for my
        girlfriend, friends, and family. I use AI tools to update old work and
        finish new ideas faster. Feel free to check them out.
      </SectionDescription>

      <PortfolioProjectGrid class="mt-8" :projects="featuredProjects" />

      <div class="mt-10 flex justify-center">
        <NuxtLink
          to="/apps"
          class="bg-soft-white text-primary inline-flex items-center gap-1 px-3 py-2 text-base hover:underline"
        >
          More apps
          <Icon name="material-symbols:arrow-right-alt-rounded" size="22" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionDescription from "~/components/commons/SectionDescription.vue";
import { featuredProjects } from "~~/shared/projects";
</script>
