<template>
  <div class="my-1 flex items-center">
    <Icon name="twemoji:black-circle" class="h-3 w-3" />
    <NuxtLink class="ml-3 flex items-center hover:underline" :to="props.to">
      <span class="mr-2">{{ props.text }}</span>
      <Icon :name="props.icon" class="animate-wiggle" size="24" />
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
interface Props {
  to: string;
  text: string;
  icon: string;
}
const props = defineProps<Props>();
</script>
