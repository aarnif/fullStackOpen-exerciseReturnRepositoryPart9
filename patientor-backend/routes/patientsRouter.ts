/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import patientsService from "../services/patientsService";
import newPatientEntry from "../utils";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientsService.getAllInfo());
});

router.post("/", (req, res) => {
  try {
    const newPatientDetails = newPatientEntry(req.body);
    const addedPatient = patientsService.addPatient(newPatientDetails);
    res.json(addedPatient);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    }
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundPatient = patientsService.getPatientById(id);
  if (!foundPatient) {
    res.json({ error: "invalid id" });
  }
  res.json(foundPatient);
});

export default router;
