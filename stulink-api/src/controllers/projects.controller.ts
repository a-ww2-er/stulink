import Project from "../models/project.model";
import UserModel from "../models/user.model";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const deleteProjectByTitle = async (idx: any, title: string) => {
  const res = await Project.deleteMany({
    ProjectOwner: idx,
    ProjectName: title,
  });
  console.log(res);

  return res;
};

export const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const decodedToken = jwt.decode(req.cookies.accessToken);
    const project = new Project({
      // This is mock data. The necessary parameters will be put in place when the project schema is fully set up
      ProjectName: "Main F",
      ProjectStatus: "completed",
      ProjectImage: "https://twitter.com",
      Description: "skjfvsfjknnjkdfjnnjkfbknkfnnmf",
      DueDate: "20-10-2028",
      ProjectOwner: decodedToken.id,
    });

    await project.save();

    return res
      .status(201)
      .send({ message: "Project Created Successfully", success: true });
  } catch (error) {
    return next(error);
  }
};

export const viewProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const decodedToken = jwt.decode(req.cookies.accessToken);
  const user = await UserModel.findById(decodedToken.id);
  try {
    const projects = await Project.find({ ProjectOwner: user._id });
    res.send(projects);
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
  try {
    const { title } = req.body;
    const result = await deleteProjectByTitle(decodedToken.id, title);

    if (result) {
      return res.send({
        message: `Project titled ${title} successfully deleted`,
        success: true,
      });
    } else {
      return res.send({ message: "Project not found", success: false });
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
  try {
    const { projectId, updatedData } = req.body;
    const project = await Project.findOneAndUpdate(
      {
        _id: projectId,
        ProjectOwner: decodedToken.id
      },
      updatedData,
      { new: true }
    );

    if (project) {
      return res.send({
        message: `Project titled ${project.ProjectName} successfully updated`,
        success: true,
        updatedProject: project
      });
    } else {
      return res.send({ message: "Project not found", success: false });
    }
  } catch (error) {
    return next(error);
  }
};

