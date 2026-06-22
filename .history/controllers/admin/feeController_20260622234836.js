import Fee from "../models/Admin/Fee.js";
import Student from "../models/Admin/Student.js";

export const collectFee =
  async (req, res) => {
    try {
      const {
        studentId,
        amount,
        paymentMode,
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

      const updatedPaid =
        student.paidFees +
        Number(amount);

      const updatedPending =
        student.totalFees -
        updatedPaid;

      student.paidFees =
        updatedPaid;

      student.pendingFees =
        updatedPending < 0
          ? 0
          : updatedPending;

      student.status =
        updatedPending <= 0
          ? "Paid"
          : "Pending";

      await student.save();

      const fee =
        await Fee.create({
          studentId,
          amount,
          paymentMode,

          receiptNo:
            "REC-" +
            Date.now(),
        });

      res.status(201).json({
        message:
          "Fee Collected",
        fee,
        student,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };
  