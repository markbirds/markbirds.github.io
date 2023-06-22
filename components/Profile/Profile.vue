<template>
  <section class="mx-auto my-24 flex w-full flex-col md:w-[60%] md:flex-row">
    <div class="flex flex-1 justify-center md:justify-end md:pr-10">
      <img
        class="max-w-[250px] rounded-full"
        src="~assets/images/profile/profile_pic.jpg"
        alt="profile_pic1"
      />
    </div>
    <div
      class="mt-10 flex flex-1 items-center justify-center md:mt-0 md:justify-start"
    >
      <div class="flex items-center font-sans text-3xl text-gray-600">
        <span class="mr-2">Hey there! I'm Owen</span>
        <Icon name="twemoji:waving-hand" :horizontal-flip="evenSecond" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

const date = useDayjs();
const evenSecond = ref(false);

onMounted(() => {
  setInterval(() => {
    const now = date().second();
    evenSecond.value = now % 2 === 0;
  }, 1000);
});
</script>
