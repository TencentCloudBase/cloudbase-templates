export default {
  ssr: true,

  server: {
    port: 5000, // default: 3000
    host: "127.0.0.1" // default: localhost
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/cloudbase", mode: "client" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  router: {
    base: "/nuxt-ssr"
  },
  /*
   ** Build configuration
   */
  build: {
    publicPath: "/nuxt-ssr/_nuxt/",
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
