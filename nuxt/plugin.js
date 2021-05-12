// @ts-check
// @ts-ignore
import piniaPersist from "pinia-plugin-persist";

/** @type {import('@nuxt/types').Plugin} */
export default ({ app }) => {
  app.pinia?.use(piniaPersist);
};
