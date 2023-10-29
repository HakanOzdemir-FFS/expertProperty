module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
        serif: ["Figtree", "serif"],
      },
      colors: {
        "custom-gold": "#E4BB72",
        "custom-gold-2": "#D7AF5F",
        "custom-gray": "#363636",
        "custom-gray-2": "#5A5652",
        "custom-gray-3": "#5B5652",
        "custom-gray-4": "#F2F2F2",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, #FFF6AF 0%, #C7923E 33%, #DBB667 66%, #C5822A 100%)",
        "custom-gradient-2":
          "linear-gradient(139.94deg, #FFF6AF -11.33%, #C7923E -11.33%, #DBB667 49.37%, #C5822A 100%)",
      },
    },
  },
  plugins: [],
};
