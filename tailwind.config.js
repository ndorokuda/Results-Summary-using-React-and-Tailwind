/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightRed: 'hsl(0, 100%, 67%)',
        orangeYellow: 'hsl(39, 100%, 56%)',
        greenTeal: 'hsl(166, 100%, 37%)',
        cobaltBlue: 'hsl(234, 85%, 45%)',

        lightRedLowOpacity: 'hsla(0, 100%, 67%,0.1)',
        orangeYellowLowOpacity: 'hsla(39, 100%, 56%,0.1)',
        greenTealLowOpacity: 'hsla(166, 100%, 37%,0.1)',
        cobaltBlueLowOpacity: 'hsla(234, 85%, 45%,0.1)',

        // Background
        lightSlateBlue: 'hsl(252, 100%, 67%)',
        lightRoyalBlue: 'hsl(241, 81%, 54%)',

        // Circle
        violetBlue: 'hsla(256, 72%, 46%, 1)',
        persianBlue: 'hsla(241, 72%, 46%, 0)',

        white: 'hsl(0, 0%, 100%)',
        paleBlue: 'hsl(221, 100%, 96%)',
        lightLavender: ' hsl(241, 100%, 89%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',
      },

      fontFamily: {
        bodyFont: ['Hanken Grotesk', 'Tahoma', 'arial'],
      },
    },
  },
  plugins: [],
};
