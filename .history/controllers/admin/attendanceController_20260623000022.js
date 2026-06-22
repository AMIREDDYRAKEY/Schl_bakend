import Attendance from "../../models/Admin/Attendance.js";
import Student from "../../models/";

export const markAttendance =
  async (req, res) => {
    try {
      const {
        studentId,
        date,
        status,
      } = req.body;

      const student =
        await Student.findById(
          studentId
        );

      if (!student) {
        return res.status(404).json({
          message:
            "Student Not Found",
        });
      }

      const alreadyMarked =
        await Attendance.findOne({
          studentId,
          date,
        });

      if (alreadyMarked) {
        return res.status(400).json({
          message:
            "Attendance Already Marked",
        });
      }

      const attendance =
        await Attendance.create({
          studentId,
          date,
          status,
        });

      res.status(201).json(
        attendance
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };