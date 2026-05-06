import express from "express";
import { doctorRegister, doctorLogin } from "../DoctorControllers/Doctor_Controllers.js";

const router = express.Router();

router.post("/doctor-register", doctorRegister);
router.post("/doctor-login", doctorLogin);

export default router;