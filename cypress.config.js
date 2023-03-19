const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://cookidoo.co.uk",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
