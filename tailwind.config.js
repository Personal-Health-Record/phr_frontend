/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      flex: {
        '3': '3 3 0%'
      },
      colors: {
        mainBlue: "#2CA3FA",
        lightGrey: "#9A9A9A",
        mainGrey: "#5F5F5F",
        superLightGrey: "#F5F5F5",
        lightBlue: "#4FB3FD33",
        mainGreen: "#5DBEA3",
      },
    },
  },
  plugins: [],
};
