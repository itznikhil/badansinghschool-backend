import express from "express";
const router = express.Router();
import {
  createNoticeBoard,
  getNoticeBoards,
  deleteNoticeBoard,
} from "../controllers/noticeBoardController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

router
  .route("/")
  .get(getNoticeBoards)
  .post(protect, admin, upload.single("file"), createNoticeBoard);

router.route("/:id").delete(protect, admin, deleteNoticeBoard);

export default router;
