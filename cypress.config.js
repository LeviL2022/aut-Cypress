const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'im9c9d',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
