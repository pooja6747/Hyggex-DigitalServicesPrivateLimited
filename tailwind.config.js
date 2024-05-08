module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#f9f9f9", 400: "#c4c4c4", 700: "#696671", 800: "#3a3740", 900: "#28262c" },
        white: { A700: "#ffffff" },
        indigo: { "900_02": "#06286e" },
        blue_gray: { "900_01": "#202b37" },
      },
      boxShadow: {},
      backgroundImage: {
        gradient: "linear-gradient(180deg, #06286e,#164ec0)",
        gradient1: "linear-gradient(224deg, #071844,#071844,#2d87b6,#2d87b6)",
        gradient2: "linear-gradient(224deg, #051a91,#061c93,#2284f1,#1f80eb)",
      },
      fontFamily: { lato: "Lato", inter: "Inter", montserrat: "Montserrat" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
