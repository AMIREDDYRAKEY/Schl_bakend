import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  collectFee,
  getFeeHistory,
  getReceipt,
} from "../../controllers/admin/feeController.js";

const router = express.Router();

router.post(
  "/collect",
  protect,
  collectFee
);

router.get(
  "/history",
  protect,
  getFeeHistory
);

router.get(
  "/receipt/:id",
  protect,
  getReceipt
);

export default router;