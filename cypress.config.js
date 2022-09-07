
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    //ambiente de teste
    baseUrl: 'https://buger-eats-qa.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      reporter: 'mochawesome'
    },
   
  }, 
  
}); 




