import { QueryModel, inMemoryQueries } from '../models/Query.js';
import { getDBStatus } from '../config/db.js';
import { config } from '../config/env.js';

// @desc    Submit a new client query / consultation request
// @route   POST /api/queries
// @access  Public
export const submitQuery = async (req, res, next) => {
  try {
    const { name, email, phone, service, budget, timeline, message, preferredContact } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all mandatory fields: name, email, phone, and message.',
      });
    }

    const newQueryData = {
      name,
      email,
      phone,
      service: service || 'Web Development',
      budget: budget || '$1,000 - $5,000',
      timeline: timeline || '1 - 3 Months',
      message,
      preferredContact: preferredContact || 'Query',
      status: 'New',
      createdAt: new Date(),
    };

    let savedQuery;
    const dbStatus = getDBStatus();

    if (dbStatus.connected) {
      savedQuery = await QueryModel.create(newQueryData);
    } else {
      // In-memory fallback
      savedQuery = { id: `query-${Date.now()}`, ...newQueryData };
      inMemoryQueries.unshift(savedQuery);
    }

    return res.status(201).json({
      success: true,
      message: 'Your query has been submitted successfully! The CoreCodeX engineering team will reach out within 2 hours.',
      data: savedQuery,
      leadsDirectContact: config.leads,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all submitted queries
// @route   GET /api/queries
// @access  Public (for demo/admin dashboard)
export const getQueries = async (req, res, next) => {
  try {
    const dbStatus = getDBStatus();
    let queries;

    if (dbStatus.connected) {
      queries = await QueryModel.find().sort({ createdAt: -1 });
    } else {
      queries = inMemoryQueries;
    }

    return res.status(200).json({
      success: true,
      count: queries.length,
      data: queries,
    });
  } catch (error) {
    next(error);
  }
};
