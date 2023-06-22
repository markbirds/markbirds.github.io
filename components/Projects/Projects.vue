<template>
  <section
    class="mw-full mx-4 my-16 cursor-default text-gray-600 md:mx-auto md:mt-24 md:w-[80%] lg:w-[60%]"
  >
    <div
      class="rounded-lg bg-gradient-to-r from-slate-600 px-4 py-3 text-xl font-bold uppercase text-slate-100"
    >
      GitHub
    </div>
    <section class="my-2 grid w-full gap-2 md:grid-cols-3">
      <section
        class="rounded-lg bg-slate-100 transition duration-500 hover:bg-slate-200"
      >
        <div class="bg-slate-200 p-3">
          <div>Public repositories: {{ profile.public_repos }}</div>
          <div>Public gists: {{ profile.public_gists }}</div>
        </div>
      </section>
      <section
        class="rounded-lg bg-slate-100 transition duration-500 hover:bg-slate-200"
      >
        <div class="bg-slate-200 p-3">
          <div>Followers: {{ profile.followers }}</div>
          <div>Following: {{ profile.following }}</div>
        </div>
      </section>
      <section
        class="rounded-lg bg-slate-100 transition duration-500 hover:bg-slate-200"
      >
        <div class="bg-slate-200 p-3">
          <div>Date created: {{ formatDate(profile.created_at) }}</div>
          <div>Date updated: {{ formatDate(profile.updated_at) }}</div>
        </div>
      </section>
    </section>
    <section class="overflow-x-auto">
      <table
        class="w-full table-auto border-collapse border-2 border-slate-100 bg-slate-50 p-2 text-left"
      >
        <thead>
          <tr>
            <th class="border-2 border-slate-100 px-3 py-4">Project name</th>
            <th class="border-2 border-slate-100 px-3 py-4">Language</th>
            <th class="border-2 border-slate-100 px-3 py-4">Created at</th>
            <th class="border-2 border-slate-100 px-3 py-4">Updated at</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="project of projects"
            :key="project.id"
            class="cursor-pointer"
            @click="openProject(project.html_url)"
          >
            <td class="border-2 border-slate-100 p-3">{{ project.name }}</td>
            <td class="border-2 border-slate-100 p-3">
              {{ project.language }}
            </td>
            <td class="border-2 border-slate-100 p-3">
              {{ formatDate(project.created_at) }}
            </td>
            <td class="border-2 border-slate-100 p-3">
              {{ formatDate(project.updated_at) }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="my-4 flex cursor-pointer justify-center">
      <div>
        <Icon
          name="iconamoon:arrow-left-6-circle"
          size="32"
          :color="currentPage === 1 ? '#94a3b8' : '#64748b'"
          @click="prevPage()"
        />
        <span class="mx-2">Page {{ currentPage }}/{{ lastPage }}</span>
        <Icon
          name="iconamoon:arrow-right-6-circle"
          size="32"
          :color="currentPage === lastPage ? '#94a3b8' : '#64748b'"
          @click="nextPage()"
        />
      </div>
    </section>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";

const dayjs = useDayjs();
const currentPage = ref(1);
const lastPage = ref(1);
const projects = ref([]);
const profile = ref({});
const paginateBy = 10;

const formatDate = (date) => {
  return dayjs(date).format("MMMM D, YYYY");
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    getProjects(currentPage.value);
  }
};

const nextPage = () => {
  if (currentPage.value < lastPage.value) {
    currentPage.value++;
    getProjects(currentPage.value);
  }
};

const getProjects = async (page = 1) => {
  const { data: results } = await useFetch(
    "https://api.github.com/users/markbirds/repos",
    {
      query: { per_page: paginateBy, page },
    }
  );
  projects.value = results.value;
};

const openProject = (url) => {
  window.open(url);
};

onMounted(async () => {
  const { data: result } = await useFetch(
    "https://api.github.com/users/markbirds"
  );

  profile.value = result.value;
  lastPage.value = Math.ceil(profile.value.public_repos / paginateBy);
  await getProjects();
});
</script>
