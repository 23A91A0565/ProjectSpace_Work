import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Patient from "../Patient_Model.js";

const JWT_SECRET = process.env.JWT_SECRET || "projectspace_patient_secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

const createPatientToken = (patient) =>
  jwt.sign(
    {
      patientId: patient._id,
      email: patient.email,
    },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRES_IN,
    }
  );

export const addBasicPatientDetails = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      dob,
      age,
      gender,
      height,
      weight,
      bloodGroup,
    } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "name, email, and password are required",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const patient = await Patient.create({
      name,
      email,
      password: hashedPassword,
      dob,
      age,
      gender,
      height,
      weight,
      bloodGroup,
    });

    const token = createPatientToken(patient);
    const patientData = patient.toObject();
    delete patientData.password;

    return res.status(201).json({
      success: true,
      message: "Basic patient details added successfully",
      token,
      patient: patientData,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Patient with this email already exists",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to add basic patient details",
      error: error.message,
    });
  }
};
