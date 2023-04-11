import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import tailwind from "tailwindcss.config";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
});
