const { Queue, Worker, QueueScheduler } = require("bullmq");
const redisClient = require("../config/redis");

const connection = redisClient;

const ProductsQueue = new Queue("products:sync", { connection });
const ReportQueue = new Queue("report:products", { connection });

new QueueScheduler("products:sync", { connection });
new QueueScheduler("report:products", { connection });

module.exports = { connection, ProductsQueue, ReportQueue };
