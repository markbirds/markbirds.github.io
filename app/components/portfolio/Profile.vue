<!-- Portfolio hero: photo + intro (replaces separate About Me section) -->
<template>
  <div id="hero" class="pt-24 pb-16 lg:pt-36 lg:pb-24">
    <section class="section-container content-centered-1000">
      <div class="grid-lg-cols-2 items-center gap-8">
        <div class="flex-center">
          <img
            class="w-full max-w-[500px] rounded-xl shadow-lg"
            src="/images/about-me-portfolio.webp"
            :srcset="heroSrcset"
            :sizes="heroSizes"
            width="1200"
            height="1600"
            alt="Owen Patrick Falculan"
            fetchpriority="high"
            loading="eager"
            decoding="async"
          />
        </div>

        <div>
          <div class="text-center lg:text-left">
            <h1 class="text-2xl font-medium">
              <span class="bg-soft-white inline-block py-2">
                Hey, I'm Owen.
              </span>
            </h1>
          </div>

          <SectionDescription class="mt-3">
            I'm a senior software engineer. I work at Billease, one of the
            leading fintech apps in the Philippines. Currently, my work is
            focused on integrations for payments like QRPh, OTC payments, and
            cards, and on cash disbursal with other banks. When working on a
            project, I keep my code clean, maintainable, performant, and secure.
          </SectionDescription>

          <SectionDescription class="mt-3">
            I'm happy to collaborate, share what I know, and learn from other
            people. If you have a project, let's talk.
          </SectionDescription>

          <div
            class="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a class="btn-primary" :href="CONTACT_MAILTO">Let's collaborate</a>
            <a
              class="border-primary text-primary inline-flex items-center justify-center rounded-md border bg-white px-4 py-2"
              :href="LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat me on LinkedIn
            </a>
          </div>

          <!-- For a visitor with no mail app set up, where the button would do nothing. -->
          <p class="mt-4 text-center text-sm text-gray-500 lg:text-left">
            Or email me at
            <a
              class="text-primary underline underline-offset-2"
              :href="CONTACT_MAILTO"
              >{{ CONTACT_EMAIL }}</a
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionDescription from "~/components/commons/SectionDescription.vue";
import { CONTACT_EMAIL, CONTACT_MAILTO, LINKEDIN_URL } from "~~/shared/seo";

// One definition for the <img> and its preload, so both pick the same file and it downloads once.
const heroSrcset =
  "/images/about-me-portfolio-640.webp 640w, /images/about-me-portfolio.webp 1200w";
const heroSizes =
  "(min-width: 1024px) 484px, (min-width: 556px) 500px, calc(100vw - 56px)";

// The hero is the homepage's LCP image; the priority goes on the preload because the preload starts the fetch.
useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      imagesrcset: heroSrcset,
      imagesizes: heroSizes,
      fetchpriority: "high",
    },
  ],
});
</script>
