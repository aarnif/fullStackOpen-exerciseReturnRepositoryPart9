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
      <h2>entries</h2>
      {patient.entries?.map((entry) => (
        <div key={entry.date}>
          <div>
            {entry.date} <i>{entry.description}</i>
          </div>
          <ul>
            {entry.diagnosisCodes?.map((code) => (
              <li key={code}>{code}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default PatientPage;
