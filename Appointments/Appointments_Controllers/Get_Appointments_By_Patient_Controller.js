import mongoose from "mongoose";
import Appointment from "../Appointments_Model.js";

export const getAppointmentsByPatient = async (req, res) => {
  try {
    const { patientId } = req.params;

    if (!patientId) {
      return res.status(400).json({
        success: false,
        message: "patientId is required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(patientId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid patientId",
      });
    }

    const appointments = await Appointment.find({ patientId }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to get patient appointments",
      error: error.message,
    });
  }
};
