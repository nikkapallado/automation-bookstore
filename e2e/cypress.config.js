const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: "junit",
  reporterOptions: {
    "mochaFile": "results/TEST-[hash].xml"
  },
  eyesIsDisabled: false,
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  eyesRemoveDuplicateTests: false,
  universalDebug: false,
  appliConfFile: {
    appName: 'Automation Bookstore',
    batch: {
      id: 'cef30696-6092-4be4-9190-0b8d18aa9da2',
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 64256,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})


require('@applitools/eyes-cypress')(module);
