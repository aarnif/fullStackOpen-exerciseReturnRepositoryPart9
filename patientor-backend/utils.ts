import { newPatient, Gender } from "./types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseString = (name: unknown, errorMessage: string): string => {
  if (!isString(name)) {
    throw new Error(errorMessage);
  }
  return name;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect gender: " + gender);
  }
  return gender;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error("Incorrect date: " + date);
  }
  return date;
};

const newPatientEntry = (object: unknown): newPatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }
  if (
    "name" in object &&
    "occupation" in object &&
    "gender" in object &&
    "ssn" in object &&
    "dateOfBirth" in object
  ) {
    const newEntry: newPatient = {
      name: parseString(object.name, "Incorrect or missing name"),
      occupation: parseString(
        object.occupation,
        "Incorrect or missing occupation"
      ),
      gender: parseGender(object.gender),
      ssn: parseString(object.ssn, "Incorrect or missing ssn"),
      dateOfBirth: parseDate(object.dateOfBirth),
    };
    return newEntry;
  }

  throw new Error("Incorrect data: a field missing");
};

export default newPatientEntry;
