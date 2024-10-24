import { Router } from "express";
import corporate from "./corporate/index.mjs";

const router = Router();

router.use("/corporate", corporate);

export default router;
