import express from "express";

import {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../../controllers/admin/studentController.js";

import protect from "../../middilewares/authMiddleware.js";

const router = express.Router();

router.route("/")
  .get(prot getStudents)
  .post(protect, createStudent);

router.route("/:id")
  .get(protect, getStudentById)
  .put(protect, updateStudent)
  .delete(protect, deleteStudent);

export default router;