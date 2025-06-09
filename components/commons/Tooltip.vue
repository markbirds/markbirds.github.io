<template>
  <div class="group relative inline-block">
    <slot />
    <div
      class="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition group-hover:opacity-100"
    >
      {{ props.tooltipText }}
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  tooltipText: string;
}
const props = defineProps<Props>();
</script>
