import express from 'express';
import { getProjects, getProjectBySlug } from '../controllers/projectController.js';

const router = express.Router();

router.route('/')
  .get(getProjects);

router.route('/:slug')
  .get(getProjectBySlug);

export default router;
