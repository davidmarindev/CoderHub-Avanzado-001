const { Worker } = require("bullmq");
const { connection } = require("../queues");
const { upsertFromApiItem } = require("../../services/product.service");

// Worker que escucha la cola
new Worker(
  "products_sync",
  async (job) => {
    console.log("Ejecutando sync…", job.id);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const items = await res.json();

      let inserted = 0;
      for (const it of items) {
        const [row, created] = await upsertFromApiItem(it);
        console.log("Procesando item:", it.id);
        if (created) inserted++;
      }

      return { total: items.length, inserted };
    } catch (error) {
      console.error("Error en el worker:", error);
      throw error;
    }
  },
  { connection }
);
