import express from "express";

import protect from "../../models/";

import {
  getNotifications,
  createNotification,
  deleteNotification,
} from "../../controllers/admin/notificationController.js";

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