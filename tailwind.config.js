/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        regular: 'DMSans_400Regular',
        medium: 'DMSans_500Medium',
        semibold: 'DMSans_600SemiBold',
        bold: 'DMSans_700Bold',
      }
    },
  },
  plugins: [],
}

