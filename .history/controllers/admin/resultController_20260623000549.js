import Result from "../../";

const getGrade = (
  percentage
) => {
  if (percentage >= 90)
    return "A+";

  if (percentage >= 80)
    return "A";

  if (percentage >= 70)
    return "B";

  if (percentage >= 60)
    return "C";

  if (percentage >= 35)
    return "D";

  return "F";
};

export const getResults =
  async (req, res) => {
    try {
      const results =
        await Result.find()
          .populate(
            "studentId",
            "name roll className"
          )
          .populate(
            "examId",
            "examName"
          );

      res.json(results);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const createResult =
  async (req, res) => {
    try {
      const {
        studentId,
        examId,
        subject,
        marksObtained,
        totalMarks,
      } = req.body;

      const percentage =
        (
          (marksObtained /
            totalMarks) *
          100
        ).toFixed(2);

      const result =
        await Result.create({
          studentId,
          examId,
          subject,
          marksObtained,
          totalMarks,
          percentage,
          grade:
            getGrade(
              percentage
            ),
        });

      res.status(201).json(
        result
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const updateResult =
  async (req, res) => {
    try {
      const result =
        await Result.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.json(result);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const deleteResult =
  async (req, res) => {
    try {
      await Result.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Result Deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };