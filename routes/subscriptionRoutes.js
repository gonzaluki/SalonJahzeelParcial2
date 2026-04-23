import express from "express";
import {
  subscribe,
  getSubscriptions,
  deleteSubscription
} from "../controllers/subscriptionController.js";

const router = express.Router();

router.get("/", getSubscriptions);
router.post("/", subscribe);
router.delete("/:id", deleteSubscription);

export default router;