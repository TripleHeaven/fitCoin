module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: false,
  theme: {
    colors: {
      gray: {
        100: "#FFFFFF",
        200: "#30CFD0",
        300: "#330867",
        400: "#1D2124",
        500: "#C1D1D6",
        600: "#819297",
        700: "#000000",
      },
      black: "black",
    },
    fontSize: {
      "7xl": "4rem",
      "6xl": "2.75rem",
      "5xl": "2rem",
      "4xl": "1.125rem",
    },
    fontFamilty: {
      main: "Segoe UI, Arial, sans-serif",
    },
    keyframes: {
      revealLeft: {
        "0%": { transform: "translate3d(20px,0,0)", opacity: 0 },
        "100%": { transform: "translate3d(0px,0,0)", opacity: 1 },
      },
      revealOpacity: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
    animation: {
      revealLeft: "revealLeft 0.2s ease-out",
      revealOpacity: "revealOpacity 0.3s ease-out",
    },

    fill: (theme) => ({
      "gray-100": theme("colors.gray.100"),
      "gray-200": theme("colors.gray.200"),
      "gray-300": theme("colors.gray.300"),
      "gray-400": theme("colors.gray.400"),
      "gray-500": theme("colors.gray.500"),
      "gray-600": theme("colors.gray.600"),
      "gray-700": theme("colors.gray.700"),
    }),
    borderRadius: {
      none: "0",
      DEFAULT: "8px",
    },
  },
};
