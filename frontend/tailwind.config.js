
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",  // Menambahkan semua file Vue dan JS dalam src
  ],
  theme: {
    extend: {
      colors: {
        red: {
          600: '#f87171',
          500: '#fca5a5',
        },
        black: '#000000',
        white: '#ffffff',
        gray: {
          700: '#374151',
          300: '#d1d5db',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

