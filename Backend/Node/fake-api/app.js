import express from "express";
import path from "node:path";
import cors from "cors";
import routes from "./routes/index.js";
import adminRoutes from "./routes/admin/index.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World from CoderHub Class!");
});

app.get("/welcome", (req, res) => {
  res.render("welcome", { name: "CoderHub" });
});

app.use("/api", routes);
app.use("/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
