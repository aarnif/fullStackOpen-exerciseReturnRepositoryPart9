import { Female, Male, Transgender } from "@mui/icons-material";
import { Patient } from "../../types";
import EntryDetails from "./EntryDetails";

interface Props {
  patientInfo: Patient;
}

export const PatientPage = ({ patientInfo }: Props) => {
  let genderIcon = null;
  switch (patientInfo.gender) {
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
        {patientInfo.name} {genderIcon}
      </h2>
      <div>ssn: {patientInfo.ssn}</div>
      <div>occupation: {patientInfo.occupation}</div>
      <h2>entries</h2>
      {patientInfo.entries?.map((entry) => (
        <EntryDetails key={entry.date} entry={entry} />
      ))}
    </>
  );
};

export default PatientPage;
