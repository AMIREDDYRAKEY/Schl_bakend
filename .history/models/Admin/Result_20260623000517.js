import mongoose from "mongoose";

const resultSchema =
  new mongoose.Schema(
    {
      studentId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
      },

      examId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Exam",
        required: true,
      },

      subject: {
        type: String,
        required: true,
      },

      marksObtained: {
        type: Number,
        required: true,
      },

      totalMarks: {
        type: Number,
        required: true,
      },

      percentage: {
        type: Number,
      },

      grade: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

const Result = mongoose.model(
  "Result",
  resultSchema
);

export default Result;