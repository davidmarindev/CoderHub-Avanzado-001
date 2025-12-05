const express = require("express");
// Si tienes controladores, impórtalos aquí con require
const ProductRoutes = require("./products.routes.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Background Jobs API");
});

// router.use("/example", require("../controllers/index.js")); // Descomenta si tienes un controlador ejemplo
router.use("/products", ProductRoutes);

module.exports = router;
