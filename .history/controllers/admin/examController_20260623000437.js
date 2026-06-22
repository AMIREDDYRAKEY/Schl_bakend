import Exam from "../../models/";

export const getExams =
  async (req, res) => {
    try {
      const exams =
        await Exam.find().sort({
          createdAt: -1,
        });

      res.json(exams);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const createExam =
  async (req, res) => {
    try {
      const exam =
        await Exam.create(req.body);

      res.status(201).json(
        exam
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const updateExam =
  async (req, res) => {
    try {
      const exam =
        await Exam.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.json(exam);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const deleteExam =
  async (req, res) => {
    try {
      await Exam.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Exam Deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };