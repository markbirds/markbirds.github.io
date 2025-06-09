<template>
  <div class="flex-center relative mb-5">
    <div class="to-text h-px flex-1 bg-gradient-to-r from-transparent"></div>

    <div class="z-10 px-4 text-xl whitespace-nowrap">
      <slot name="title" />
    </div>

    <div class="from-text h-px flex-1 bg-gradient-to-r to-transparent"></div>
  </div>
</template>
