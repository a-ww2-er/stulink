import express from "express";

import {
  createProject,
  deleteProject,
  updateProject,
  viewProjects,
} from "../controllers/projects.controller";

const router = express.Router();

router.get("/view-projects", viewProjects);
router.post("/create-project", createProject); // Works
router.delete("/delete-project", deleteProject);
router.put("/edit-project/:id", updateProject);

export default router;
