import Doctor from "../DoctorModels/Doctormodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const doctorRegister = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const data = await Doctor.create({
            ...req.body,
            password: hashedPassword
        });

        res.status(201).json(data);
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const doctorLogin = async (req, res) => {
    try {
        const { mail, password } = req.body;

        const doctor = await Doctor.findOne({ mail });
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: doctor._id, mail: doctor.mail },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            doctor
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export { doctorRegister, doctorLogin };