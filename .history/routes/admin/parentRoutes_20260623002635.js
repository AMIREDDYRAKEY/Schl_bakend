import express from "express";

import {
  parentDashboard,
} from "../controllers/parentController.js";

import protect from "../middleware/authMiddleware.js";

const router =
  express.Router();

router.get(
  "/dashboard/:id",
  protect,
  parentDashboard
);

export default router;