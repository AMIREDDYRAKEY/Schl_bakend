import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getNotifications,
  createNotification,
  deleteNotification,
} from "../";

const router =
  express.Router();

router.route("/")
  .get(
    protect,
    getNotifications
  )
  .post(
    protect,
    createNotification
  );

router.route("/:id")
  .delete(
    protect,
    deleteNotification
  );

export default router;