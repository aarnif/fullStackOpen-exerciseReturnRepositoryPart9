interface targetAndHours {
  target: number;
  hours: number[];
}

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const parseArgumentsExerciseCalculator = (args: string[]): targetAndHours => {
  const hours = [];

  if (isNaN(Number(args[2]))) {
    throw new Error("The provided target value was not a number!");
  }

  for (let i = 3; i < args.length; ++i) {
    if (!isNaN(Number(args[i]))) {
      hours.push(Number(args[i]));
    } else {
      throw new Error("All the provided hours were not numbers!");
    }
  }

  return {
    target: Number(args[2]),
    hours: hours,
  };
};

const exerciseCalculator = (target: number, hours: number[]): Result => {
  if (hours.length === 0) throw new Error("Hours array must not be empty!");

  const periodLength = hours.length;
  const trainingDays = hours.filter((hour) => hour > 0).length;
  const sum = hours.reduce((hour, total) => total + hour, 0);
  const average = sum / periodLength;
  const success = target >= average;
  const difference = average - target;

  let result = null;

  const ratings = [
    { rating: 3, description: "Well done" },
    { rating: 2, description: "Nice, but you could improve" },
    { rating: 1, description: "You have some training to do" },
  ];

  switch (true) {
    case difference >= 1:
      result = 0;
      break;
    case difference >= 0:
      result = 1;
      break;
    case difference < 0:
      result = 2;
      break;
  }

  return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: success,
    rating: ratings[result].rating,
    ratingDescription: ratings[result].description,
    target: target,
    average: average,
  };
};

try {
  const { target, hours } = parseArgumentsExerciseCalculator(process.argv);
  console.log(exerciseCalculator(target, hours));
} catch (error: unknown) {
  if (error instanceof Error) {
    throw new Error(error.message);
  }
}
