module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx,html}', 
    ],
    darkMode: 'class', 
    theme: {
      extend: {
        colors: {
          darkBackground: '#1D1932', // Example of a custom dark background color
          lightBackground: '#FFFFFF', // Example of a custom light background color
        },
      },
    },
    plugins: [],
  };
  