// Homepage SEO — always portfolio/professional copy
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
} from "~~/shared/seo";

export function useHomePageSeo() {
  usePageSeo({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: "/",
    ogImage: DEFAULT_OG_IMAGE,
  });
}
