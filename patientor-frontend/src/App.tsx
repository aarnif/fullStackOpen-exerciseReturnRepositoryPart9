import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Routes, useMatch } from "react-router-dom";
import { Button, Divider, Container, Typography } from "@mui/material";

import { apiBaseUrl } from "./constants";
import { Patient, Diagnosis, Entry } from "./types";

import patientService from "./services/patients";
import diagnosisService from "./services/diagnoses";
import PatientListPage from "./components/PatientListPage";
import PatientPage from "./components/PatientPage";

const App = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      const patients = await patientService.getAll();
      const diagnoses = await diagnosisService.getAll();
      const patientsWithDiagnosis: Patient[] = patients.map(
        (patient: Patient) => {
          return {
            ...patient,
            entries: patient.entries?.map((entry: Entry) => {
              return {
                ...entry,
                diagnosisCodes: entry.diagnosisCodes?.map(
                  (diagnosisCode: Diagnosis) =>
                    diagnoses.find(
                      (diagnosis: Diagnosis) =>
                        diagnosis?.code === diagnosisCode
                    )
                ),
              };
            }),
          };
        }
      );
      setPatients(patientsWithDiagnosis);
    };
    void fetchPatientList();
  }, []);

  const match = useMatch("/patients/:id");
  const patientInfo: Patient | null | undefined = match
    ? patients.find((patient) => patient.id === match.params.id)
    : null;

  return (
    <div className="App">
      <Container>
        <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
          Patientor
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary">
          Home
        </Button>
        <Divider hidden />
        <Routes>
          <Route
            path="/"
            element={
              <PatientListPage patients={patients} setPatients={setPatients} />
            }
          />
          <Route
            path="/patients/:id"
            element={patientInfo && <PatientPage patientInfo={patientInfo} />}
          />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
