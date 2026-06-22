import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getExams,
  createExam,
  updateExam,
  deleteExam,
} from "../../controllers/";

const router =
  express.Router();

router.route("/")
  .get(protect, getExams)
  .post(protect, createExam);

router.route("/:id")
  .put(protect, updateExam)
  .delete(
    protect,
    deleteExam
  );

export default router;