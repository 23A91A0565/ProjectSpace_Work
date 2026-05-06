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

export const patientLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "email and password are required",
      });
    }

    const patient = await Patient.findOne({ email });

    if (!patient) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, patient.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = createPatientToken(patient);
    const patientData = patient.toObject();
    delete patientData.password;

    return res.status(200).json({
      success: true,
      message: "Patient login successful",
      token,
      patient: patientData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to login patient",
      error: error.message,
    });
  }
};
