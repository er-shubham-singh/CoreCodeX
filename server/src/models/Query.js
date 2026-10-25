import mongoose from 'mongoose';

const querySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email address'],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, 'Please provide your phone or WhatsApp number'],
      trim: true,
    },
    service: {
      type: String,
      required: [true, 'Please select the required service'],
      enum: [
        'Web Development',
        'App Development',
        'AI Integration',
        'Chatbot Development',
        'AI / Machine Learning',
        'Social Media & Digital Marketing',
        'Full MERN Enterprise Solution',
        'Other'
      ],
      default: 'Web Development'
    },
    budget: {
      type: String,
      default: '₹10,000 - ₹15,000'
    },
    timeline: {
      type: String,
      default: '1 - 3 Months'
    },
    message: {
      type: String,
      required: [true, 'Please describe your project or inquiry'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['New', 'In Review', 'Contacted', 'Closed'],
      default: 'New'
    },
    preferredContact: {
      type: String,
      enum: ['Call', 'Query', 'WhatsApp', 'Email'],
      default: 'Query'
    }
  },
  {
    timestamps: true,
  }
);

// Fallback in-memory storage if MongoDB is not connected
export const inMemoryQueries = [];

export const QueryModel = mongoose.models.Query || mongoose.model('Query', querySchema);
