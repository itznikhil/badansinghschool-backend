import express from "express";
const router = express.Router();
import {
  createResult,
  deleteResult,
  getResults,
  getResultByClassAndYear,
} from "../controllers/resultController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

router
  .route("/")
  .get(getResults)
  .post(protect, admin, upload.single("file"), createResult);

router.route("/getByClassAndYear").post(getResultByClassAndYear);

router.route("/:id").delete(protect, admin, deleteResult);

export default router;
