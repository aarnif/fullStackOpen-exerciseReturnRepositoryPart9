/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import patientsService from "../services/patientsService";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientsService.getNonSensitiveInfo());
});

router.post("/", (req, res) => {
  const { name, ssn, dateOfBirth, gender, occupation } = req.body;
  const addedPatient = patientsService.addPatient({
    name,
    ssn,
    dateOfBirth,
    gender,
    occupation,
  });
  res.json(addedPatient);
});

export default router;
