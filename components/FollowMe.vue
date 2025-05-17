<template>
  <div id="follow-me" class="bg-wiggle pb-4 pt-8">
    <section class="container">
      <section class="content-centered-500 lg:max-w-[800px]">
        <Divider>
          <template #title>
            <span class="bg-soft-white flex items-center p-2">
              <span class="mr-2 font-medium">Follow Me </span>
              <Icon
                name="twemoji:mobile-phone"
                size="24"
                class="animate-wiggle"
              />
            </span>
          </template>
        </Divider>
        <div class="mx-auto text-lg leading-[2]">
          <div class="description">
            I share code on GitHub (but not on my
            <span class="inline-block">
              <span class="flex items-center"
                >GitLab
                <Icon
                  name="twemoji:smiling-face-with-sunglasses"
                  class="ml-1"
                />
              </span>
            </span>
            ) and try to look professional on LinkedIn. Feel free to say hi!
          </div>
        </div>
        <div class="mt-4 flex items-center justify-center md:mt-0">
          <a
            class="btn-primary mx-1 flex w-[120px] items-center justify-center rounded-md"
            href="https://github.com/markbirds"
            target="_blank"
          >
            <span class="mr-2">GitHub </span>
            <Icon name="uim:github-alt" class="text-white" />
          </a>
          <a
            class="btn-primary mx-1 flex w-[120px] items-center justify-center rounded-md"
            href="https://www.linkedin.com/in/owen-patrick-falculan-4500b521a/"
            target="_blank"
          >
            <span class="mr-2">LinkedIn </span>
            <Icon name="akar-icons:linkedin-box-fill" class="text-white" />
          </a>
        </div>
        <section class="mb-4 mt-12 text-center text-gray-600">
          <div class="italic">
            <a href="/internetdog.gif" target="_blank">
              On the Internet, nobody knows you're a dog
            </a>
          </div>
          <div class="mt-8 flex items-center justify-center">
            <span class="mx-2">Built with</span>
            <a
              href="https://nuxt.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nuxt website"
            >
              <Icon name="logos:nuxt" size="24" />
            </a>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>
<script setup lang="ts">
import Divider from "@/components/commons/Divider.vue";
</script>
