import express from "express";

import protect from "../../middilewares/authMiddleware.js";

import {
  getTimetable,
  createTimetable,
  deleteTimetable,
} from "../../controllers/admin/timetableController.js";

const router =
  express.Router();

router.route("/")
  .get(
    
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