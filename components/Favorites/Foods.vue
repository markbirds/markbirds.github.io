<template>
  <section>
    <SectionDescription>
      Below are some of my favorite comfort foods. These are the meals that
      never fail to make me happy, whether I’m eating out or at home. Got
      anything you think I should try? Maybe I’ll find a new favorite.
    </SectionDescription>
    <section class="grid-lg-cols-2 mt-8 gap-4!">
      <section>
        <div>
          <div>
            <img
              class="w-full rounded-xl"
              src="~assets/images/foods/shakeys.jpeg"
              alt="shakeys"
            />
          </div>
          <div class="media-description">Shakey's Pizza</div>
        </div>
        <div>
          <div>
            <img
              class="w-full rounded-xl"
              src="~assets/images/foods/greenwich.jpg"
              alt="greenwich"
            />
          </div>
          <div class="media-description">Greenwich Lasagna</div>
        </div>
      </section>
      <section class="my-auto">
        <div>
          <div>
            <img
              class="w-full rounded-xl"
              src="~assets/images/foods/jo-cooks.jpg"
              alt="jo-cooks"
            />
          </div>
          <div class="media-description">Cordon Bleu from Jo Cooks</div>
        </div>
      </section>
    </section>
  </section>
</template>
<script setup lang="ts">
import SectionDescription from "@/components/commons/SectionDescription.vue";
</script>
