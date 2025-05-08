<template>
  <div class="bg-jigsaw pt-24 pb-36">
    <section class="mx-auto flex w-full flex-col md:w-[85%] md:flex-row">
      <section class="flex items-center -rotate-[0.3rad] flex-1 justify-center">
        <div>
          <img
            class="max-w-[250px] rounded-full rotate-[0.3rad]"
            src="~assets/images/me1.jpeg"
            alt="me1"
          />
          <img
            class="max-w-[200px] rounded-full mt-1.5 rotate-[0.3rad]"
            src="~assets/images/me3.jpeg"
            alt="me3"
          />
        </div>
        <div>
          <img
            class="max-w-[300px] rounded-full mt-36 -ml-12 rotate-[0.3rad]"
            src="~assets/images/me2.jpeg"
            alt="me2"
          />
        </div>
      </section>
      <section
        class="mt-10 flex flex-1 flex-col items-start justify-center md:mt-0 p-8 rounded-lg"
      >
        <div class="text-3xl">
          <span class="mr-2"
            >Hi, I'm Owen — I love
            <span class="line-through">pizza</span> building apps. And also
            pizza.</span
          >
          <Icon name="twemoji:pizza" />
          <Icon name="twemoji:winking-face" />
        </div>
        <section class="text-lg">
          <div class="mt-5">
            <span class="mr-2 text-xl">Check out what's here</span>
            <Icon
              name="twemoji:backhand-index-pointing-down-medium-light-skin-tone"
            />
          </div>
          <div class="mt-5">
            <div class="flex items-center my-1">
              <Icon name="twemoji:black-circle" class="w-3 h-3" />
              <a
                class="ml-3 hover:underline flex items-center"
                href="#about-me"
              >
                <span class="mr-2">A Little Bit About Me </span>
                <Icon name="twemoji:see-no-evil-monkey" />
              </a>
            </div>
            <div class="flex items-center my-1">
              <Icon name="twemoji:black-circle" class="w-3 h-3" />
              <a
                class="ml-3 hover:underline flex items-center"
                href="#about-me"
              >
                <span class="mr-2">My Favorites </span>
                <Icon name="twemoji:red-heart" />
              </a>
            </div>
            <div class="flex items-center my-1">
              <Icon name="twemoji:black-circle" class="w-3 h-3" />
              <a
                class="ml-3 hover:underline flex items-center"
                href="#about-me"
              >
                <span class="mr-2">Sports and Games </span>
                <Icon name="twemoji:basketball" />
              </a>
            </div>
            <div class="flex items-center my-1">
              <Icon name="twemoji:black-circle" class="w-3 h-3" />
              <a
                class="ml-3 hover:underline flex items-center"
                href="#about-me"
              >
                <span class="mr-2">Gallery </span>
                <Icon name="twemoji:framed-picture" />
              </a>
            </div>
            <div class="flex items-center my-1">
              <Icon name="twemoji:black-circle" class="w-3 h-3" />
              <a
                class="ml-3 hover:underline flex items-center"
                href="#about-me"
              >
                <span class="mr-2">Socials </span>
                <Icon name="twemoji:mobile-phone" />
              </a>
            </div>
            <div class="mt-5">
              <button
                class="btn-primary-blue"
                @click="navigateTo('/collaborate-with-me')"
              >
                <span class="mr-2 text-white">Collaborate with me </span>
                <Icon name="twemoji:man-technologist-light-skin-tone" />
              </button>
            </div>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>
