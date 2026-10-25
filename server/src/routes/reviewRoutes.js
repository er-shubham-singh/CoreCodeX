import express from 'express';
import { getReviews, addReview } from '../controllers/reviewController.js';

const router = express.Router();

router.route('/')
  .get(getReviews)
  .post(addReview);

export default router;
