// const withNextra = require("nextra")({
//   theme: "nextra-theme-docs",
//   themeConfig: "./theme.config.jsx",
// });

// module.exports = withNextra();

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  images: {
    domains: [], // Add domains here if your images are hosted externally
    path: "/_next/image",
    loader: "default", // This is typically 'default', adjust if you are using a different image loader
  },
});
