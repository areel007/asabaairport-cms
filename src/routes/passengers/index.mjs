import { Router } from "express";
import home from "./home.mjs";
import atTheAirport from "./at-the-airport.mjs";
import experienceAsaba from "./experience-asaba.mjs";

const router = Router();
router.use("/home", home);
router.use("/at-the-airport", atTheAirport);
router.use("/experience-asaba", experienceAsaba);

export default router;
