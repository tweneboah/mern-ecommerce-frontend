module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myColor: 'red',
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
    },
  },
  plugins: [],
};
