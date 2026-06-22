import express from "express";

import protect from "../../";

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