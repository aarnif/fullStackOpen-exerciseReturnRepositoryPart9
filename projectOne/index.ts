import express from "express";
import qs from "qs";
import { calculateBmi } from "./bmiCalculator";
const app = express();
const PORT = 3003;

app.use("query parser", (str: string) => qs.parse(str));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  if (isNaN(Number(height)) || isNaN(Number(weight))) {
    res.json({ error: "malformatted parameters" });
  }

  res.json({
    weight: Number(height),
    height: Number(weight),
    bmi: calculateBmi(Number(height), Number(weight)),
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
