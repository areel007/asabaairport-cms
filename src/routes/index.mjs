import { Router } from "express";
import auth from "./auth/index.mjs";
import users from "./users.mjs";
import home from "./home/index.mjs";
import footer from "./footer.mjs";
import aboutUs from "./about-us/index.mjs";
import ourBusiness from "./our-business.mjs";
import passengers from "./passengers/index.mjs";

const router = Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/home", home);
router.use("/footer", footer);
router.use("/about-us", aboutUs);
router.use("/our-business", ourBusiness);
router.use("/passengers", passengers);

export default router;
