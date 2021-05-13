const META_URL = "https://pinia.esm.dev";
const META_TITLE = "Pinia Plugin Persist";
const META_DESCRIPTION =
  "Persist pinia state data in sessionStorage or other storages.";
const META_IMAGE = "https://pinia.esm.dev/social.png";

module.exports = {
  title: "Pinia Plugin Persist",
  lang: "en-US",
  description: "Persist pinia state data in sessionStorage or other storages.",
  head: [
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: META_URL }],
    ["meta", { property: "og:title", content: META_TITLE }],
    ["meta", { property: "og:description", content: META_DESCRIPTION }],
    ["meta", { property: "og:image", content: META_IMAGE }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:url", content: META_URL }],
    ["meta", { property: "twitter:title", content: META_TITLE }],
    ["meta", { property: "twitter:description", content: META_DESCRIPTION }],
    ["meta", { property: "twitter:image", content: META_IMAGE }],
  ],
  base: "/pinia-plugin-persist/",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/get-started.html" },
      { text: "Github", link: "https://github.com/Seb-L/pinia-plugin-persist" },
    ],

    sidebar: [
      "/",
      "/basic-usage.html",
      {
        title: "Advanced Usage",
        children: [
          "/advanced/strategies.html",
          "/advanced/custom-key.html",
          "/advanced/partial-state.html",
          "/advanced/custom-storage.html",
        ],
      },
    ],
  },
};
