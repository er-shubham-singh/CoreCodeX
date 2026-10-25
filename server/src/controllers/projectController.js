import { ProjectModel, inMemoryProjects } from '../models/Project.js';
import { getDBStatus } from '../config/db.js';

// @desc    Get all portfolio projects
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req, res, next) => {
  try {
    const dbStatus = getDBStatus();
    let projects;

    if (dbStatus.connected) {
      projects = await ProjectModel.find().sort({ createdAt: -1 });
      if (!projects.length) projects = inMemoryProjects;
    } else {
      projects = inMemoryProjects;
    }

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single project by slug
// @route   GET /api/projects/:slug
// @access  Public
export const getProjectBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const dbStatus = getDBStatus();
    let project;

    if (dbStatus.connected) {
      project = await ProjectModel.findOne({ slug });
    }

    if (!project) {
      project = inMemoryProjects.find((p) => p.slug === slug);
    }

    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Project with slug '${slug}' not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
};
