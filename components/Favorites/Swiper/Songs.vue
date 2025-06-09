<template>
  <div class="flex-center text-2xl">
    <div class="swiper-card-title">
      <span>Songs</span>
      <Icon name="logos:spotify-icon" class="ml-2" />
    </div>
  </div>
  <div class="mt-10">
    <section v-for="song in songs" :key="song.title">
      <div class="mt-4 mb-2 flex items-center">
        <div class="swiper-card-item-icon">
          <Icon :name="song.icon" size="20" />
        </div>
        <div class="ml-2 flex items-center">
          <span class="font-bold">{{ song.title }}</span>
          <a :href="song.link" target="_blank" class="ml-2 pt-1.5">
            <Icon name="carbon:play-filled" size="24" color="#16a34a" />
          </a>
        </div>
      </div>
      <div class="text-justify text-sm">
        {{ song.description }}
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const songs = [
  {
    title: "The Woman I Love (Jason Mraz)",
    link: "https://open.spotify.com/track/6Vn8lTVMjILXQCjZUXS8n4?si=02a66556b0e541fa",
    icon: "twemoji:smiling-face-with-heart-eyes",
    description:
      "This song is just so sweet. Jason Mraz’s voice is soothing, and the lyrics beautifully capture the calm, sincere feeling of loving someone unconditionally.",
  },
  {
    title: "If You Stay (Joseph Vincent)",
    link: "https://open.spotify.com/track/2uImdLlBYr2PeGdzmWIYwJ?si=bebd1ab007ee4fc8",
    icon: "twemoji:smiling-face-with-hearts",
    description:
      "I love how gentle and hopeful this song feels. It’s about holding on to someone you care about, even when things get tough.",
  },
  {
    title: "Passenger Seat (Stephen Speaks)",
    link: "https://open.spotify.com/track/73Nw51XTNstlk3Wu1K26cB?si=360be6328a204497",
    icon: "twemoji:heart-with-ribbon",
    description:
      "This one’s perfect for when I’m driving with my girlfriend. It feels like the soundtrack to our little moments together.",
  },
];
</script>
