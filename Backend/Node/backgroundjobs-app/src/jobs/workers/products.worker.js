const { Worker } = require("bullmq");
const { connection } = require("../queues");
const { upsertFromApiItem } = require("../../services/products.service");

// Worker que escucha la cola
new Worker(
  "products:sync",
  async (job) => {
    console.log("Ejecutando sync…", job.id);

    const res = await fetch("https://fakestoreapi.com/products");
    const items = await res.json();

    let inserted = 0;
    for (const it of items) {
      const [row, created] = await upsertFromApiItem(it);
      if (created) inserted++;
    }

    return { total: items.length, inserted };
  },
  { connection }
);
