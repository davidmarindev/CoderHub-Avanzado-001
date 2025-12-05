const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const routes = require("./routes");
const redisClient = require("./config/redis");
require("./jobs/workers/products.worker");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database
sequelize
  .sync()
  .then(() => {
    console.log("Database connected and synced");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Set up routes
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
