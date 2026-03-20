/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "google-sans-regular": ["Google-Sans-Flex-Regular"],
      },
      colors: {
        timberwolf: "#dfddd1",
        "palm-leaf": "#799852",
        "dark-moss": "#47622b",
        olivine: "#9fb877",
      },
    },
  },
  plugins: [],
};
