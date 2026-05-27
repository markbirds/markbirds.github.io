<!-- LinkedIn only; footer (dog + built-with) at bottom -->
<template>
  <div id="follow-me">
    <div class="py-8 sm:py-12">
      <section class="section-container content-centered-1000">
        <div class="flex flex-col items-start">
          <h2
            class="section-title inline-flex px-0 py-2 text-2xl font-semibold"
          >
            Let's connect!
          </h2>

          <SectionDescription class="mt-5 w-full text-left">
            For work-related questions or to connect professionally, find me on
            <a
              class="underline"
              :href="LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</a
            >.
          </SectionDescription>
        </div>
      </section>
    </div>
    <div class="pb-4">
      <SiteFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import SiteFooter from "@/components/commons/SiteFooter.vue";
import SectionDescription from "@/components/commons/SectionDescription.vue";
import { LINKEDIN_URL } from "@/seo";
</script>
