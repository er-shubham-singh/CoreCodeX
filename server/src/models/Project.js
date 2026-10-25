import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    client: { type: String, required: true },
    url: { type: String, required: true },
    previewImage: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    tags: [{ type: String }],
    metrics: [
      {
        label: { type: String },
        value: { type: String },
      },
    ],
    completedYear: { type: String, default: '2024' },
    featured: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const defaultProjects = [
  {
    id: 'proj-1',
    title: 'PaxTechs - Financial & Systems Platform',
    slug: 'paxtechs',
    category: 'Fintech & Enterprise Cloud',
    client: 'PaxTechs Systems',
    url: 'https://paxtechs.com',
    previewImage: '/assets/portfolio/paxtechs_preview.jpg',
    shortDescription:
      'High-performance custom engines, secure billing frameworks, algorithmic trading systems, and premium UI/UX design libraries.',
    fullDescription:
      'Engineered an enterprise-grade fintech and IT management system featuring low-latency market metric charts, automated trading diagnostics, and high-frequency cloud pipelines.',
    tags: ['Next.js', 'FinTech', 'Real-Time WebSockets', 'Tailored UI/UX', 'Cloud Architecture'],
    metrics: [
      { label: 'Latency', value: '0.12ms' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Conversion Lift', value: '+140%' },
    ],
    completedYear: '2024',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Fluteon - Luxury Fashion & E-Commerce',
    slug: 'fluteon',
    category: 'E-Commerce & Digital Storefront',
    client: 'Fluteon Apparel',
    url: 'https://fluteon.com',
    previewImage: '/assets/portfolio/fluteon_preview.jpg',
    shortDescription:
      'Mid-premium ladies formalwear platform featuring bespoke blazers, satin shirts, and seamless pan-India checkout.',
    fullDescription:
      'Full-stack e-commerce experience with high-performance responsive catalog, dynamic filter matrices, rapid checkout funnel, and AI size recommendation engine.',
    tags: ['E-Commerce', 'React', 'Flowbite UI', 'Payment Gateway', 'AI Sizing'],
    metrics: [
      { label: 'Load Speed', value: '0.8s' },
      { label: 'Cart Checkout Rate', value: '88%' },
      { label: 'Pan-India Reach', value: '100+' },
    ],
    completedYear: '2024',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'NHotels - Luxury Hospitality & Booking',
    slug: 'nhotels',
    category: 'Hospitality & Booking Engine',
    client: 'NHotels International',
    url: 'https://nhotels.com',
    previewImage: '/assets/portfolio/nhotels_preview.jpg',
    shortDescription:
      'Five-star luxury hotel, villa suite booking, and panoramic resort reservation architecture with real-time room availability.',
    fullDescription:
      'Engineered an international hotel booking portal featuring immersive visual galleries, calendar date picker, multi-currency payment settlement, and guest concierge portal.',
    tags: ['Next.js', 'Booking Engine', '3D UI', 'Stripe Global', 'Microservices'],
    metrics: [
      { label: 'Booking Speed', value: '<400ms' },
      { label: 'Direct Bookings', value: '+62%' },
      { label: 'Global Availability', value: '24/7' },
    ],
    completedYear: '2024',
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'Great Popular Band - Royal Events & Music',
    slug: 'greatpopularband',
    category: 'Entertainment & Event Management',
    client: 'Great Popular Band',
    url: 'https://greatpopularband.com',
    previewImage: '/assets/portfolio/greatpopularband_preview.jpg',
    shortDescription:
      'Royal wedding and grand event management portal with live orchestra booking, ceremony design, and audio-visual showcases.',
    fullDescription:
      'Designed an energetic, opulent wedding planning and concert entertainment portal with custom event quote calculators, video performance reels, and instant booking scheduling.',
    tags: ['React', 'Event Tech', 'Multimedia Showcase', 'Dynamic Forms', 'SEO Domination'],
    metrics: [
      { label: 'Inquiries/Month', value: '350+' },
      { label: 'Customer Rating', value: '5.0 ★' },
      { label: 'Booking Automation', value: '95%' },
    ],
    completedYear: '2024',
    featured: true,
  },
];

export const inMemoryProjects = [...defaultProjects];

export const ProjectModel = mongoose.models.Project || mongoose.model('Project', projectSchema);
