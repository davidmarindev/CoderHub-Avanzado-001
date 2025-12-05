require("dotenv").config({
  path: require("path").resolve(__dirname, "./.env"),
});
require("./jobs/workers/products.worker.js");
require("./jobs/workers/email.worker.js");
// Los workers se inician al requerir sus módulos
console.log("Workers de background jobs iniciados.");
