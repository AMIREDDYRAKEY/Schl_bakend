import Student from "../../models/Admin/Student.js";
import Attendance from "../models/Attendance.js";
import Fee from "../models/Fee.js";
import Result from "../models/Result.js";

export const parentDashboard =
  async (req, res) => {
    try {
      const student =
        await Student.findById(
          req.params.id
        );

      if (!student) {
        return res.status(404).json({
          message:
            "Student Not Found",
        });
      }

      const attendance =
        await Attendance.find({
          studentId:
            req.params.id,
        });

      const fees =
        await Fee.find({
          studentId:
            req.params.id,
        });

      const results =
        await Result.find({
          studentId:
            req.params.id,
        });

      res.json({
        student,
        attendance,
        fees,
        results,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };