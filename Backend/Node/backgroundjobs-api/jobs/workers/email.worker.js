const { Worker } = require("bullmq");
const { connection } = require("../queues");
const path = require("node:path");
const { sendMail } = require("../../services/email.service");
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

// Worker que escucha la cola de emails
new Worker(
  "email_queue",
  async (job) => {
    console.log("Enviando email…", job.id);
    try {
      const { to, subject, text, html } = job.data;
      const info = await sendMail({ to, subject, text, html });
      return info;
    } catch (error) {
      console.error("Error al enviar el email:", error);
      throw error;
    }
  },
  { connection }
);
