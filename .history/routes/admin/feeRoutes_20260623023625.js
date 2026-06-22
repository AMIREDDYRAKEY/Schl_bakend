import express from "express";

import protect from "../../middilewares/authMiddleware.js";

import {
  collectFee,
  getFeeHistory,
  getReceipt,
} from "../../controllers/admin/feeController.js";

const router = express.Router();

router.post(
  "/collect",
  
  collectFee
);

router.get(
  "/history",
  
  getFeeHistory
);

router.get(
  "/receipt/:id",
  protect,
  getReceipt
);

export default router;