import mongoose from "mongoose";
import Appointment from "../Appointments_Model.js";

export const getAppointmentsByDoctor = async (req, res) => {
  try {
    const { doctorId } = req.params;

    if (!doctorId) {
      return res.status(400).json({
        success: false,
        message: "doctorId is required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(doctorId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid doctorId",
      });
    }

    const appointments = await Appointment.find({ doctorId }).sort({
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
      message: "Failed to get doctor appointments",
      error: error.message,
    });
  }
};
