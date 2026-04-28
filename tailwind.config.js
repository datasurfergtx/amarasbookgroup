/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        armenian: {
          red: "#D90012",
          blue: "#0033A0",
          apricot: "#F2A800",
          cream: "#FFF8EC",
          ink: "#1B1B2F",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        body: ['"Nunito"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(27, 27, 47, 0.25)",
        pop: "0 14px 0 -4px rgba(217, 0, 18, 0.15), 0 20px 40px -20px rgba(27, 27, 47, 0.4)",
      },
      backgroundImage: {
        "cream-grain":
          "radial-gradient(rgba(27,27,47,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
