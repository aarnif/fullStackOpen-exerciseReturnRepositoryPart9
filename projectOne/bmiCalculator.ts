interface Values {
  a: number;
  b: number;
}

const parseArgumentsCalculateBMI = (args: string[]): Values => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) {
    console.log("You provided more than two arguments");
    console.log("Using first two arguments to calculate BMI...\n");
  }
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      a: Number(args[2]),
      b: Number(args[3]),
    };
  } else {
    throw new Error("The provided values were not numbers!");
  }
};

const calculateBmi = (height: number, weight: number): string => {
  const result = weight / (height / 100) ** 2;
  const resultMessage = "Result: ";

  switch (true) {
    case result <= 16.0:
      return resultMessage + "Underweight (Severe thinness)";
    case result >= 16.0 && result <= 16.9:
      return resultMessage + "Underweight (Moderate thinness)";
    case result >= 17.0 && result <= 18.4:
      return resultMessage + "Underweight (Mild thinness)";
    case result >= 18.5 && result <= 24.9:
      return resultMessage + "Normal (healthy weight)";
    case result >= 25.0 && result <= 29.9:
      return resultMessage + "Overweight (Pre-obese)";
    case result >= 30.0 && result <= 34.9:
      return resultMessage + "Obese (Class I)";
    case result >= 35.0 && result <= 39.9:
      return resultMessage + "Obese (Class II)";
    case result >= 40.0:
      return resultMessage + "Obese (Class III)";
    default:
      return resultMessage + "no result";
  }
};

try {
  const { a, b } = parseArgumentsToCalculateBMI(process.argv);
  console.log(calculateBmi(a, b));
} catch (error: unknown) {
  if (error instanceof Error) {
    throw new Error(error.message);
  }
}
