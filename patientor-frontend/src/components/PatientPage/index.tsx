import { Female, Male, Transgender } from "@mui/icons-material";
import { Patient } from "../../types";

interface Props {
  patient: Patient;
}

export const PatientPage = ({ patient }: Props) => {
  let genderIcon = null;
  switch (patient.gender) {
    case "female":
      genderIcon = <Female />;
      break;
    case "male":
      genderIcon = <Male />;
      break;
    case "other":
      genderIcon = <Transgender />;
      break;
  }

  return (
    <>
      <h2>
        {patient.name} {genderIcon}
      </h2>
      <div>ssn: {patient.ssn}</div>
      <div>occupation: {patient.occupation}</div>
    </>
  );
};

export default PatientPage;
