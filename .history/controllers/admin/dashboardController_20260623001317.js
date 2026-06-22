import Student from "../../models/Admin/Student.js";
import Fee from "../../models/Fee.js";
import Exam from "../models/Exam.js";
import Attendance from "../models/Attendance.js";

export const getDashboardStats =
  async (req, res) => {
    try {
      const totalStudents =
        await Student.countDocuments();

      const totalExams =
        await Exam.countDocuments();

      const totalAttendance =
        await Attendance.countDocuments();

      const feeCollection =
        await Fee.aggregate([
          {
            $group: {
              _id: null,
              total: {
                $sum: "$amount",
              },
            },
          },
        ]);

      res.json({
        totalStudents,
        totalExams,
        totalAttendance,

        totalCollection:
          feeCollection[0]
            ?.total || 0,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };