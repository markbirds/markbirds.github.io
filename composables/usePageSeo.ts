import type { MaybeRefOrGetter } from "vue";
import { computed, toValue } from "vue";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/seo";

type PageSeoOptions = {
  title: MaybeRefOrGetter<string>;
  description?: MaybeRefOrGetter<string>;
  path?: MaybeRefOrGetter<string>;
  ogImage?: MaybeRefOrGetter<string>;
};

// Updates title, description, OG/Twitter tags, and canonical URL
export function usePageSeo(options: PageSeoOptions) {
  const title = computed(() => toValue(options.title));
  const description = computed(
    () => toValue(options.description) ?? DEFAULT_DESCRIPTION,
  );
  const path = computed(() => toValue(options.path) ?? "/");
  const url = computed(
    () => `${SITE_URL}${path.value === "/" ? "" : path.value}`,
  );
  const ogImage = computed(() => toValue(options.ogImage) ?? DEFAULT_OG_IMAGE);
  // Append site name unless the title already includes it
  const fullTitle = computed(() => {
    const value = title.value;
    return value.includes(SITE_NAME) ? value : `${value} | ${SITE_NAME}`;
  });

  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogUrl: url,
    ogType: "website",
    ogSiteName: SITE_NAME,
    ogImage,
    twitterCard: "summary_large_image",
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterImage: ogImage,
    robots: "index, follow",
  });

  useHead({
    link: computed(() => [{ rel: "canonical", href: url.value }]),
  });
}
