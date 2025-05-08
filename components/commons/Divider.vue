<template>
  <div class="relative flex items-center justify-center mb-8">
    <div class="h-px flex-1 bg-gradient-to-r from-transparent to-text"></div>

    <div class="px-4 text-xl z-10 whitespace-nowrap">
      <slot name="title" />
    </div>

    <div class="h-px flex-1 bg-gradient-to-r from-text to-transparent"></div>
  </div>
</template>
