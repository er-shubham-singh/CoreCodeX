import express from 'express';
import { submitQuery, getQueries } from '../controllers/queryController.js';

const router = express.Router();

router.route('/')
  .post(submitQuery)
  .get(getQueries);

export default router;
