import { Router } from "express";
import {
  getExperienceAsaba,
  newExperienceAsaba,
} from "../../controllers/passengers/experience-asaba.mjs";
import { updateAtTheAirport } from "../../controllers/passengers/at-the-airport.mjs";

const router = Router();

router.route("/").post(newExperienceAsaba);
router.route("/:id").get(getExperienceAsaba).patch(updateAtTheAirport);

export default router;
