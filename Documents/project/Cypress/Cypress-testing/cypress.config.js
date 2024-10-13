const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");

module.exports = defineConfig({

  viewportWidth: 1280,
  viewportHeight: 720,
  screenshotsFolder:"cypress/reports/mochareports/assets",
  projectId: 'ubcyw7',
  "reporter": "cypress-multi-reporters",
  "reporterOptions":{
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions":{
      "reportDir": "cypress/reports/mocha",
      "quiet": true,
      "overwrite": false,
      "html": false,
      "json": true

    }
  },

  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
