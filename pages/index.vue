<!-- Homepage: one URL, two layouts switched by Personal / Portfolio toggle -->
<template>
  <section class="animate-fade-in">
    <!-- Default: freelance / work-focused layout -->
    <div v-if="isPortfolio" class="bg-circuit">
      <PortfolioProfile />
      <PortfolioProjects />
      <PortfolioWorkWithMeSection />
      <PortfolioFollowMe />
    </div>

    <!-- Chill site (meta still uses portfolio SEO) -->
    <template v-else>
      <PersonalProfile />
      <PersonalAboutMe />
      <PersonalFavorites />
      <PersonalSportsAndGames />
      <PersonalGallery />
      <PersonalFollowMe />
    </template>
  </section>
</template>

<script setup lang="ts">
import { SITE_NAME, SITE_URL, SOCIAL_PROFILES } from "@/seo";

const { isPortfolio } = useSiteMode();

// Portfolio meta (title, description, OG) — same for both modes
useHomePageSeo();

// Structured data for search engines (Person + WebSite)
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            name: SITE_NAME,
            url: SITE_URL,
            jobTitle: "Software Developer",
            sameAs: SOCIAL_PROFILES,
            image: `${SITE_URL}/images/about-me-portfolio.webp`,
          },
          {
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
          },
        ],
      }),
    },
  ],
});
</script>
