import { Worker } from "bullmq";
import { connection } from "../queues.js";

export const ReportWorker = new Worker(
  "report:products",
  async (job) => {
    // Lógica para generar el reporte de productos
  },
  { connection }
);
