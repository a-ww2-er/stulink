import express from "express";
import { showdashboard } from "../controllers/dashboardController";

const router: express.Router = express.Router();

router.get("/", showdashboard);
 
export default router;
