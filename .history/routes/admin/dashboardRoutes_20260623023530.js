import express from "express";

import protect from "../../middilewares/authMiddleware.js";

import {
  getDashboardStats,
} from "../../controllers/admin/dashboardController.js";

const router =
  express.Router();

router.get(
  "/stats",
  pr
  getDashboardStats
);

export default router;