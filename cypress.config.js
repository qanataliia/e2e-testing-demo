const { defineConfig } = require("cypress");

module.exports = defineConfig({
  testingType: "e2e",
  e2e: {
    failOnStatusCode: false,
    baseUrl: "https://cookidoo.co.uk",
    supportFile: "cypress/support/commands.js",
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
