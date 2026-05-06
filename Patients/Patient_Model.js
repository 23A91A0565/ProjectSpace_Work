import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    dob: {
      type: String,
    },

    age: {
      type: Number,
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },

    height: {
      type: Number,
    },

    weight: {
      type: Number,
    },

    bloodGroup: {
      type: String,
    },

    address: {
      addressLine1: {
        type: String,
      },
      addressLine2: {
        type: String,
      },
      landmark: {
        type: String,
      },
      city: {
        type: String,
      },
      district: {
        type: String,
      },
      state: {
        type: String,
      },
      country: {
        type: String,
      },
      postalCode: {
        type: String,
      },
    },

    languagesKnown: [
      {
        type: String,
      },
    ],
    smoking: {
      type: String,
      enum: ["never", "occasionally", "regular"],
      default: "never",
    },

    drinking: {
      type: String,
    },

    physicalDisability: {
      type: Boolean,
      default: false,
    },

    eyeSight: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Patient", patientSchema);
