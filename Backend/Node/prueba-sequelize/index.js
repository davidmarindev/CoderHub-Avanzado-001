const express = require("express");
const { sequelize, User, Product } = require("./models/index.js");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.get("/products", async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
