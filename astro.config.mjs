// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "",
      description: "Documentation for the API Playbook project.",
      logo: {
        src: "./src/assets/logo.png",
        alt: "API Playbook Logo",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/platformable/apiplaybook",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
            { label: "Testing Guide", slug: "guides/testing" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
})
