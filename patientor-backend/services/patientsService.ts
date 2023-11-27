import patientsData from "../data/patients";
import { NonSensitivePatientInfo } from "../types";

const getNonSensitiveInfo = (): NonSensitivePatientInfo[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getNonSensitiveInfo,
};
