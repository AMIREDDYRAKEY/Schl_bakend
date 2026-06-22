import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getTimetable,
  createTimetable,
  deleteTimetable,
} from "../../controllers/admin/timetableController.js";

const router =
  express.Router();

router.route("/")
  .get(
    protect,
    getTimetable
  )
  .post(
    protect,
    createTimetable
  );

router.route("/:id")
  .delete(
    protect,
    deleteTimetable
  );

export default router;