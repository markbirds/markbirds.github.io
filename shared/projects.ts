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
    liveUrl: "https://laberinto.owenfalculan.com/",
    sourceUrl: "https://gitlab.com/pinoy-games/laberinto",
  },
];

export const featuredProjects = PROJECTS.filter((project) => project.featured);
