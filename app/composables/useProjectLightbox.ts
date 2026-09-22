import type { Project } from "~~/shared/projects";

export function useProjectLightbox() {
  const images = ref<string[]>([]);
  const index = ref(0);
  const title = ref("");

  function open(srcs: string[], startIndex = 0, heading = "") {
    title.value = heading;
    index.value = startIndex;
    images.value = srcs;
  }

  function openGallery(project: Project) {
    open(project.screenshots, 0, project.title);
  }

  function openArchitecture(project: Project) {
    if (!project.architecture) return;
    open([project.architecture], 0, `${project.title} architecture`);
  }

  function close() {
    images.value = [];
  }

  function next() {
    index.value = (index.value + 1) % images.value.length;
  }

  function prev() {
    index.value = (index.value - 1 + images.value.length) % images.value.length;
  }

  function onKeydown(event: KeyboardEvent) {
    if (!images.value.length) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowRight") next();
    if (event.key === "ArrowLeft") prev();
  }

  onMounted(() => window.addEventListener("keydown", onKeydown));
  onUnmounted(() => window.removeEventListener("keydown", onKeydown));

  return {
    images,
    index,
    title,
    open,
    openGallery,
    openArchitecture,
    close,
    next,
    prev,
  };
}
