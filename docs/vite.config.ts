// docs/vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["@vueuse/core", "@vueuse/shared"],
  },
  ssr: {
    noExternal: ["@vueuse/core", "@vueuse/shared"],
  },
});
