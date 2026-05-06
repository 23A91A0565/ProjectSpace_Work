import express from "express";
import { addBasicPatientDetails } from "../Patients_Controllers/Add_Basic_Patient_Details_Controller.js";
import { patientLogin } from "../Patients_Controllers/Patient_Login_Controller.js";
import { updatePatientProfile } from "../Patients_Controllers/Update_Patient_Profile_Controller.js";

const router = express.Router();

router.post("/basic-details", addBasicPatientDetails);
router.post("/login", patientLogin);
router.patch("/update-profile/:patientId", updatePatientProfile);

export default router;
