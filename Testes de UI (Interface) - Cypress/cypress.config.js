const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     
    },
    reporter: "mochawesome", // Define o reporter como mochawesome
    reporterOptions: {
      reportDir: "cypress/reports",  // Diretório onde os relatórios serão armazenados
      overwrite: true,               // Substitui relatórios existentes
      html: true,                    // Gera o relatório em HTML
      json: true                     // Gera o relatório em JSON
    }
  }
});