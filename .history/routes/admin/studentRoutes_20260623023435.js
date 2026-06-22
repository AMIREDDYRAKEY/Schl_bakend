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
  .get( getStudents)
  .post( createStudent);

router.route("/:id")
  .get( getStudentById)
  .put( updateStudent)
  .delete(deleteStudent);

export default router;