import { Router } from "express";
import {
  getOurStory,
  newOurStory,
  updateOurStory,
} from "../../../controllers/home/corporate/our-story.mjs";

const router = Router();

router.route("/").post(newOurStory);
router.route("/:id").get(getOurStory).patch(updateOurStory);

export default router;
