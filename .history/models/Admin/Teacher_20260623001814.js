import mongoose from "mongoose";

const teacherSchema =
  new mongoose.Schema(
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

      phone: {
        type: String,
        required: true,
      },

      subject: {
        type: String,
        required: true,
      },

      qualification: {
        type: String,
      },

      salary: {
        type: Number,
      },

      joiningDate: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

const Teacher =
  mongoose.model(
    "Teacher",
    teacherSchema
  );

export default Teacher;