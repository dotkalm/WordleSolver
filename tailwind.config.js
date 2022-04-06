module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./dist/popup.html"],
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
      extend: {
          minHeight: {
              '4v': '4vh',
          },
          scale: {
              '250': '2.50',
          }
      },
  },
  plugins: [],
}
