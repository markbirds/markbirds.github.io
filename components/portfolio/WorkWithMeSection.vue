<!-- Freelance CTA — email opens mail client with prefilled subject -->
<template>
  <div id="work-with-me" class="py-8 sm:py-12">
    <section class="section-container content-centered-1000">
      <div class="flex flex-col items-start">
        <h2 class="section-title inline-flex px-0 py-2 text-2xl font-semibold">
          Work With Me on a Project
        </h2>

        <SectionDescription class="mt-5 w-full text-left">
          I take on freelance and contract work when a project feels like a good
          fit. I mostly build web, mobile, and desktop apps, but I can also help
          with deployments, working with data, or AI and machine learning
          projects. I'm happy to learn new tools when a project needs them. If
          you've got something in mind, I'd love to hear about it.
        </SectionDescription>

        <div class="mt-8">
          <a class="btn-primary" :href="CONTACT_MAILTO">
            Email me about your project
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionDescription from "@/components/commons/SectionDescription.vue";
import { CONTACT_MAILTO } from "@/seo";
</script>
