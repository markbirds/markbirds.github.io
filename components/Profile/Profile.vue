<template>
  <section class="flex flex-col md:flex-row w-full md:w-[60%] mx-auto my-24">
    <div class="flex justify-center md:justify-end flex-1 md:pr-10">
      <img
        class="rounded-full max-w-[250px]"
        src="~assets/images/profile/profile_pic.jpg"
        alt="profile_pic1"
      />
    </div>
    <div
      class="flex justify-center md:justify-start items-center flex-1 mt-10 md:mt-0"
    >
      <div class="flex items-center font-sans text-gray-600 text-3xl">
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
