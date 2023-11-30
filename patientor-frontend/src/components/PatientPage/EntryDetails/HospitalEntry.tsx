import { Entry } from "../../../types";
import { LocalHospital } from "@mui/icons-material";

interface Props {
  entry: Entry;
}

const HospitalEntry = ({ entry }: Props) => {
  const containerStyle = {
    border: "2px solid black",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  };

  const headerAndIconStyle = {
    display: "flex",
  };

  return (
    <div key={entry.date} style={containerStyle}>
      <h3 style={headerAndIconStyle}>
        Hospital <LocalHospital />
      </h3>
      <div>
        {entry.date} <i>{entry.description}</i>
      </div>
      <ul>
        {entry.diagnosisCodes?.map((diagnosisCode) => {
          return (
            <li key={diagnosisCode.code}>
              {diagnosisCode.code} <i>{diagnosisCode?.name}</i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HospitalEntry;
