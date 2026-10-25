import { ProjectItem } from '../types';

export const portfolioData: ProjectItem[] = [
  {
    id: 'paxtechs',
    title: 'PaxTechs - Financial & Systems Platform',
    slug: 'paxtechs',
    category: 'Fintech & Enterprise Cloud',
    client: 'PaxTechs Systems',
    url: 'https://paxtechs.com',
    previewImage: '/assets/portfolio/paxtechs_preview.jpg',
    shortDescription:
      'High-performance custom engines, secure billing frameworks, algorithmic trading systems, and premium UI/UX design libraries.',
    fullDescription:
      'PaxTechs approached CoreCodeX to build their enterprise technology hub. We architected a Next.js platform featuring live trading latency counters, system health monitoring, algorithmic metrics, and high-frequency backend APIs with microsecond response times.',
    tags: ['Next.js 15', 'FinTech Analytics', 'Tailored UI/UX', 'Cloud Architecture', 'Live Metrics'],
    metrics: [
      { label: 'API Latency', value: '0.12ms' },
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Conversion Lift', value: '+140%' },
      { label: 'Client Revenue', value: '$10M+' },
    ],
    completedYear: '2024',
    featured: true,
  },
  {
    id: 'fluteon',
    title: 'Fluteon - Luxury Fashion & E-Commerce',
    slug: 'fluteon',
    category: 'E-Commerce & Digital Storefront',
    client: 'Fluteon Apparel',
    url: 'https://fluteon.com',
    previewImage: '/assets/portfolio/fluteon_preview.jpg',
    shortDescription:
      'Mid-premium ladies formalwear platform featuring bespoke blazers, satin shirts, and seamless pan-India checkout.',
    fullDescription:
      'Fluteon delivers high-fashion formal attire across India. CoreCodeX engineered their digital store from ground up: modern catalog filtering, fluid add-to-cart interactions, razor-sharp product zoom, integrated payment gateways, and an AI-driven fit recommendation tool.',
    tags: ['E-Commerce', 'React', 'Flowbite UI', 'Payment Gateway', 'AI Sizing', 'Pan-India Logistics'],
    metrics: [
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Checkout Success', value: '94.2%' },
      { label: 'Pan-India Cities', value: '100+' },
      { label: 'Repeat Orders', value: '42%' },
    ],
    completedYear: '2024',
    featured: true,
  },
  {
    id: 'nhotels',
    title: 'NHotels - Luxury Hospitality & Booking',
    slug: 'nhotels',
    category: 'Hospitality & Booking Engine',
    client: 'NHotels Group',
    url: 'https://nhotels.com',
    previewImage: '/assets/portfolio/nhotels_preview.jpg',
    shortDescription:
      'Five-star luxury hotel, villa suite booking, and panoramic resort reservation architecture with real-time room availability.',
    fullDescription:
      'Designed an international boutique hospitality portal for NHotels. Features 3D panoramic villa tours, interactive check-in date selection, live currency conversion, multi-tier room amenities comparison, and instant automated reservation confirmations.',
    tags: ['Next.js', 'Booking Engine', 'Stripe Global', 'Microservices', '3D Panorama'],
    metrics: [
      { label: 'Search Latency', value: '<400ms' },
      { label: 'Direct Bookings', value: '+62%' },
      { label: 'Cart Abandonment Drop', value: '-35%' },
      { label: 'Global Availability', value: '24/7' },
    ],
    completedYear: '2024',
    featured: true,
  },
  {
    id: 'greatpopularband',
    title: 'Great Popular Band - Royal Events & Music',
    slug: 'greatpopularband',
    category: 'Entertainment & Event Management',
    client: 'Great Popular Band',
    url: 'https://greatpopularband.com',
    previewImage: '/assets/portfolio/greatpopularband_preview.jpg',
    shortDescription:
      'Royal wedding and grand event management portal with live orchestra booking, ceremony design, and audio-visual showcases.',
    fullDescription:
      'Great Popular Band required a high-energy, royal aesthetic website to capture multi-million wedding bookings. CoreCodeX developed their interactive portal featuring audio samples, custom wedding package calculator, video concert reels, and seamless consultation inquiry funnels.',
    tags: ['React', 'Multimedia Showcase', 'Dynamic Forms', 'SEO Domination', 'Live Music Tech'],
    metrics: [
      { label: 'Inquiries/Month', value: '350+' },
      { label: 'Rating', value: '5.0 ★' },
      { label: 'Booking Automation', value: '95%' },
      { label: 'Event Reach', value: 'Pan-India' },
    ],
    completedYear: '2024',
    featured: true,
  },
];
