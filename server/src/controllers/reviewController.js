import { ReviewModel, inMemoryReviews } from '../models/Review.js';
import { getDBStatus } from '../config/db.js';

// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Public
export const getReviews = async (req, res, next) => {
  try {
    const dbStatus = getDBStatus();
    let reviews;

    if (dbStatus.connected) {
      reviews = await ReviewModel.find().sort({ createdAt: -1 });
      if (!reviews.length) reviews = inMemoryReviews;
    } else {
      reviews = inMemoryReviews;
    }

    return res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Post a client review
// @route   POST /api/reviews
// @access  Public
export const addReview = async (req, res, next) => {
  try {
    const { author, role, company, rating, review, projectDelivered, website } = req.body;

    if (!author || !company || !review) {
      return res.status(400).json({
        success: false,
        message: 'Please provide author name, company, and review text.',
      });
    }

    const reviewData = {
      author,
      role: role || 'Client Partner',
      company,
      website: website || '',
      rating: Number(rating) || 5,
      review,
      projectDelivered: projectDelivered || 'Custom Engineering Project',
      avatar: '/assets/reviews/avatar-1.jpg',
      verifiedClient: true,
      createdAt: new Date(),
    };

    let newReview;
    const dbStatus = getDBStatus();

    if (dbStatus.connected) {
      newReview = await ReviewModel.create(reviewData);
    } else {
      newReview = { id: `rev-${Date.now()}`, ...reviewData };
      inMemoryReviews.unshift(newReview);
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for your valuable review!',
      data: newReview,
    });
  } catch (error) {
    next(error);
  }
};
