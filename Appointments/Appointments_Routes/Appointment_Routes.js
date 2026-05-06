import express from "express";
import { getAppointmentsByDoctor } from "../Appointments_Controllers/Get_Appointments_By_Doctor_Controller.js";
import { getAppointmentsByPatient } from "../Appointments_Controllers/Get_Appointments_By_Patient_Controller.js";
import { newAppointment } from "../Appointments_Controllers/New_Appointment_Controller.js";

const router = express.Router();

router.post("/new", newAppointment);
router.get("/doctor/:doctorId", getAppointmentsByDoctor);
router.get("/patient/:patientId", getAppointmentsByPatient);

export default router;
