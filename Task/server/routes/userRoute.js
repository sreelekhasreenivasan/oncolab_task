import { Router } from "express";
import { Patient } from "../models/db.js";


const userRoute =Router();

userRoute.post('/add',async (req,res)=>{

  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json({ message: "Patient added successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

});






export {userRoute};