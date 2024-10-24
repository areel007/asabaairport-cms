import { Router } from "express";
import {
  getAboutUsAboutAAC,
  newAboutUsAboutAAC,
  updateAboutUsAboutAAC,
} from "../../controllers/about-us/about-aac.mjs";

const router = Router();

router.route("/").post(newAboutUsAboutAAC);
router.route("/:id").get(getAboutUsAboutAAC).patch(updateAboutUsAboutAAC);

export default router;
