const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
    require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
    require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

//If using this approach, just call the key "setupNodeEvents" in the E2E configurations
// async function setupNodeEvents(on, config) {
//   await addCucumberPreprocessorPlugin(on, config);
//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin(config)],
//     })
//   );
//   return config;
// }

module.exports = defineConfig({
    projectId: "vsx8rv",
    video: true,
    trashAssetsBeforeRuns: true,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    videoUploadOnPasses: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 150000,
    env: {
        appUrl: "https://dev.makewithtech.com/",
        searchModelUrl: "https://models.makewithtech.com/models/"
    },
    e2e: {
        async setupNodeEvents(on, config) {
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });

            on("file:preprocessor", bundler);
            await addCucumberPreprocessorPlugin(on, config);

            return config;
        },
        specPattern: "cypress/e2e/features/*.feature",
        chromeWebSecurity: false,
    },
});