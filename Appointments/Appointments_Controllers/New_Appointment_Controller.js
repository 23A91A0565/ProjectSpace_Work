import mongoose from "mongoose";
import Appointment from "../Appointments_Model.js";

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

export const newAppointment = async (req, res) => {
  try {
    const { doctorId, patientId, date, time } = req.body;

    if (!doctorId || !patientId || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "doctorId, patientId, date, and time are required",
      });
    }

    if (!isValidObjectId(doctorId) || !isValidObjectId(patientId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid doctorId or patientId",
      });
    }

    const appointment = await Appointment.create({
      doctorId,
      patientId,
      date,
      time,
    });

    return res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      appointment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create appointment",
      error: error.message,
    });
  }
};
