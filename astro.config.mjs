import { defineConfig, sessionDrivers } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";
import { fileURLToPath } from "node:url";

export default defineConfig({
  site: "https://satococoa.dev",
  adapter: cloudflare({
    imageService: "compile",
    inspectorPort: false,
    prerenderEnvironment: "node",
  }),
  integrations: [icon()],
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
