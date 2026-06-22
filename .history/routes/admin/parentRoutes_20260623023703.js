import express from "express";

import {
  parentDashboard,
} from "../../controllers/admin/parentController.js";

import protect from "../../middilewares/authMiddleware.js";

const router =
  express.Router();

router.get(
  "/dashboard/:id",
  
  parentDashboard
);

export default router;