import mongoose from "mongoose";

const examSchema =
  new mongoose.Schema(
    {
      examName: {
        type: String,
        required: true,
      },

      className: {
        type: String,
        required: true,
      },

      subject: {
        type: String,
        required: true,
      },

      date: {
        type: String,
        required: true,
      },

      maxMarks: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

const Exam = mongoose.model(
  "Exam",
  examSchema
);

export default Exam;