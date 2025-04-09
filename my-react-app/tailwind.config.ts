module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx,html}', // Tailwind will scan all these files for classes
    ],
    darkMode: 'class', // This enables dark mode based on a class (usually 'dark')
    theme: {
      extend: {
        // You can extend the theme with custom colors, fonts, etc.
        colors: {
          darkBackground: '#1D1932', // Example of a custom dark background color
          lightBackground: '#FFFFFF', // Example of a custom light background color
        },
      },
    },
    plugins: [],
  };
  