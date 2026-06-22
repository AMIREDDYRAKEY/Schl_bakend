import express from "express";

import protect from "../../middilewares/authMiddleware.js";

import {
  getExams,
  createExam,
  updateExam,
  deleteExam,
} from "../../controllers/admin/examController.js";

const router =
  express.Router();

router.route("/")
  .get( getExams)
  .post( createExam);

router.route("/:id")
  .put(protect, updateExam)
  .delete(
    protect,
    deleteExam
  );

export default router;