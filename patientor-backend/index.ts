import express from "express";
import diagnosesRouter from "./routes/diagnosesRouter";
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/diagnoses", diagnosesRouter);

const PORT = 3000;

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
