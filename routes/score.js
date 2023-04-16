import express from "express";
// middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";

import { getScore } from "../controllers/score.js";

const router = express.Router();

router.get("/score/user", requireSignin, getScore);




export default router;