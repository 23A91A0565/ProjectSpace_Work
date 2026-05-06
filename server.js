import express from "express";
import mongoose from "mongoose";
import appointmentRoutes from "./Appointments/Appointments_Routes/Appointment_Routes.js";
import patientRoutes from "./Patients/Patients_Routes/Patient_Routes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://jashwanthsagartadepalli_db_user:sagar6215@projectspace.vsy6657.mongodb.net/hospitalDB?retryWrites=true&w=majority";

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend server is running",
  });
});

app.use("/appointments", appointmentRoutes);
app.use("/patients", patientRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
