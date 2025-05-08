<template>
  <div class="bg-bathroom py-24">
    <section class="w-[80%] mx-auto">
      <Divider>
        <template #title>
          <span class="flex items-center bg-white bg-opacity-60 p-2 rounded-xl">
            <span class="mr-2">Sports and Games </span>
            <Icon name="twemoji:basketball" />
          </span>
        </template>
      </Divider>
      <div>
        <section
          class="grid grid-cols-2 gap-4 bg-white bg-opacity-60 p-16 rounded-lg"
        >
          <div>
            <div class="flex items-center justify-center p-2 rounded-xl">
              <span class="mr-2 text-xl">Basketball </span>
              <Icon name="twemoji:basketball" />
            </div>
            <div
              class="text-lg flex items-center leading-[2] text-center bg-white bg-opacity-60 p-5 rounded-xl"
            >
              I play a lot of sports like volleyball, badminton, and table
              tennis, but my absolute favorite is basketball. I don’t think I
              have the moves, but what I do have is shooting. This is my one and
              only basketball highlight video (yes, I dug it up from the grave).
              We were losing badly, so the starters took a break and let me take
              over — the greatest shooter ever (according to me).
            </div>
          </div>
          <div
            class="flex flex-col items-center justify-center w-full mr-auto bg-white bg-opacity-60"
          >
            <video
              class="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              controls
              preload="metadata"
            >
              <source src="/videos/basketball.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div class="mt-2 text-sm text-gray-500 italic">
              The greatest shot with the greatest cheers. (2017)
            </div>
          </div>
        </section>
        <section
          class="grid grid-cols-2 gap-4 bg-white bg-opacity-60 p-16 rounded-lg"
        >
          <div
            class="flex flex-col items-center justify-center bg-white bg-opacity-60"
          >
            <div>
              <img
                class="max-w-[500px] rounded-xl"
                src="~assets/images/chess.jpeg"
                alt="chess"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-center p-2 rounded-xl">
              <span class="mr-2 text-xl">Chess and Perdigana </span>
              <Icon name="twemoji:chess-pawn" />
            </div>
            <div
              class="text-lg flex items-center leading-[2] text-center bg-white bg-opacity-60 p-5 rounded-xl"
            >
              In the Philippines, there's this game called Dama where the goal
              is to capture all your opponent’s pieces to win. It's kind of like
              chess, but all the pieces move the same way. There's also a game
              called Perdigana, which is the opposite because you win by losing
              all your pieces. I actually like Perdigana more because it’s more
              fun to play and it makes you think more about your strategy.
            </div>
            <div
              class="text-lg flex items-center leading-[2] text-center bg-white bg-opacity-60 p-5 rounded-xl"
            >
              Sadly, it is hard to find someone to play with, even online, since
              it is not really popular. So I decided to learn chess instead. I
              started playing in March 2024, and yeah, I am still stuck at 500
              Elo lol.
            </div>
            <div
              class="text-lg flex items-center leading-[2] text-center bg-white bg-opacity-60 p-5 rounded-xl"
            >
              If you want to play with me, challenge me by clicking the button
              below!
            </div>
            <div class="mt-5">
              <a
                class="btn-primary-blue flex items-center justify-center w-[150px] mx-auto"
                href="https://link.chess.com/play/ui9YE2"
                target="_blank"
              >
                <span class="mr-2 text-white">Let's play!</span>
                <Icon name="twemoji:beaming-face-with-smiling-eyes" size="20" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import Divider from "@/components/commons/Divider.vue";
</script>
