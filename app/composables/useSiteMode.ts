// Personal vs Portfolio toggle, shared across the app; every visit starts in Portfolio.
export type SiteMode = "personal" | "portfolio";

export function useSiteMode() {
  const mode = useState<SiteMode>("site-mode", () => "portfolio");

  const isPortfolio = computed(() => mode.value === "portfolio");
  const isPersonal = computed(() => mode.value === "personal");

  function setMode(next: SiteMode) {
    mode.value = next;
  }

  return { mode, setMode, isPortfolio, isPersonal };
}
