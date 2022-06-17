import express from "express";
const router = express.Router();
import {
  createImportantLink,
  deleteImportantLink,
  getImportantLinks,
} from "../controllers/importantLinkController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";
router
  .route("/")
  .get(getImportantLinks)
  .post(protect, admin, upload.single("file"), createImportantLink);

router.route("/:id").delete(protect, admin, deleteImportantLink);

export default router;
