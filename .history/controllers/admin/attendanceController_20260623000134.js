import Attendance from "../../models/Admin/Attendance.js";
import Student from "../../models/Admin/Student.js";

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
  export const getAttendance =
  async (req, res) => {
    try {
      const attendance =
        await Attendance.find()
          .populate(
            "studentId",
            "name roll className section"
          )
          .sort({
            createdAt: -1,
          });

      res.json(attendance);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };
  export const getStudentAttendance =
  async (req, res) => {
    try {
      const records =
        await Attendance.find({
          studentId:
            req.params.id,
        });

      const total =
        records.length;

      const present =
        records.filter(
          (r) =>
            r.status ===
            "Present"
        ).length;

      const absent =
        records.filter(
          (r) =>
            r.status ===
            "Absent"
        ).length;

      const percentage =
        total > 0
          ? (
              (present /
                total) *
              100
            ).toFixed(2)
          : 0;

      res.json({
        total,
        present,
        absent,
        percentage,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };export const getTodayAttendance =
  async (req, res) => {
    try {
      const today =
        new Date()
          .toISOString()
          .split("T")[0];

      const records =
        await Attendance.find({
          date: today,
        }).populate(
          "studentId",
          "name className"
        );

      res.json(records);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };