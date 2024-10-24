import { Router } from "express";
import {
  getWhatWeDo,
  newWhatWeDo,
  updateWhatWeDo,
} from "../../../controllers/home/corporate/what-we-do.mjs";

const router = Router();

router.route("/").post(newWhatWeDo);
router.route("/:id").get(getWhatWeDo).patch(updateWhatWeDo);

export default router;
