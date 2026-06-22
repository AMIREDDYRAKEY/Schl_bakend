import Student from "../models/";

export const getStudents = async (
  req,
  res
) => {
  try {
    const students =
      await Student.find();

    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getStudentById =
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

      res.json(student);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const createStudent =
  async (req, res) => {
    try {
      const student =
        await Student.create({
          ...req.body,
          pendingFees:
            req.body.totalFees,
        });

      res.status(201).json(
        student
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const updateStudent =
  async (req, res) => {
    try {
      const student =
        await Student.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.json(student);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const deleteStudent =
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

      await student.deleteOne();

      res.json({
        message:
          "Student Deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };