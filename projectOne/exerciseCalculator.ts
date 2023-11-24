interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const exerciseCalculator = (hours: number[]): Result => {
  if (hours.length === 0) throw new Error("Hours array must not be empty!");

  const periodLength = hours.length;
  const trainingDays = hours.filter((hour) => hour > 0).length;
  const target = 2;
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

console.log(exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1]));
