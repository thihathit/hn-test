import { defineConfig } from "astro/config"
import netlify from "@astrojs/netlify/functions"

import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
    integrations: [vue()],
    output: "server",
    adapter: netlify(),
})
