// Site-wide constants: SEO defaults, contact links, social profiles

export const SITE_URL = "https://www.owenfalculan.com";
export const SITE_NAME = "Owen Patrick Falculan";

// Used in nuxt.config (SSR) and useHomePageSeo (client)
export const DEFAULT_DESCRIPTION =
  "Owen Patrick Falculan, senior software engineer at Billease.";

export const DEFAULT_TITLE = `${SITE_NAME} | Senior Software Engineer`;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/about-me-portfolio.webp`;

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/owen-patrick-falculan/";

export const STRAVA_URL = "https://www.strava.com/athletes/148126157";

export const CONTACT_EMAIL = "fowenpatrick@gmail.com";

export const CONTACT_GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodeURIComponent("Let's collaborate")}`;

// JSON-LD sameAs — keep in sync with visible social links
export const SOCIAL_PROFILES = [LINKEDIN_URL, STRAVA_URL];
