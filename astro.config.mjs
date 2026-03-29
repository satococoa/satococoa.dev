import { defineConfig, sessionDrivers } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import { fileURLToPath } from "node:url";

export default defineConfig({
  site: "https://satococoa.dev",
  adapter: cloudflare({
    imageService: "compile",
    inspectorPort: false,
    prerenderEnvironment: "node",
  }),
  session: {
    driver: sessionDrivers.lruCache(),
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
