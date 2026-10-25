import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import { connectDB, getDBStatus } from './config/db.js';
import { requestLogger } from './middlewares/logger.js';
import { errorHandler, notFound } from './middlewares/errorHandler.js';

// Route imports
import queryRoutes from './routes/queryRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();

// Database Connection
connectDB();

// Global Middlewares
app.use(cors({
  origin: '*', // Allow all origins for dev / production flexibility
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(requestLogger);

// Health check & System Info
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'CoreCodeX MVC API',
    database: getDBStatus(),
    version: '1.0.0'
  });
});

// Mount API Routes
app.use('/api/queries', queryRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to CoreCodeX Enterprise API Engine',
    docs: {
      queries: '/api/queries',
      reviews: '/api/reviews',
      projects: '/api/projects',
      contact: '/api/contact',
      health: '/health'
    }
  });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`[CoreCodeX Server] Express MVC Server running on port ${PORT} in ${config.nodeEnv} mode`);
});
