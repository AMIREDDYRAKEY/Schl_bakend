import express from "express";

import protect from "../";

import {
  getResults,
  createResult,
  updateResult,
  deleteResult,
} from "../../controllers/admin/resultController.js";

const router =
  express.Router();

router.route("/")
  .get(protect, getResults)
  .post(
    protect,
    createResult
  );

router.route("/:id")
  .put(
    protect,
    updateResult
  )
  .delete(
    protect,
    deleteResult
  );

export default router;