<template>
  <div id="sports-and-games" class="bg-shapes py-8">
    <div class="mx-auto max-w-[500px] lg:container">
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
      <section class="container grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div class="mx-auto my-auto max-w-[500px]">
          <div class="flex items-center justify-center">
            <span class="mr-1 rounded-xl bg-white bg-opacity-60 p-2 text-lg"
              >Basketball
            </span>
            <Icon name="twemoji:basketball" size="20" />
          </div>
          <div class="section-description">
            I play a lot of sports like volleyball, badminton, and table tennis,
            but basketball is my absolute favorite. I’m not really “that” good
            at sports, but it’s fun to play, especially with friends. This is my
            one and only basketball highlight video (yes, I dug it up from the
            grave). We were losing badly, so the starters took a break and let
            me take over—the greatest shooter ever, just kidding.
          </div>
        </div>
        <div class="bg-opacity-60 px-3 text-center sm:px-0">
          <video
            class="mx-auto w-full max-w-[500px] rounded-lg shadow-xl"
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
        class="container mt-8 flex flex-col-reverse gap-8 lg:mt-10 lg:flex-row"
      >
        <div class="mx-auto max-w-[500px] px-3 sm:px-0">
          <img
            class="w-full rounded-xl"
            src="~assets/images/chess.jpeg"
            alt="chess"
          />
        </div>
        <div class="mx-auto my-auto max-w-[500px] flex-1">
          <div class="flex items-center justify-center">
            <span class="mr-1 rounded-xl bg-white bg-opacity-60 p-2 text-lg"
              >Chess and Perdigana
            </span>
            <Icon name="twemoji:chess-pawn" size="20" />
          </div>
          <div class="section-description">
            Perdigana, if you didn’t know, is a game similar to checkers or dama
            (a popular Filipino board game), but it’s the opposite because you
            win by losing all your pieces. I first learned about it through
            Sci-Dama, a game with similar rules but has calculations and points,
            where I even participated in a competition. I actually like
            Perdigana more than Dama because it’s faster to play and more fun.
          </div>
          <div class="section-description">
            Since Perdigana isn’t very popular and it’s hard to find players,
            even online, I learned chess instead. If you have the time, let’s
            play!
          </div>
          <div class="mt-5">
            <a
              class="btn-primary-blue mx-auto flex w-[180px] items-center justify-center"
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
</script>
