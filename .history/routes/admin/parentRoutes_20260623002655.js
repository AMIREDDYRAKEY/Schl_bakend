import express from "express";

import {
  parentDashboard,
} from "../../";

import protect from "../../middilewares/authMiddleware.js";

const router =
  express.Router();

router.get(
  "/dashboard/:id",
  protect,
  parentDashboard
);

export default router;