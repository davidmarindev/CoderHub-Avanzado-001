const express = require("express");
const { list } = require("../services/product.service.js");
const router = express.Router();
const { ProductsQueue } = require("../jobs/queues");
const db = require("../models");
const { Product } = db;

router.get("/", async (req, res, next) => {
  try {
    const page = Number(req.query.page || 1);
    const size = Number(req.query.size || 20);
    const data = await list({ page, size });
    res.json(data);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, price, description, image, category } = req.body;
    const newProduct = await Product.create({
      title,
      price,
      description,
      image,
      category,
    });
    res.status(201).json(newProduct);
  } catch (e) {
    next(e);
  }
});

router.post("/sync-products", async (req, res) => {
  const job = await ProductsQueue.add("manual-sync", {
    params: { data: "from route" },
  });
  res.json({
    status: "enqueued",
    jobId: job.id,
  });
});

router.delete("/all_products", async (req, res, next) => {
  try {
    const deleted = await Product.destroy({ where: {}, truncate: true });
    res.json({ deleted });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
