import { Router } from "express";
import history from "./history.mjs";
import visionAndMission from "./vision-and-mission.mjs";
import aboutAAc from "./aboutAAC.mjs";

const router = Router();

router.use("/history", history);
router.use("/vision-and-mission", visionAndMission);
router.use("/about-aac", aboutAAc);

export default router;
