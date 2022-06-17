import express from "express";
const router = express.Router();
import {
  getQueries,
  createQuery,
  deleteQuery,
} from "../controllers/queryController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(protect, admin, getQueries).post(createQuery);

router.route("/:id").delete(protect, admin, deleteQuery);

export default router;
