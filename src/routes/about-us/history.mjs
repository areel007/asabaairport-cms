import { Router } from "express";
import {
  getHistory,
  newHistory,
  updateHistory,
} from "../../controllers/about-us/history.mjs";

const router = Router();

router.route("/").post(newHistory);
router.route("/:id").get(getHistory).patch(updateHistory);

export default router;
