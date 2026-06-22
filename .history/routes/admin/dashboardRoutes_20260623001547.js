import express from "express";

import protect from "../../middilewares/authMiddleware.js";

import {
  getDashboardStats,
} from "..";

const router =
  express.Router();

router.get(
  "/stats",
  protect,
  getDashboardStats
);

export default router;