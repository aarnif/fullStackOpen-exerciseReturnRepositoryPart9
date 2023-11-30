import { Entry } from "../../types";

interface Props {
  entry: Entry;
}

const EntryDetails = ({ entry }: Props) => {
  return (
    <div key={entry.date}>
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

export default EntryDetails;
