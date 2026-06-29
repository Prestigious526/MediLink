//import jwt from "jsonwebtoken";
//import bcrypt from "bcrypt";
import doctorModel from "../models/doctorModel.js";
//import appointmentModel from "../models/appointmentModel.js";

// Toggle doctor's availability
const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;

    if (!docId) {
      return res.status(400).json({ success: false, message: "Doctor ID missing" });
    }

    const doctor = await doctorModel.findById(docId);

    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }

    doctor.available = !doctor.available;
    await doctor.save();

    res.json({ success: true, message: "Availability changed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all doctors (for frontend list)
const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password -email");
    res.json({ success: true, doctors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export {
//   loginDoctor,
//   appointmentsDoctor,
//   appointmentCancel,
//   appointmentComplete,
    doctorList,
    changeAvailability,
//   doctorProfile,
//   updateDoctorProfile,
//   doctorDashboard,
};