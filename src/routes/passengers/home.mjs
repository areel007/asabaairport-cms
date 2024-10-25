import { Router } from "express";
import {
  getExperienceAsaba,
  getPassengersHomeHero,
  getTravelExperience,
  newExperienceAsaba,
  newPassengersHomeHero,
  newTravelExperience,
  updateExperienceAsaba,
  updatePassengersHomeHero,
  updateTravelExperience,
} from "../../controllers/passengers/home.mjs";

const router = Router();

router.route("/hero").post(newPassengersHomeHero);
router
  .route("/hero/:id")
  .get(getPassengersHomeHero)
  .patch(updatePassengersHomeHero);

router.route("/travel-experience").post(newTravelExperience);
router
  .route("/travel-experience/:id")
  .get(getTravelExperience)
  .patch(updateTravelExperience);

router.route("/experience-asaba").post(newExperienceAsaba);
router
  .route("/experience-asaba/:id")
  .get(getExperienceAsaba)
  .patch(updateExperienceAsaba);

export default router;
