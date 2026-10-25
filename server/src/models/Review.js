import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    review: {
      type: String,
      required: true,
    },
    projectDelivered: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '/assets/reviews/avatar-1.jpg',
    },
    verifiedClient: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const defaultReviews = [
  {
    id: 'rev-1',
    author: 'Vikram Mehta',
    role: 'Founder & CTO',
    company: 'PaxTechs',
    website: 'https://paxtechs.com',
    rating: 5,
    review:
      'CoreCodeX re-engineered our financial tech stack and deployed our live metrics dashboard with extraordinary speed. The 3D UI, zero-latency API sync, and Next.js optimization elevated our client conversion rate by 140%. Working directly with Sahil and Shubham was seamless.',
    projectDelivered: 'PaxTechs Custom FinTech & High-Frequency Platform',
    avatar: '/assets/reviews/marcus.jpg',
    verifiedClient: true,
    featured: true,
  },
  {
    id: 'rev-2',
    author: 'Ananya Singhania',
    role: 'Director of Brand & E-Commerce',
    company: 'Fluteon',
    website: 'https://fluteon.com',
    rating: 5,
    review:
      'We needed a high-fashion, ultra-responsive storefront for our pan-India formalwear brand. CoreCodeX built an intuitive catalog, sleek checkout flow, and custom AI sizing advisor that our customers constantly compliment. Truly world-class craftsmanship.',
    projectDelivered: 'Fluteon Luxury E-Commerce Engine & Flowbite Architecture',
    avatar: '/assets/reviews/sarah.jpg',
    verifiedClient: true,
    featured: true,
  },
  {
    id: 'rev-3',
    author: 'Rodrigo Alcantara',
    role: 'VP of Global Hospitality Operations',
    company: 'NHotels Group',
    website: 'https://nhotels.com',
    rating: 5,
    review:
      'The booking flow and luxury resort showcase engineered by CoreCodeX is second to none. Our villa reservations loaded in under 400ms globally, and international booking abandonments dropped significantly. Shubham and Sahil are technical masters.',
    projectDelivered: 'NHotels Luxury Booking & Global Reservation Engine',
    avatar: '/assets/reviews/marcus.jpg',
    verifiedClient: true,
    featured: true,
  },
  {
    id: 'rev-4',
    author: 'Rajiv Kapoor',
    role: 'Managing Director & Event Producer',
    company: 'Great Popular Band',
    website: 'https://greatpopularband.com',
    rating: 5,
    review:
      'Great Popular Band required a vibrant, royal showcase for high-profile weddings and concerts. CoreCodeX built a visual masterpiece with royal themes, fast booking forms, and audio-visual galleries. We receive qualified wedding inquiries every single day now.',
    projectDelivered: 'Great Popular Band Royal Wedding & Concert Management Platform',
    avatar: '/assets/reviews/sarah.jpg',
    verifiedClient: true,
    featured: true,
  },
];

export const inMemoryReviews = [...defaultReviews];

export const ReviewModel = mongoose.models.Review || mongoose.model('Review', reviewSchema);
