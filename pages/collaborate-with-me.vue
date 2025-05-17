<template>
  <section class="bg-circuit animate-fade-in">
    <section class="container">
      <section class="content-centered-850 py-16 md:mt-0">
        <div class="leading-2 flex items-center justify-center text-3xl">
          <span class="bg-soft-white p-3 text-center font-medium"
            >Start a Project with Co.Lab Software Solutions</span
          >
          <Icon
            name="material-symbols:code-blocks-outline"
            class="hidden md:block"
            size="48"
          />
        </div>
        <section class="mt-8">
          <div class="description my-5 md:my-2">
            Hi, I’m Owen, a software developer. I collaborate on projects
            through
            <span class="font-medium">Co.Lab Software Solutions</span>, where we
            take on freelance and contract-based work. Co.Lab stands for
            collaborative problem-solving, where your ideas and our code come
            together.
          </div>
          <div class="description my-5 md:my-2">
            Whether it’s web, mobile, or desktop development, we’re open to
            working with you. We can also help with deployments, data analysis
            and visualization, and even AI or machine learning projects.
          </div>
          <div class="text-center">
            <span class="description">
              Here are some of the main technologies we work with:
            </span>
          </div>
          <div class="my-1 flex items-center justify-center">
            <div class="bg-soft-white p-3">
              <Tooltip tooltip-text="Electron">
                <a href="https://www.electronjs.org/" target="_blank">
                  <Icon name="devicon:electron" size="48" class="mx-1" />
                </a>
              </Tooltip>
              <Tooltip tooltip-text="Ionic">
                <a href="https://ionicframework.com/" target="_blank">
                  <Icon name="devicon:ionic" size="48" class="mx-1" />
                </a>
              </Tooltip>
            </div>
          </div>
          <div class="my-1 flex items-center justify-center">
            <div class="bg-soft-white p-3">
              <Tooltip tooltip-text="Python">
                <a href="https://www.python.org/" target="_blank">
                  <Icon name="devicon:python" size="48" class="mx-1" />
                </a>
              </Tooltip>
              <Tooltip tooltip-text="Flask">
                <a href="https://flask.palletsprojects.com/" target="_blank">
                  <Icon name="devicon:flask" size="48" class="mx-1" />
                </a>
              </Tooltip>
              <Tooltip tooltip-text="FastAPI">
                <a href="https://fastapi.tiangolo.com/" target="_blank">
                  <Icon name="devicon:fastapi" size="48" class="mx-1" />
                </a>
              </Tooltip>
              <Tooltip tooltip-text="PostgreSQL">
                <a href="https://www.postgresql.org/" target="_blank">
                  <Icon name="devicon:postgresql" size="48" class="mx-1" />
                </a>
              </Tooltip>
            </div>
          </div>
          <div class="my-1 flex items-center justify-center">
            <div class="bg-soft-white p-3">
              <Tooltip tooltip-text="Vue">
                <a href="https://vuejs.org/" target="_blank">
                  <Icon
                    name="devicon:vuejs"
                    size="48"
                    class="mx-1 cursor-pointer"
                  />
                </a>
              </Tooltip>
              <Tooltip tooltip-text="Nuxt">
                <a href="https://nuxtjs.org/" target="_blank">
                  <Icon name="devicon:nuxtjs" size="48" class="mx-1" />
                </a>
              </Tooltip>
              <Tooltip tooltip-text="Tailwind">
                <a href="https://tailwindcss.com/" target="_blank">
                  <Icon name="devicon:tailwindcss" size="48" class="mx-1" />
                </a>
              </Tooltip>
              <Tooltip tooltip-text="Typescript">
                <a href="https://www.typescriptlang.org/" target="_blank">
                  <Icon name="devicon:typescript" size="48" class="mx-1" />
                </a>
              </Tooltip>
            </div>
          </div>
          <div class="my-1 flex items-center justify-center">
            <div class="bg-soft-white p-3">
              <Tooltip tooltip-text="Docker">
                <a href="https://www.docker.com/" target="_blank">
                  <Icon name="devicon:docker" size="48" class="mx-1" />
                </a>
              </Tooltip>
              <Tooltip tooltip-text="AWS">
                <a href="https://aws.amazon.com/" target="_blank">
                  <Icon
                    name="devicon:amazonwebservices-wordmark"
                    size="48"
                    class="mx-1"
                  />
                </a>
              </Tooltip>
              <Tooltip tooltip-text="Gitlab">
                <a href="https://gitlab.com/" target="_blank">
                  <Icon name="devicon:gitlab" size="48" class="mx-1" />
                </a>
              </Tooltip>
            </div>
          </div>
          <div class="description my-2">
            If your project uses technologies not listed above, feel free to
            reach out.
            <span class="font-medium">Co.Lab Software Solutions</span> is open
            to learning and adapting to your needs. You can email us at
            <a
              class="text-blue-500 hover:underline"
              href="https://mail.google.com/mail/?view=cm&to=contact.colab@gmail.com"
              target="_blank"
            >
              contact.colab@gmail.com
            </a>
            or fill out the form by clicking the button below. We would love to
            hear about what you are building.
          </div>
          <div class="mt-5 text-center">
            <a href="https://forms.gle/nLA6chjSr4Fa7yHk6" target="_blank">
              <button class="btn-primary">Get Started</button>
            </a>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>
<script setup lang="ts">
import Tooltip from "@/components/commons/Tooltip.vue";

useHead({
  title: "Let's Co.Lab",
});
</script>
