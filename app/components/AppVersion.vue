<script setup lang="ts">
// Version from runtimeConfig (baked at generate), so the live build matches the git tag.
const { version } = useRuntimeConfig().public;
</script>

<template>
  <p class="mt-3 text-xs text-gray-400">
    <a
      :href="`https://github.com/markbirds/markbirds.github.io/releases/tag/v${version}`"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:text-gray-600"
      :aria-label="`Site version ${version}`"
    >
      v{{ version }}
    </a>
  </p>
</template>
