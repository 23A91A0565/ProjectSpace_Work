import mongoose from "mongoose";
import Patient from "../Patient_Model.js";

export const updatePatientProfile = async (req, res) => {
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

    const {
      address,
      languagesKnown,
      smoking,
      drinking,
      physicalDisability,
      eyeSight,
    } = req.body;

    const patient = await Patient.findByIdAndUpdate(
      patientId,
      {
        address,
        languagesKnown,
        smoking,
        drinking,
        physicalDisability,
        eyeSight,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Patient profile updated successfully",
      patient,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update patient profile",
      error: error.message,
    });
  }
};
