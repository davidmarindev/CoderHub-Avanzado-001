const express = require("express");
const ProductRoutes = require("./products.routes.js");
// const { sendMail } = require("../services/email.service.js");
const { list, itemsByOrderId } = require("../services/orders.service.js");
// const { EmailQueue } = require("../jobs/queues.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Background Jobs API");
});

router.get("/health", (req, res) => {
  res.status(200).send("OK");
});

router.use("/products", ProductRoutes);

router.get("/orders", async (req, res, next) => {
  console.log("Fetching orders...");
  try {
    const orders = await list();
    res.json(orders);
  } catch (e) {
    next(e);
  }
});

router.get("/orders/:orderId/items", async (req, res, next) => {
  const { orderId } = req.params;
  try {
    const items = await itemsByOrderId(orderId);
    res.json(items);
  } catch (e) {
    next(e);
  }
});

// router.post("/send-test-email", async (req, res, next) => {
//   console.log("Received request to send test email.");
//   // try {
//   //   const { to, subject, text, html } = req.body;
//   //   // Enqueue email job
//   //   const job = await EmailQueue.add("send-email", {
//   //     to,
//   //     subject,
//   //     text,
//   //     html,
//   //   });
//   //   res.json({
//   //     status: "enqueued",
//   //     jobId: job.id,
//   //   });
//   // } catch (e) {
//   //   next(e);
//   // }
// });

module.exports = router;
