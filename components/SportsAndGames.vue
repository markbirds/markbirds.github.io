<template>
  <div id="sports-and-games" class="bg-shapes py-8">
    <div class="content-centered-550 lg:section-container">
      <Divider>
        <template #title>
          <span class="section-title">
            <span class="mr-2">Sports and Games </span>
            <Icon name="twemoji:basketball" size="24" class="animate-wiggle" />
          </span>
        </template>
      </Divider>
    </div>
    <div class="py-0 lg:py-8">
      <section class="grid-lg-cols-2 section-container">
        <div class="content-centered-550">
          <div class="flex-center">
            <span class="bg-soft-white mr-1 p-2 text-lg">Basketball </span>
            <Icon name="twemoji:basketball" size="20" />
          </div>
          <SectionDescription class="mt-3">
            I play a lot of sports like volleyball, badminton, and table tennis,
            but basketball is my absolute favorite. I’m not really “that” good
            at sports, but it’s fun to play, especially with friends. This is my
            one and only basketball highlight video (yes, I dug it up from the
            grave). We were losing badly, so the starters took a break and let
            me take over—the greatest shooter ever, just kidding.
          </SectionDescription>
        </div>
        <div class="text-center">
          <video
            class="content-centered-550 rounded-lg shadow-xl"
            controls
            preload="metadata"
          >
            <source src="/videos/basketball.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div class="media-description">
            The greatest shot with the greatest cheers. (2017)
          </div>
        </div>
      </section>
      <section
        class="section-container mt-8 flex flex-col-reverse gap-8 lg:mt-10 lg:flex-row"
      >
        <div class="content-centered-550">
          <img
            class="w-full rounded-xl"
            src="~assets/images/chess.jpeg"
            alt="chess"
          />
        </div>
        <div class="content-centered-550">
          <div class="flex-center">
            <span class="bg-soft-white mr-1 p-2 text-lg"
              >Chess and Perdigana
            </span>
            <Icon name="twemoji:chess-pawn" size="20" />
          </div>
          <SectionDescription class="mt-3">
            Perdigana, if you didn’t know, is a game similar to checkers or dama
            (a popular Filipino board game), but it’s the opposite because you
            win by losing all your pieces. I first learned about it through
            Sci-Dama, a game with similar rules but has calculations and points,
            where I even participated in a competition. I actually like
            Perdigana more than Dama because it’s faster to play and more fun.
          </SectionDescription>
          <SectionDescription class="mt-3">
            Since Perdigana isn’t very popular and it’s hard to find players,
            even online, I learned chess instead. If you have the time, let’s
            play!
          </SectionDescription>
          <div class="mt-5">
            <a
              class="btn-primary mx-auto flex w-[180px] items-center justify-center"
              href="https://www.chess.com/member/markbirds"
              target="_blank"
            >
              <span class="mr-2 text-white">Challenge me!</span>
              <Icon name="twemoji:beaming-face-with-smiling-eyes" size="20" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import Divider from "@/components/commons/Divider.vue";
import SectionDescription from "@/components/commons/SectionDescription.vue";
</script>
