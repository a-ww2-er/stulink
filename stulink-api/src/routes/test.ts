import express from "express";
import { getPrivateData } from "../controllers/test";
import { protectRegularEndpoint } from "../middleware/authenticate";
const router = express.Router();

router.get("/",protectRegularEndpoint, getPrivateData);

export default router;
