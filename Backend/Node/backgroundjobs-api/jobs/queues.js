const { Queue, Worker } = require("bullmq");
const IORedis = require("ioredis");

const connection = new IORedis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null,
});

const ProductsQueue = new Queue("products_sync", { connection });
const ReportQueue = new Queue("report_products", { connection });
const EmailQueue = new Queue("email_queue", { connection });

module.exports = { connection, ProductsQueue, ReportQueue, EmailQueue };
