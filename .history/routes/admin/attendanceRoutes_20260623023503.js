import express from "express";

import protect from "../../middilewares/authMiddleware.js";

import {
  markAttendance,
  getAttendance,
  getStudentAttendance,
  getTodayAttendance,
} from "../../controllers/admin/attendanceController.js";

const router =
  express.Router();

router.post(
  "/mark",
  
  markAttendance
);

router.get(
  "/all",
  
  getAttendance
);

router.get(
  "/today",
  getTodayAttendance
);

router.get(
  "/student/:id",
  protect,
  getStudentAttendance
);

export default router;