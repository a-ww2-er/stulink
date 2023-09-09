import express from "express";
import { protectRegularEndpoint } from "../middleware/authenticate";

import {
  removeTeamMember,
  addTeamMember,
  createProject,
  deleteProject,
  updateProject,
  viewProjects,
  viewSingleProject,
  viewProjectTeam,
  viewUserProjects,
} from "../controllers/projects.controller";

const router = express.Router();

router.get("/view-project", protectRegularEndpoint, viewProjects);
router.get(
  "/view-project/:projectId",
  protectRegularEndpoint,
  viewSingleProject
);
router.get("/view-projects/:userId", protectRegularEndpoint, viewUserProjects);
router.get(
  "/view-project/:projectId/team",
  protectRegularEndpoint,
  viewProjectTeam
);
router.post("/create-project", protectRegularEndpoint, createProject); //
router.delete("/delete-project", protectRegularEndpoint, deleteProject);
router.put("/edit-project/:id", protectRegularEndpoint, updateProject);
router.put("/:projectId/add/:userId", protectRegularEndpoint, addTeamMember); //
router.put(
  "/:projectId/remove/:userId",
  protectRegularEndpoint,
  removeTeamMember
);

export default router;
