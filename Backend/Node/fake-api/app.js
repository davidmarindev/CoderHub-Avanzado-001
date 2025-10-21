import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
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

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
