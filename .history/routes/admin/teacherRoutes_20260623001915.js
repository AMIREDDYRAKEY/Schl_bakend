import express from "express";

import protect from "../../middilewares/authMiddleware.js";

import {
  getTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacherController.js";

const router =
  express.Router();

router.route("/")
  .get(protect, getTeachers)
  .post(
    protect,
    createTeacher
  );

router.route("/:id")
  .put(
    protect,
    updateTeacher
  )
  .delete(
    protect,
    deleteTeacher
  );

export default router;