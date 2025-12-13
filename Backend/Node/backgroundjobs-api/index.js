const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bullBoard = require("./lib/bullboard");
const routes = require("./routes");
const { scheduleProductSync } = require("./jobs/schedulers.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/admin/queues", bullBoard.getRouter());
app.use("/api", routes);

// Servir archivos estaticos desde la carpeta "public"
app.use(express.static("public"));

if (process.env.CRON_SYNC === "true") {
  console.log("Scheduling product sync job every 26 minutes.");
  scheduleProductSync();
}

module.exports = app;

// Arquitectura

// Express crea los enpoints y maneja los archivos estaticos.
// app.listen inicia el servidor http en el puerto 8000.
// Socker.io se va a montar sobre servidor http para manejar eventos en tiempo real.
// Cliente HTML se va a conectar via socket.io para recibir notificaciones en tiempo real.
