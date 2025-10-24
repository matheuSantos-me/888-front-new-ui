const nodeExternals = require("webpack-node-externals");
import path from "path";
import fs from "fs";

module.exports = {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "돌직구",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
      {
        "http-equiv": "Content-Security-Policy",
        content: "upgrade-insecure-requests",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon-yellow20.ico" },
    ],
    script: [
      { src: "/js/popper.min.js" },
      { src: "/js/jquery-3.3.1.slim.min.js" },
      { src: "/js/bootstrap.min.js" },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: "~/components/loading.vue",
  /*
   ** Global CSS
   */
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "element-ui/lib/theme-chalk/display.css",
    "assets/css/index.scss",
    "assets/css/animation.css", // 요놈은 매번 페이지 절환할때마다 애니메션효과를 주는 css파일이예요.
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/element-ui",
    "~plugins/i18n.js",
    "~plugins/cookies.js",
    { src: "~/plugins/nuxt-client-init.js", ssr: false },
    { src: "~plugins/feathers.js", injectAs: "feathers" },
    { src: "~plugins/vue-fullscreen.js", ssr: false },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "nuxt-material-design-icons",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    filenames: {
      css: ({ isDev }) => (isDev ? "[name].css" : "common.[contenthash].css"),
      manifest: ({ isDev }) => (isDev ? "[name].js" : "manifest.[hash].js"),
      vendor: ({ isDev }) => (isDev ? "[name].js" : "common.[chunkhash].js"),
      app: ({ isDev }) => (isDev ? "[name].js" : "app.[chunkhash].js"),
      chunk: ({ isDev }) => (isDev ? "[name].js" : "[name].[chunkhash].js"),
      img: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "[path][contenthash:7].[ext]",
      font: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "[path][contenthash:7].[ext]",
    },
  },
  router: {
    middleware: ["i18n", "user-agent", "check-auth", "visits"],
    extendRoutes(routes, resolve) {},
  },
  env: {
    HOST: process.env.HOST || "bin.sportcore-qor1.com", // backend api url
    PORT: process.env.PORT || 443,
    base_api: "https://bin.sportcore-qor1.com",
    captchaId: "ba701e9d8a6f4ace5834a9ab5ff917a4",
    coinAgentCode: "t707bet",
    coinUrl: "707bet.oxomarket.net",
    trackerId: "62ac5452d03706f6fe464139",
    key: "Ub%41c4!ztjdCZck5Uddddq}AbRfBmbTi>!oRm",
    pokerID: "355",
    backendPrefix: "bin",
  },
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "ssl/server.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "ssl/server.crt")),
    },
  },
};
