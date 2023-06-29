import Project from "../models/project.model";
import User from "../models/user.model";
import jwt from "jsonwebtoken";
import { ErrorResponse } from "../utilities/errorResponse";
import { Request, Response, NextFunction } from "express";

const deleteProjectById = async (idx: any, id: string) => {
  const res = await Project.deleteMany({
    ProjectOwner: idx,
    ProjectId: id,
  });
  console.log(res);

  return res;
};

export const createProject = async (req, res: Response, next: NextFunction) => {
  const user = req.user;
  try {
    const project = new Project({
      ...req.body,
      ProjectOwner: req?.user?.id,
    });

    await project.save().then((result) => {
      User.findByIdAndUpdate(user, {
        $addToSet: { userProjects: result },
      });
    });
    return res
      .status(201)
      .send({ message: "Project Created Successfully", success: true });
  } catch (error) {
    return next(error);
  }
};

export const viewProjects = async (req, res: Response, next: NextFunction) => {
  const decodedToken = jwt.decode(req.cookies.accessToken);
  const user = await User.findById(req?.user?.id);
  try {
    const projects = await Project.find({ ProjectOwner: user._id }).populate(
      "Team"
    );
    res.status(200).json({ success: true, projects: projects });
  } catch (error) {
    return next(error);
  }
};
export const viewSingleProject = async (
  req,
  res: Response,
  next: NextFunction
) => {
  const projectId = req.params.projectId;
  try {
    const project = await Project.findById(projectId).populate("Team");
    res.status(200).json({ success: true, project: project });
  } catch (error) {
    return next(error);
  }
};
export const viewUserProjects = async (
  req,
  res: Response,
  next: NextFunction
) => {
  const user = req.params.userId;
  try {
    const project = await User.findById(user);
    if (!project) {
      return next(new ErrorResponse("no Projects found", 404));
    }
    res.status(200).json({ success: true, project: project });
  } catch (error) {
    return next(error);
  }
};
export const viewProjectTeam = async (
  req,
  res: Response,
  next: NextFunction
) => {
  const projectId = req.params.projectId;
  const user = await User.findById(req?.user?.id);
  try {
    const team = await (
      await Project.findOne({ _id: projectId })
    ).populate("Team");
    res.status(200).json({ success: true, teams: team?.Team });
  } catch (error) {
    return next(error);
  }
};

export const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const decodedToken = jwt.decode(req.cookies.accessToken);
  const id = req.params.id;
  try {
    const result = await deleteProjectById(decodedToken.id, id);

    if (result) {
      return res.send({
        message: `Project successfully deleted`,
        success: true,
      });
    } else {
      return next(new ErrorResponse("Project not found", 404));
    }
  } catch (error) {
    return next(error);
  }
};

export const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const decodedToken = jwt.decode(req.cookies.accessToken);
  const id = req.params.id;
  //desructured theses so it wont get updated
  const { projectId, Team, projectOwner, ...updatedData } = req.body;
  try {
    const project = await Project.findOneAndUpdate(
      {
        _id: id,
        ProjectOwner: decodedToken.id,
      },
      updatedData,
      { new: true }
    );

    if (project) {
      return res.send({
        message: `Project titled ${project.ProjectName} successfully updated`,
        success: true,
        updatedProject: project,
      });
    } else {
      return next(new ErrorResponse("Project not found", 404));
    }
  } catch (error) {
    return next(error);
  }
};

export const addTeamMember = async (req, res: Response, next: NextFunction) => {
  const project = await Project.findById(req.params.projectId);
  const teamMember = req.params.userId;
  try {
    if (req.user.id === project.ProjectOwner) {
      const user = await User.findById(teamMember);
      await Project.findByIdAndUpdate(req.params.projectId, {
        $addToSet: { Team: user },
      });
      //project.populate(user,{path:"Team"});
      res.status(200).json({ success: true, message: "Team member added" });
    } else {
      next(
        new ErrorResponse("you're not authorized to edit this project", 401)
      );
    }

    // res.json(projects);
  } catch (error) {
    return next(error);
  }
};
export const removeTeamMember = async (
  req,
  res: Response,
  next: NextFunction
) => {
  const project = await Project.findById(req.params.projectId);
  const teamMember = req.params.userId;
  try {
    if (req.user.id === project.ProjectOwner) {
      const user = await User.findById(teamMember);
      await Project.findByIdAndUpdate(req.params.projectId, {
        $pull: { Team: user.id },
      });
      res.status(200).json({ success: true, message: "Team member removed" });
    } else {
      next(new ErrorResponse("failed", 404));
    }
  } catch (error) {
    return next(error);
  }
};
