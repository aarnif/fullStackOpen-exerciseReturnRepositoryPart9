import { Entry } from "../../../types";
import HospitalEntry from "./HospitalEntry";
import OccupationalHealthCareEntry from "./OccupationalHealthCareEntry";
import HealthCheck from "./HealthCheck";

interface Props {
  entry: Entry;
}

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const EntryDetails = ({ entry }: Props) => {
  switch (entry.type) {
    case "Hospital":
      return <HospitalEntry entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalHealthCareEntry entry={entry} />;
    case "HealthCheck":
      return <HealthCheck entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default EntryDetails;
