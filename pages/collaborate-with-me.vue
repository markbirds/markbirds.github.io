<template>
  <section class="bg-circuit animate-fade-in pt-8 pb-16">
    <section class="section-container content-centered-800">
      <div
        class="bg-soft-white p-3 text-center text-3xl leading-[2] font-medium"
      >
        <span class="mr-2">Start a Project with Co.Lab Software</span>
        <span class="inline-block">
          <span class="flex items-center"
            >Solutions
            <Icon
              name="material-symbols:code-blocks-outline"
              size="42"
              class="ml-1"
            />
          </span>
        </span>
      </div>
      <section class="mt-5">
        <SectionDescription class="my-5 md:my-2">
          Hi, I'm Owen, a software developer. I collaborate on projects through
          <span class="font-medium">Co.Lab Software Solutions</span>, where we
          take on freelance and contract-based work. Co.Lab stands for
          collaborative problem-solving, where your ideas and our code come
          together.
        </SectionDescription>
        <SectionDescription class="my-5 md:my-2">
          Whether it's web, mobile, or desktop development, we're open to
          working with you. We can also help with deployments, data analysis and
          visualization, and even AI or machine learning projects.
        </SectionDescription>
        <SectionDescription class="text-center!">
          Here are some of the main technologies we work with:
        </SectionDescription>
        <div
          v-for="(tech, index) in technologies"
          :key="index"
          class="flex-center my-1"
        >
          <div class="bg-soft-white p-3">
            <Tooltip v-for="t in tech" :key="t.name" :tooltip-text="t.name">
              <a
                :href="t.url"
                target="_blank"
                :aria-label="`Visit ${t.name} website`"
                :title="`Visit ${t.name}`"
              >
                <Icon :name="t.icon" size="48" class="mx-1" />
              </a>
            </Tooltip>
          </div>
        </div>
        <SectionDescription class="my-2">
          If your project uses technologies not listed above, feel free to reach
          out.
          <span class="font-medium">Co.Lab Software Solutions</span> is open to
          learning and adapting to your needs. You can email us at
          <a
            class="text-blue-500 hover:underline"
            href="https://mail.google.com/mail/?view=cm&to=contact.colab@gmail.com"
            target="_blank"
            aria-label="Send email to contact.colab@gmail.com"
            title="Send Email"
          >
            contact.colab@gmail.com
          </a>
          or fill out the form by clicking the button below. We would love to
          hear about what you are building.
        </SectionDescription>
        <div class="mt-5 text-center">
          <a
            href="https://forms.gle/nLA6chjSr4Fa7yHk6"
            target="_blank"
            aria-label="Fill out project inquiry form"
            title="Project Inquiry Form"
          >
            <button class="btn-primary">Get Started</button>
          </a>
        </div>
      </section>
    </section>
  </section>
</template>
<script setup lang="ts">
import Tooltip from "@/components/commons/Tooltip.vue";
import SectionDescription from "@/components/commons/SectionDescription.vue";

useHead({
  title: "Let's Co.Lab",
});

const technologies = [
  [
    {
      name: "Electron",
      icon: "devicon:electron",
      url: "https://www.electronjs.org/",
    },
    {
      name: "Ionic",
      icon: "devicon:ionic",
      url: "https://ionicframework.com/",
    },
  ],
  [
    {
      name: "Python",
      icon: "devicon:python",
      url: "https://www.python.org/",
    },
    {
      name: "Flask",
      icon: "devicon:flask",
      url: "https://flask.palletsprojects.com/",
    },
    {
      name: "FastAPI",
      icon: "devicon:fastapi",
      url: "https://fastapi.tiangolo.com/",
    },
    {
      name: "PostgreSQL",
      icon: "devicon:postgresql",
      url: "https://www.postgresql.org/",
    },
  ],
  [
    {
      name: "Vue",
      icon: "devicon:vuejs",
      url: "https://vuejs.org/",
    },
    {
      name: "Nuxt",
      icon: "devicon:nuxtjs",
      url: "https://nuxtjs.org/",
    },
    {
      name: "Tailwind",
      icon: "devicon:tailwindcss",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Typescript",
      icon: "devicon:typescript",
      url: "https://www.typescriptlang.org/",
    },
  ],
  [
    {
      name: "Docker",
      icon: "devicon:docker",
      url: "https://www.docker.com/",
    },
    {
      name: "AWS",
      icon: "devicon:amazonwebservices-wordmark",
      url: "https://aws.amazon.com/",
    },
    {
      name: "Gitlab",
      icon: "devicon:gitlab",
      url: "https://gitlab.com/",
    },
  ],
];
</script>
