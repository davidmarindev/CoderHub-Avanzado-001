const express = require("express");
const { list } = require("../services/product.service.js");
const router = express.Router();
const { ProductsQueue } = require("../jobs/queues");

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

router.post("/sync-products", async (req, res) => {
  const job = await ProductsQueue.add("manual-sync", {});
  res.json({
    status: "enqueued",
    jobId: job.id,
  });
});

module.exports = router;
