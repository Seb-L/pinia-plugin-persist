// @ts-check
import path from "path";

/** @type {import('@nuxt/types').Module<{ disableVuex?: boolean}>} */
export default function NuxtPiniaPersistModule() {
  this.addPlugin({
    src: path.resolve(__dirname, "plugin.js"),
    fileName: "pinia-plugin-persist.js",
  });
}
