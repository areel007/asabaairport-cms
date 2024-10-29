import { Router } from "express";
import {
  getAtTheAirport,
  newAtTheAirport,
  updateAtTheAirport,
} from "../../controllers/passengers/at-the-airport.mjs";

const router = Router();

router.route("/").post(newAtTheAirport);
router.route("/:id").get(getAtTheAirport).patch(updateAtTheAirport);

export default router;
