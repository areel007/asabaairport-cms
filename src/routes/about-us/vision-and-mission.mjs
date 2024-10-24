import { Router } from "express";
import {
  getVisionAndMission,
  newVisionAndMission,
  updateVisionAndMission,
} from "../../controllers/about-us/vision-and-mission.mjs";

const router = Router();

router.route("/").post(newVisionAndMission);
router.route("/:id").get(getVisionAndMission).patch(updateVisionAndMission);

export default router;
