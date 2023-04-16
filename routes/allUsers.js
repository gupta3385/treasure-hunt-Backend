import express from "express";
// middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";

import { getAllUsers } from "../controllers/getUsers.js";
const router = express.Router();

router.get("/getAllUsers", requireSignin, getAllUsers);


export default router;