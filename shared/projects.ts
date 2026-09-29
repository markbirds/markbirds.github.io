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
      "/projects/spartner/2-home.png",
      "/projects/spartner/1-login.png",
      "/projects/spartner/3-rooms.png",
      "/projects/spartner/4-messages.png",
      "/projects/spartner/5-profile.png",
      "/projects/spartner/6-settings.png",
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
      "/projects/conversie/2-home.png",
      "/projects/conversie/4-conversation.png",
      "/projects/conversie/3-dark-mode.png",
      "/projects/conversie/1-apikey.png",
    ],
    architecture: "/projects/conversie-architecture.png",
    liveUrl: "https://conversie.owenfalculan.com/",
    sourceUrl: "https://gitlab.com/fowenpatrick/conversie",
  },
  {
    title: "Resumie",
    kind: "app",
    featured: true,
    period: "Sept 2026",
    overview:
      "Resumie is an AI resume builder. Upload the resume you already have or start from blank, fill in the fields, and watch the page take shape beside them. The model reads the whole page, scores it, and suggests fixes you accept one at a time. It can rewrite a bullet too, and where it does not know a number it asks you instead of making one up. Your name and contact details are swapped for placeholders before any text goes to the model, and your resumes stay in your browser. You paste your own Groq or OpenRouter key. There is no login.",
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
      "/projects/resumie/1-home.png",
      "/projects/resumie/2-upload.png",
      "/projects/resumie/3-editor.png",
      "/projects/resumie/4-review.png",
      "/projects/resumie/5-rewrite.png",
      "/projects/resumie/6-api-keys.png",
    ],
    architecture: "/projects/resumie-architecture.png",
    liveUrl: "https://resumie.owenfalculan.com/",
    sourceUrl: "https://gitlab.com/fowenpatrick/resumie",
  },
  {
    title: "Grammarie",
    kind: "app",
    featured: true,
    period: "Sept 2026",
    overview:
      "Grammarie is an AI grammar checker with guardrails. Paste what you are about to send, in a chat or an email, and get it back corrected, with one line per fix explaining why, and the same message said three ways: formal, casual and concise. The model is only allowed to correct grammar. It gets your text as data, can only answer in a fixed shape, and code grades every reply before you see it, so a question or an instruction hidden in your text gets corrected, not answered. You paste your own Groq key. Nothing is stored and there is no login. My first app on Next.js rather than Nuxt.",
    tech: [
      "TypeScript",
      "Next.js 16",
      "React 19",
      "Groq",
      "Zod",
      "Tailwind CSS",
      "Vercel",
    ],
    screenshots: ["/projects/grammarie/1-check.png"],
    architecture: "/projects/grammarie-architecture.png",
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
      "/projects/pinoy-henyo/1-home.png",
      "/projects/pinoy-henyo/2-play-with-friend-mode.png",
      "/projects/pinoy-henyo/3-play-with-friend-setup.png",
      "/projects/pinoy-henyo/4-play-with-friend-guess.png",
      "/projects/pinoy-henyo/5-play-with-friend-hint.png",
      "/projects/pinoy-henyo/6-play-with-friend-correct.png",
      "/projects/pinoy-henyo/7-play-with-friend-win.png",
      "/projects/pinoy-henyo/8-solo-mode.png",
    ],
    architecture: "/projects/pinoy-henyo-architecture.png",
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
      "/projects/laberinto/1-home.png",
      "/projects/laberinto/2-lobby.png",
      "/projects/laberinto/3-laban-laban.png",
      "/projects/laberinto/4-sama-sama.png",
    ],
    architecture: "/projects/laberinto-architecture.png",
    liveUrl: "https://laberinto.owenfalculan.com/",
    sourceUrl: "https://gitlab.com/pinoy-games/laberinto",
  },
];

export const featuredProjects = PROJECTS.filter((project) => project.featured);
