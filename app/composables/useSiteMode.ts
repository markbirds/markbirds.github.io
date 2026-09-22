// Personal vs Portfolio toggle — shared across the app
export type SiteMode = "personal" | "portfolio";

const STORAGE_KEY = "site-mode";

export function useSiteMode() {
  // Default portfolio; personal restored from localStorage on mount
  const mode = useState<SiteMode>("site-mode", () => "portfolio");

  const isPortfolio = computed(() => mode.value === "portfolio");
  const isPersonal = computed(() => mode.value === "personal");

  function setMode(next: SiteMode) {
    mode.value = next;
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, next);
    }
  }

  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "personal" || saved === "portfolio") {
      mode.value = saved;
    }
  });

  return { mode, setMode, isPortfolio, isPersonal };
}
