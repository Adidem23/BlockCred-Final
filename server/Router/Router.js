import express from "express";
import * as controllers from "../Controllers/Controllers.js";

const router = express.Router();

router.get("/", controllers.homepageGet);

// router.get("/issuer-login");
// router.post("/issuer-login");

router.get("/issuer-signup", controllers.issuerSignupGet);
router.post("/issuer-signup", controllers.issuerSignupPost);

export default router;
