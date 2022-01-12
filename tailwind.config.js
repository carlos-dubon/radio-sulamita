module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: { "rs-primary": "#AC8A74", "rs-secondary": "#191919" } },
  },
  plugins: [],
};
