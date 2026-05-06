import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    DOB:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
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
       required:true,
       unique:true
    },
    MedicalConcil:{
        type:String,
        required:true
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
    shifts: {
        "12am-6am": { type: Boolean, default: false },
        "6am-12pm": { type: Boolean, default: false },
        "12pm-6pm": { type: Boolean, default: false },
        "6pm-12am": { type: Boolean, default: false }
    },
    ratings: {
        "1-star": { type: Number, default: 0 },
        "2-star": { type: Number, default: 0 },
        "3-star": { type: Number, default: 0 },
        "4-star": { type: Number, default: 0 },
        "5-star": { type: Number, default: 0 }
    },
    AverageRating: {
        type: Number,
        default: 0
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