const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    failOnStatusCode: false,
    baseUrl: "https://cookidoo.co.uk",
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
  supportFile: 'cypress/fixtures/common.js'
});
