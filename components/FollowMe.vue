<template>
  <div id="follow-me" class="bg-wiggle pt-8 pb-4">
    <section class="section-container">
      <section class="content-centered-550 lg:max-w-[800px]">
        <Divider>
          <template #title>
            <span class="section-title">
              <span class="mr-2">Follow Me </span>
              <Icon
                name="twemoji:mobile-phone"
                size="24"
                class="animate-wiggle"
              />
            </span>
          </template>
        </Divider>
        <div class="text-justify text-lg leading-[2]">
          <span class="bg-soft-white">
            I share code on GitHub (but not on my
          </span>
          <span class="bg-soft-white inline-block">
            <span class="flex items-center"
              >GitLab
              <Icon name="twemoji:smiling-face-with-sunglasses" class="ml-1" />
            </span>
          </span>
          <span class="bg-soft-white">
            ) and try to look professional on LinkedIn. Feel free to say hi!
          </span>
        </div>
        <div class="flex-center mt-6">
          <a
            class="btn-primary mx-1 flex w-[120px] items-center justify-center rounded-md"
            href="https://github.com/markbirds"
            target="_blank"
            aria-label="Visit Owen's GitHub profile"
            title="GitHub Profile"
          >
            <span class="mr-2">GitHub </span>
            <Icon name="uim:github-alt" class="text-white" />
          </a>
          <a
            class="btn-primary mx-1 flex w-[120px] items-center justify-center rounded-md"
            href="https://www.linkedin.com/in/owen-patrick-falculan-4500b521a/"
            target="_blank"
            aria-label="Visit Owen's LinkedIn profile"
            title="LinkedIn Profile"
          >
            <span class="mr-2">LinkedIn </span>
            <Icon name="akar-icons:linkedin-box-fill" class="text-white" />
          </a>
        </div>
        <section class="mt-12 mb-4 text-center text-gray-600">
          <div class="italic">
            <a
              href="/internetdog.gif"
              target="_blank"
              aria-label="View internet dog GIF"
              title="Internet Dog GIF"
            >
              On the Internet, nobody knows you're a dog
            </a>
          </div>
          <div class="flex-center mt-8">
            <span class="mx-2">Built with</span>
            <Tooltip tooltip-text="Nuxt">
              <a
                href="https://nuxt.com"
                target="_blank"
                aria-label="Visit Nuxt.js website"
                title="Nuxt.js"
              >
                <Icon name="logos:nuxt-icon" size="24" />
              </a>
            </Tooltip>
            <Tooltip tooltip-text="Tailwind CSS">
              <a
                href="https://tailwindcss.com"
                class="ml-1"
                target="_blank"
                aria-label="Visit Tailwind CSS website"
                title="Tailwind CSS"
              >
                <Icon name="logos:tailwindcss-icon" size="24" />
              </a>
            </Tooltip>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>
<script setup lang="ts">
import Divider from "@/components/commons/Divider.vue";
import Tooltip from "@/components/commons/Tooltip.vue";
</script>
