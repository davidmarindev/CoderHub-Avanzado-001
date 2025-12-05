const { Queue, Worker } = require("bullmq");
const { redisConfig } = require("../config/redis");

const exampleQueue = new Queue("exampleQueue", {
  connection: redisConfig,
});

// Worker para procesar los jobs
const worker = new Worker(
  "exampleQueue",
  async (job) => {
    // Job processing logic goes here
    console.log(`Processing job with data: ${JSON.stringify(job.data)}`);
    // Simula trabajo
    return { result: "ok" };
  },
  { connection: redisConfig }
);

// Eventos de BullMQ
worker.on("completed", (job, result) => {
  console.log(`Job ${job.id} completed with result:`, result);
});

worker.on("failed", (job, err) => {
  console.error(`Job ${job.id} failed:`, err);
});

worker.on("progress", (job, progress) => {
  console.log(`Job ${job.id} progress:`, progress);
});

worker.on("active", (job) => {
  console.log(`Job ${job.id} is now active.`);
});

module.exports = exampleQueue;
