import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World from CoderHub Class!");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
