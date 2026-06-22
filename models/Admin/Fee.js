import mongoose from "mongoose";

const feeSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    paymentMode: {
      type: String,
      default: "Cash",
    },

    receiptNo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Fee = mongoose.model(
  "Fee",
  feeSchema
);

export default Fee;