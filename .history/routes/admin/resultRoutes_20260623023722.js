import express from "express";

import protect from "../../middilewares/authMiddleware.js";

import {
  getResults,
  createResult,
  updateResult,
  deleteResult,
} from "../../controllers/admin/resultController.js";

const router =
  express.Router();

router.route("/")
  .get( getResults)
  .post(
    
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