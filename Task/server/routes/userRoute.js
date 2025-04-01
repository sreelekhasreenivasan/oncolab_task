import { Router } from "express";
import { Patient } from "../models/db.js";

const userRoute = Router();

userRoute.post('/add', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json({ message: "Data added successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

userRoute.get('/all', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

userRoute.get('/search', async (req, res) => {
  try {
    const { clientName } = req.query; 
    if (!clientName) {
      return res.status(400).json({ error: "Client name is required for search" });
    }

    const patients = await Patient.find({ 
      clientName: { $regex: clientName, $options: "i" } 
    });

    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { userRoute };
