import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2dae52", // green
        secondary: "#2dae93", // light blue
        tertiary: "#fd5c63", // light red
        fontcolor: "#464646", //light gray
      },
    },
  },
  plugins: [],
};
export default config;
