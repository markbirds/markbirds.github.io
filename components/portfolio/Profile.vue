<!-- Portfolio hero: photo + intro (replaces separate About Me section) -->
<template>
  <div id="hero" class="pt-24 pb-16 lg:pt-36 lg:pb-24">
    <section class="section-container content-centered-1000">
      <div class="grid-lg-cols-2 items-center gap-8">
        <div class="flex-center">
          <img
            class="w-full max-w-[500px] rounded-xl shadow-lg"
            src="/images/about-me-portfolio.webp"
            alt="Owen Patrick Falculan"
            fetchpriority="high"
            loading="eager"
            decoding="async"
          />
        </div>

        <div>
          <!-- Visible to screen readers and search engines -->
          <h1 class="sr-only">Owen Patrick Falculan, Software Developer</h1>

          <div class="text-center lg:text-left">
            <p class="text-2xl font-medium">
              <span class="bg-soft-white inline-block py-2">
                Hey, I'm Owen. I build software and architect systems.
              </span>
            </p>
            <p class="mt-3 text-lg">
              <span class="bg-soft-white inline-block py-1">
                Open for freelance and contract work.
              </span>
            </p>
          </div>

          <SectionDescription class="mt-3">
            I've been writing code for years across backend, web, mobile, and
            desktop, though backend and web are where I do my best work. I care
            about choosing the right tools for the job, not forcing one stack
            everywhere, and building systems that stay clean and maintainable.
            If you're building something and need a developer who takes the work
            seriously, let's talk.
          </SectionDescription>

          <div class="mt-8 flex justify-center">
            <a class="btn-primary" href="#work-with-me">Work with me</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionDescription from "@/components/commons/SectionDescription.vue";
</script>
