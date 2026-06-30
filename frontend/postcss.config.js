module.exports = {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.js',
    },
    autoprefixer: {
      overrideBrowserslist: [
        'last 4 Chrome versions',
        'last 4 Firefox versions',
        'last 4 Safari versions',
        'last 4 Edge versions',
        'last 4 Opera versions',
        'last 4 Samsung Internet versions',
        'last 2 Android versions',
        'last 2 iOS versions',
      ],
    },
  },
}
