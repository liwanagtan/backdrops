module.exports = {
  purge: ['src/app.html', 'src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        fontFamily: {
          'body': ['VisbyRoundCF'],
          'heading': ['Oswald'],
        },
        fontSize: {
          'tiny': '0.702rem',
          'mini': '0.79rem',
          'small': '0.889rem',
          'base': '1rem',
          'base2': '1.602rem',
          'base3': '1.424rem',
          'base4': '1.266rem',
          'base5': '1.125rem',
        },
        transitionProperty: {
          'spacing': 'margin, padding',
        }
      }
    },
  extend: {},
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
