import express from "express";
import {
  createSubscription,
  getSubscriptions,
  deleteSubscription
} from "../controllers/subscriptionController.js";

const router = express.Router();

router.get("/", getSubscriptions);
router.post("/", createSubscription);
router.delete("/:id", deleteSubscription);

export default router;