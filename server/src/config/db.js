import mongoose from 'mongoose';
import { config } from './env.js';

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 2500, // Quick timeout so server starts instantly even if local MongoDB isn't running
    });
    isConnected = true;
    console.log(`[CoreCodeX Database] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[CoreCodeX Database] MongoDB connection failed (${error.message}). Running in Resilient In-Memory Mode.`);
    isConnected = false;
  }
};

export const getDBStatus = () => ({
  connected: isConnected,
  mode: isConnected ? 'MongoDB Live' : 'Resilient In-Memory Mode',
});
