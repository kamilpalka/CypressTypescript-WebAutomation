import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://automationintesting.online/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
