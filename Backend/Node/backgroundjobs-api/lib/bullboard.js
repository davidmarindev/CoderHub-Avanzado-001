const { ExpressAdapter } = require("@bull-board/express");
const { BullMQAdapter } = require("@bull-board/api/bullMQAdapter");
const { createBullBoard } = require("@bull-board/api");
const { ProductsQueue, EmailQueue } = require("../jobs/queues.js");

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");

createBullBoard({
  queues: [new BullMQAdapter(ProductsQueue), new BullMQAdapter(EmailQueue)],
  serverAdapter,
});

module.exports = serverAdapter;
