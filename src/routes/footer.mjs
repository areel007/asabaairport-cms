import { Router } from "express";
import { getFooter, newFooter, updateFooter } from "../controllers/footer.mjs";

const router = Router();

router.route("/").post(newFooter);

router.route("/:id").get(getFooter).patch(updateFooter);

export default router;
