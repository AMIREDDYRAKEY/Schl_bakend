import mongoose from "mongoose";

const timetableSchema =
  new mongoose.Schema(
    {
      className: String,

      day: String,

      period: String,

      subject: String,

      teacher: String,

      startTime: String,

      endTime: String,
    },
    {
      timestamps: true,
    }
  );

const Timetable =
  mongoose.model(
    "Timetable",
    timetableSchema
  );

export default Timetable;