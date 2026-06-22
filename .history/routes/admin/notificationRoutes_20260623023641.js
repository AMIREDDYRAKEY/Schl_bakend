import express from "express";

import protect from "../../middilewares/authMiddleware.js";

import {
  getNotifications,
  createNotification,
  deleteNotification,
} from "../../controllers/admin/notificationController.js";

const router =
  express.Router();

router.route("/")
  .get(
    
    getNotifications
  )
  .post(
    
    createNotification
  );

router.route("/:id")
  .delete(
    protect,
    deleteNotification
  );

export default router;