import patientsData from "../data/patients";
import { NonSensitivePatientInfo, newPatient, Patient } from "../types";
import { v1 as uuid } from "uuid";

const getNonSensitiveInfo = (): NonSensitivePatientInfo[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (patientInfo: newPatient): Patient => {
  const newPatient = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    id: uuid(),
    ...patientInfo,
  };

  patientsData.push(newPatient);
  return newPatient;
};

export default {
  getNonSensitiveInfo,
  addPatient,
};
