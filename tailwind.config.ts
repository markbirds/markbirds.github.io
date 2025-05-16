import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D3557",
          dark: "#162840",
        },
        secondary: "#457B9D",
        text: "#1D3557",
        card: {
          DEFAULT: "#F1FAEE",
          dark: "#A8DADC",
        },
      },
      fontFamily: {
        quicksand: "Quicksand",
      },
    },
  },
};
