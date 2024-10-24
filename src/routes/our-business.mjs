import { Router } from "express";
import {
  getOurBusiness,
  newOurBusiness,
  updateOurBusiness,
} from "../controllers/our-business.mjs";

const router = Router();

router.route("/").post(newOurBusiness);
router.route("/:id").get(getOurBusiness).patch(updateOurBusiness);

export default router;
