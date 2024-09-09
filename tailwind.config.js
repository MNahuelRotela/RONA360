/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      // puntos de interruccion tamaño de pantalla
      "xs": { max: "439px"}, // móvil
      "sm": { max: "640px", min:"440px" }, // móvil
      "md": { min: "641px", max: "768px" }, // tablet
      "lg": { min: "769px", max: "1024px" }, // laptop
      "xl": { min: "1025px", max: "1280px" }, // desktop
      "2xl": { min: "1281px" }, // desktop
    },
    fontSize: {
      // tamaños de letras con su espaciador entre lineas
      "ss": ["0.675rem", { lineHeight: "1.0" }],
      "sm": ["0.875rem", { lineHeight: "1.1" }],
      "base": ["1rem", { lineHeight: "1.2" }],
      "lg": ["1.125rem", { lineHeight: "1.3" }],
      "xl": ["1.25rem", { lineHeight: "1.4" }],
      "2xl": ["1.5rem", { lineHeight: "1.5" }],
      "3xl": ["1.875rem", { lineHeight: "1.5" }],
      "4xl": ["2.25rem", { lineHeight: "1.6" }],
      "4xla": ["2.25rem", { lineHeight: "1.4" }],
      'a4xl': '48px',
      'a5xl': '53px',
      'al': '16px',
      'axl': '18px',
      'a2xl': '20px',
      'a6xl': '60px',
    },
    extend: {
      colors: {
        "green-btn-nav": "#8DC73F",
        "light_gray": "#484848",
        "dark_gray": "#1E2F2D",
        "white": "#FFFFFF",
        "d_green": "#385019",
        "ligth-yellow": "#FDE5AE",
        "dark-yellow": "#FBBD35",
        "black": "#000000",
        "ayellow": "#FBBD35",
        "textdisabled": "#AFAFAF",
        "mustard-btn-agenda": "#FBBD35",
        "principal_text": "#1F3532"
      },
      width: {
        "w-100": "540px",
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        'blink-1': 'blink 1.5s infinite 0s',
        'blink-2': 'blink 1.5s infinite 0.5s',
        'blink-3': 'blink 1.5s infinite 1s',
      },
    },
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    textShadow: {
      'custom': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
    }
  },
  plugins: [],
};
