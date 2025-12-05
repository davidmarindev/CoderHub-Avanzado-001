const { ProductsQueue } = require("./queues.js");

async function scheduleProductSync(params = {}) {
  await ProductsQueue.add(
    "products_sync",
    { params },
    {
      repeat: { cron: "26 * * * *" },
    }
  );
}

module.exports = { scheduleProductSync };
