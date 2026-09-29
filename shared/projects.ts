// Portfolio apps and games.
// `featured: true` = best apps, shown on the homepage. Everything is listed on /apps.

export type ProjectKind = "app" | "game";

export type Project = {
  title: string;
  kind: ProjectKind;
  featured: boolean;
  period?: string;
  overview: string;
  tech: string[];
  screenshots: string[];
  architecture?: string;
  liveUrl?: string;
  sourceUrl: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Spartner V2",
    kind: "app",
    featured: true,
    period: "Sept 2021 · Rebuilt June 2026",
    overview:
      "Spartner helps BatStateU students find study partners. You set up a profile, get matched with someone who shares your interests, chat in real time, join study rooms, and stay connected with people you want to study with again. V2 is a full rebuild of the app I first shipped in 2021. Matching is faster, you can chat in real time, and the site is easier to use.",
    tech: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Socket.IO",
      "PostgreSQL",
      "Redis",
      "TaskIQ",
      "Supabase",
      "Nuxt 4",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
    ],
    screenshots: [
      "/projects/spartner/2-home.webp",
      "/projects/spartner/1-login.webp",
      "/projects/spartner/3-rooms.webp",
      "/projects/spartner/4-messages.webp",
      "/projects/spartner/5-profile.webp",
      "/projects/spartner/6-settings.webp",
    ],
    architecture: "/projects/spartner-architecture.svg",
    sourceUrl: "https://gitlab.com/fowenpatrick/spartner",
  },
  {
    title: "Conversie",
    kind: "app",
    featured: true,
    period: "July 2026",
    overview:
      "Conversie is an English practice app. You pick a scene, like a restaurant or a job interview, then talk or type. An AI plays a character, replies, and can speak back. It also suggests corrections for your grammar. You paste your own Groq key. There is no login.",
    tech: [
      "TypeScript",
      "Nitro",
      "Groq",
      "Whisper",
      "TTS",
      "Nuxt 4",
      "Nuxt UI",
      "Tailwind CSS",
      "Docker",
    ],
    screenshots: [
      "/projects/conversie/2-home.webp",
      "/projects/conversie/4-conversation.webp",
      "/projects/conversie/3-dark-mode.webp",
      "/projects/conversie/1-apikey.webp",
    ],
    architecture: "/projects/conversie-architecture.webp",
    liveUrl: "https://conversie.owenfalculan.com/",
    sourceUrl: "https://gitlab.com/fowenpatrick/conversie",
  },
  {
    title: "Resumie",
    kind: "app",
    featured: true,
    period: "Sept 2026",
    overview:
      "Resumie is an AI resume builder. Upload the resume you already have, fill in the fields, and watch the page take shape beside them. The model scores the whole page and suggests fixes you accept one at a time. Your name and contact details never reach it, and your resumes stay in your browser. You paste your own Groq or OpenRouter key. There is no login.",
    tech: [
      "TypeScript",
      "Nitro",
      "Groq",
      "OpenRouter",
      "pdf.js",
      "Nuxt 4",
      "Nuxt UI",
      "Pinia",
      "Zod",
      "Tailwind CSS",
      "Vercel",
    ],
    screenshots: [
      "/projects/resumie/1-home.webp",
      "/projects/resumie/2-upload.webp",
      "/projects/resumie/3-editor.webp",
      "/projects/resumie/4-review.webp",
      "/projects/resumie/5-rewrite.webp",
      "/projects/resumie/6-api-keys.webp",
    ],
    architecture: "/projects/resumie-architecture.webp",
    liveUrl: "https://resumie.owenfalculan.com/",
    sourceUrl: "https://gitlab.com/fowenpatrick/resumie",
  },
  {
    title: "Speaksie",
    kind: "app",
    featured: true,
    period: "Sept 2026",
    overview:
      "Speaksie is a 30-day English speaking program for Filipino learners. One lesson a day, and you speak out loud in every step: warm up, shadow a passage, record a task, review what you flagged. You record the same passage on Day 1, 15 and 30 and hear the change. Everything stays in your browser. A Groq key is optional, for a coach note and three conversation days.",
    tech: [
      "TypeScript",
      "Nuxt 4",
      "Nuxt UI",
      "Pinia",
      "Zod",
      "Tailwind CSS",
      "Groq",
      "Vercel",
    ],
    screenshots: [
      "/projects/speaksie/1-program.png",
      "/projects/speaksie/2-warm-up.png",
      "/projects/speaksie/3-shadow.png",
      "/projects/speaksie/4-speak.png",
      "/projects/speaksie/5-review.png",
      "/projects/speaksie/6-day-done.png",
      "/projects/speaksie/7-dark-mode.png",
    ],
    architecture: "/projects/speaksie-architecture.png",
    liveUrl: "https://speaksie.owenfalculan.com/",
    sourceUrl: "https://gitlab.com/fowenpatrick/speaksie",
  },
  {
    title: "Grammarie",
    kind: "app",
    featured: true,
    period: "Sept 2026",
    overview:
      "Grammarie is an AI grammar checker with guardrails. Paste what you are about to send and get it back corrected, with a note per fix and three rewrites: formal, casual and concise. The model can only correct grammar, and code checks every reply, so a hidden instruction is corrected, not followed. You paste your own Groq key. There is no login and nothing is stored.",
    tech: [
      "TypeScript",
      "Next.js 16",
      "React 19",
      "Groq",
      "Zod",
      "Tailwind CSS",
      "Vercel",
    ],
    screenshots: ["/projects/grammarie/1-check.webp"],
    architecture: "/projects/grammarie-architecture.webp",
    liveUrl: "https://grammarie.owenfalculan.com/",
    sourceUrl: "https://gitlab.com/fowenpatrick/grammarie",
  },
  {
    title: "Pinoy Henyo",
    kind: "game",
    featured: true,
    period: "May 2026",
    overview:
      "Pinoy Henyo brings the classic Filipino word-guessing party game to the web. Play solo on one device or join a real-time room with a friend, pick a category, and race to guess the word before time runs out. I built it so my girlfriend and I would have something fun to play together.",
    tech: [
      "TypeScript",
      "Nitro",
      "WebSockets",
      "SQLite",
      "Nuxt 4",
      "Nuxt UI",
      "Tailwind CSS",
      "Docker",
    ],
    screenshots: [
      "/projects/pinoy-henyo/1-home.webp",
      "/projects/pinoy-henyo/2-play-with-friend-mode.webp",
      "/projects/pinoy-henyo/3-play-with-friend-setup.webp",
      "/projects/pinoy-henyo/4-play-with-friend-guess.webp",
      "/projects/pinoy-henyo/5-play-with-friend-hint.webp",
      "/projects/pinoy-henyo/6-play-with-friend-correct.webp",
      "/projects/pinoy-henyo/7-play-with-friend-win.webp",
      "/projects/pinoy-henyo/8-solo-mode.webp",
    ],
    architecture: "/projects/pinoy-henyo-architecture.webp",
    liveUrl: "https://pinoy-henyo.owenfalculan.com/",
    sourceUrl: "https://gitlab.com/pinoy-games/pinoy-henyo",
  },
  {
    title: "Laberinto",
    kind: "game",
    featured: true,
    period: "Aug 2026",
    overview:
      "Laberinto is a real-time maze race for two to four players. In Laban-laban everyone races for the exit and the first one through wins the round. In Sama-sama the group has to collect every token before anyone can leave. You can also run a maze alone with a difficulty and a timer. Built to sit beside a voice call, the way we already played games with friends.",
    tech: [
      "TypeScript",
      "Nitro",
      "WebSockets",
      "Nuxt 4",
      "Nuxt UI",
      "Tailwind CSS",
      "Docker",
    ],
    screenshots: [
      "/projects/laberinto/1-home.webp",
      "/projects/laberinto/2-lobby.webp",
      "/projects/laberinto/3-laban-laban.webp",
      "/projects/laberinto/4-sama-sama.webp",
    ],
    architecture: "/projects/laberinto-architecture.webp",
    liveUrl: "https://laberinto.owenfalculan.com/",
    sourceUrl: "https://gitlab.com/pinoy-games/laberinto",
  },
];

export const featuredProjects = PROJECTS.filter((project) => project.featured);

// The 960px copy of the first screenshot, for cards and the /apps list; the lightbox loads the full one.
export function coverImage(project: Project): string | undefined {
  return project.screenshots[0]?.replace(/\.webp$/, "-card.webp");
}
