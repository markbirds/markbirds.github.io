import type { SwiperContainer } from "swiper/element";
import type { Ref } from "vue";

// Replaces nuxt-swiper, whose plugin downloaded all of Swiper on every page; this loads it only when a carousel mounts.
export function useSwiper(
  containerRef: Ref<SwiperContainer | null>,
  options: SwiperContainer["swiper"]["params"],
) {
  onMounted(async () => {
    (await import("swiper/element/bundle")).register();
    // Vue rendered the element before Swiper existed, so init="false" is an attribute here; Swiper honors both forms.
    await nextTick();
    const el = containerRef.value;
    if (!el) return;
    Object.assign(el, options);
    el.initialize();
  });
}
