<!-- Fixed toggle: switches homepage between Personal and Portfolio -->
<template>
  <div
    class="fixed top-4 right-4 z-50 flex rounded-full bg-white/80 p-1 shadow-md backdrop-blur-sm"
    role="tablist"
    aria-label="Site mode"
  >
    <button
      type="button"
      role="tab"
      class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
      :class="
        isPortfolio ? 'bg-primary text-white' : 'text-text hover:bg-white/60'
      "
      :aria-selected="isPortfolio"
      @click="setMode('portfolio')"
    >
      Portfolio
    </button>
    <button
      type="button"
      role="tab"
      class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
      :class="
        isPersonal ? 'bg-primary text-white' : 'text-text hover:bg-white/60'
      "
      :aria-selected="isPersonal"
      @click="setMode('personal')"
    >
      Personal
    </button>
  </div>
</template>

<script setup lang="ts">
const { setMode, isPersonal, isPortfolio } = useSiteMode();
</script>
