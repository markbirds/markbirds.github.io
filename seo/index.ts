// Site-wide constants: SEO defaults, contact links, social profiles

export const SITE_URL = "https://www.owenfalculan.com";
export const SITE_NAME = "Owen Patrick Falculan";

// Used in nuxt.config (SSR) and useHomePageSeo (client)
export const DEFAULT_DESCRIPTION =
  "Owen Patrick Falculan, software developer. Builds and architects systems across backend, web, mobile, and desktop. Open for freelance and contract work.";

export const DEFAULT_TITLE = `${SITE_NAME} | Software Developer`;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/about-me-portfolio.webp`;

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/owen-patrick-falculan/";

export const CONTACT_EMAIL = "fowenpatrick@gmail.com";

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Project inquiry")}`;

// JSON-LD sameAs — keep in sync with visible social links
export const SOCIAL_PROFILES = [LINKEDIN_URL];
