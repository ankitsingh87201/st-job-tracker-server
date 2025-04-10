import express from "express";
import {
  getAllJobs,
  addJob,
  updateJobStatus,
  deleteJob,
} from "../controllers/jobController.js";

const router = express.Router();

router.get("/", getAllJobs);
router.post("/", addJob);
router.put("/:id", updateJobStatus);
router.delete("/:id", deleteJob);

export default router;
