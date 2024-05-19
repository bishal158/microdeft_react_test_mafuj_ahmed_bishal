/** @type {import('tailwindcss').Config} */
export default {
  content: ["./rootLayout.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        lightBackgroud: "rgba(var(--light-bg))",
        darkBackground: "rgba(var(--dark-bg))",
        "modal-backdrop": "rgba(0, 0, 0, 0.5)",
        lightTextColor: "rgba(var(--light-text))",
        darkTextColor: "rgba(var(--dark-text))",
        grayTextColor: "rgba(var(--gray-text))",
        pinkTextColor: "rgba(var(--pink-text))",
        activeLinkLightBackground: "rgba(var(--active-link-light-bg))",
        activeLinkDarkBackground: "rgba(var(--active-link-dark-bg))",
        switchModeLightBg: "rgba(var(--switch-mode-light-bg))",
        switchModeDarkBg: "rgba(var(--switch-mode-dark-bg))",
      },
    },
  },
  plugins: [],
};
