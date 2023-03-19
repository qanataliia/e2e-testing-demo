const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    failOnStatusCode: false,
    baseUrl: "https://cookidoo.co.uk",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
