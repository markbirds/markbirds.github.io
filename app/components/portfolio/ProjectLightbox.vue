<!-- Screenshot / architecture lightbox -->
<template>
  <div
    v-if="images.length"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    role="dialog"
    aria-modal="true"
    @click="close"
  >
    <button
      type="button"
      class="absolute top-4 right-4 cursor-pointer text-white/80 hover:text-white"
      aria-label="Close"
      @click="close"
    >
      <Icon name="material-symbols:close-rounded" size="32" />
    </button>

    <button
      v-if="images.length > 1"
      type="button"
      class="absolute left-4 cursor-pointer text-white/80 hover:text-white"
      aria-label="Previous"
      @click.stop="prev"
    >
      <Icon name="material-symbols:arrow-left-alt-rounded" size="40" />
    </button>

    <img
      :src="images[index]"
      :alt="`${title} view ${index + 1}`"
      class="max-h-[85vh] max-w-full rounded-lg bg-white"
      @click.stop
    />

    <button
      v-if="images.length > 1"
      type="button"
      class="absolute right-4 cursor-pointer text-white/80 hover:text-white"
      aria-label="Next"
      @click.stop="next"
    >
      <Icon name="material-symbols:arrow-right-alt-rounded" size="40" />
    </button>

    <span
      v-if="images.length > 1"
      class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-sm text-white"
    >
      {{ index + 1 }} / {{ images.length }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[];
  index: number;
  title: string;
}>();

const emit = defineEmits<{
  close: [];
  next: [];
  prev: [];
}>();

function close() {
  emit("close");
}

function next() {
  emit("next");
}

function prev() {
  emit("prev");
}
</script>
