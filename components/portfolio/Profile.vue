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
                Hey, I'm Owen. I design and build systems.
              </span>
            </p>
            <p class="mt-3 text-lg">
              <span class="bg-soft-white inline-block py-1">
                Open for freelance and contract work.
              </span>
            </p>
          </div>

          <SectionDescription class="mt-3">
            I'm a software engineer specializing in backend and web development,
            with experience building applications across web, mobile, and
            desktop platforms. I care about clean architecture, maintainable
            code, and solving real business problems with the right technology.
          </SectionDescription>

          <SectionDescription class="mt-3">
            If you're looking for someone to design, build, and maintain
            reliable systems, I'd be happy to help.
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
