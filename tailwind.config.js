/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  darkMode: "class",
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",flowbite.content(),"./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(),require("tw-elements/plugin.cjs")],
}

