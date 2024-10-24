import { Router } from "express";

import hero from "./hero.mjs";
import ourStory from "./our-story.mjs";
import whatWeDo from "./what-we-do.mjs";

const router = Router();

router.use("/hero", hero);
router.use("/our-story", ourStory);
router.use("/what-we-do", whatWeDo);

export default router;
