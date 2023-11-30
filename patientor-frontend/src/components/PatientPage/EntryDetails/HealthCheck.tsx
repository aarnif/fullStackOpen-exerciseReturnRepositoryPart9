import { Entry } from "../../../types";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

interface Props {
  entry: Entry;
}

const HealthCheck = ({ entry }: Props) => {
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
        Health Check <HealthAndSafetyIcon />
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

export default HealthCheck;
