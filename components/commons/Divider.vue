<template>
  <div class="relative mb-8 flex items-center justify-center">
    <div class="h-px flex-1 bg-gradient-to-r from-transparent to-text"></div>

    <div class="z-10 whitespace-nowrap px-4 text-xl">
      <slot name="title" />
    </div>

    <div class="h-px flex-1 bg-gradient-to-r from-text to-transparent"></div>
  </div>
</template>
