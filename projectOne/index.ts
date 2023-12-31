import express from "express";
import qs from "qs";
import { calculateBmi } from "./bmiCalculator";
import { exerciseCalculator } from "./exerciseCalculator";
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

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    res.json({
      error: "parameters missing",
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  daily_exercises.forEach((hours: number) => {
    if (isNaN(Number(hours))) {
      res.json({ error: "malformatted parameters" });
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  res.json(exerciseCalculator(target, daily_exercises));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
