import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    roll: {
      type: String,
      required: true,
      unique: true,
    },

    className: {
      type: String,
      required: true,
    },

    section: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
    },

    phone: {
      type: String,
      required: true,
    },

    totalFees: {
      type: Number,
      required: true,
    },

    paidFees: {
      type: Number,
      default: 0,
    },

    pendingFees: {
      type: Number,
    },

    status: {
      type: String,
      default: "Pending",
    },
    
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model(
  "Student",
  studentSchema
);

export default Student;