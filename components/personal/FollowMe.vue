<!-- Personal social section — LinkedIn only -->
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

        <div class="text-center text-lg leading-[2]">
          <span class="bg-soft-white inline-block px-3 py-3">
            I'm most active on LinkedIn. Follow me there if you'd like to
            connect!
          </span>
        </div>

        <div class="flex-center mt-6">
          <a
            class="btn-primary flex w-[120px] items-center justify-center rounded-md"
            :href="LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Owen's LinkedIn profile"
            title="LinkedIn Profile"
          >
            <span class="mr-2">LinkedIn </span>
            <Icon name="akar-icons:linkedin-box-fill" class="text-white" />
          </a>
        </div>

        <SiteFooter />
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import Divider from "@/components/commons/Divider.vue";
import SiteFooter from "@/components/commons/SiteFooter.vue";
import { LINKEDIN_URL } from "@/seo";
</script>
