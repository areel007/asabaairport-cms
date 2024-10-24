import { Router } from "express";
import {
  getCorporateHero,
  newCorporateHero,
  updateCorporateHero,
} from "../../../controllers/home/corporate/hero.mjs";

const router = Router();

router.route("/").post(newCorporateHero);
router.route("/:id").get(getCorporateHero).patch(updateCorporateHero);

export default router;
