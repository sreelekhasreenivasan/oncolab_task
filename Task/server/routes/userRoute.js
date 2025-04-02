import { Router } from "express";
import { Patient, Workers } from "../models/db.js";

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

userRoute.post('/add-workstation', async (req, res) => {
  try {
    const newWorkstation = new Workers(req.body);
    await newWorkstation.save();
    res.status(201).json({ message: "Data added successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

userRoute.get('/get-workstations', async (req, res) => {
  try {
    const workers = await Workers.find();
    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

userRoute.get('/search-workstation', async (req, res) => {
  try {
    const { WorkstationName } = req.query; 
    if (!WorkstationName) {
      return res.status(400).json({ error: "Workstation name is required for search" });
    }

    const workers = await Workers.find({ 
      WorkstationName: { $regex: WorkstationName, $options: "i" } 
    });

    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


export { userRoute };
