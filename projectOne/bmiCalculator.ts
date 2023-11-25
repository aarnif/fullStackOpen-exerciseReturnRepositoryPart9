interface Values {
  a: number;
  b: number;
}

export const parseArgumentsCalculateBMI = (args: string[]): Values => {
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

export const calculateBmi = (height: number, weight: number): string => {
  const result = weight / (height / 100) ** 2;

  switch (true) {
    case result <= 16.0:
      return "Underweight (Severe thinness)";
    case result >= 16.0 && result <= 16.9:
      return "Underweight (Moderate thinness)";
    case result >= 17.0 && result <= 18.4:
      return "Underweight (Mild thinness)";
    case result >= 18.5 && result <= 24.9:
      return "Normal (healthy weight)";
    case result >= 25.0 && result <= 29.9:
      return "Overweight (Pre-obese)";
    case result >= 30.0 && result <= 34.9:
      return "Obese (Class I)";
    case result >= 35.0 && result <= 39.9:
      return "Obese (Class II)";
    case result >= 40.0:
      return "Obese (Class III)";
    default:
      return "no result";
  }
};

// try {
//   const { a, b } = parseArgumentsCalculateBMI(process.argv);
//   console.log(calculateBmi(a, b));
// } catch (error: unknown) {
//   if (error instanceof Error) {
//     throw new Error(error.message);
//   }
// }
