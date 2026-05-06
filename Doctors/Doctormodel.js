import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    DOB:{
        type:Date,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    region: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
        unique:true
    },
    phoneNo: {
        type: Number,
        required: true,
        unique:true
    },
    specialization: {
        type: String,
        required: true
    },
    secondaryspecialization:{
        type:String, 
        default:null
    },
    MedicalLicense:{
       type:String,
       require:true,
       unique:true
    },
    MedicalConcil:{
        type:String,
        require:true
    },
    Status:{
        type:String,
        default:"pending"
    },
    hospitalName: {
        type: String,
        default: "Ownpractise"
    },
    LanguagesKnown: {
        type: [String],
        default: []
    },
    WorkingHours: {
        monday: { type: [String], default: null },
        tuesday: { type: [String], default: null },
        wednesday: { type: [String], default: null },
        thursday: { type: [String], default: null },
        friday: { type: [String], default: null },
        saturday: { type: [String], default: null },
        sunday: { type: [String], default: null }
    },
    rating: {
        type: String,
        default: "0"
    },
    password: {
        type: String,
        required: true
    },
    leaves: {
        type: [Date],
        default: []
    },
    yearsOfExperience: {
        type: Number,
        default: 0
    }
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;