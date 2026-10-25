import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Web & Web App Development',
    badge: 'Flagship Core',
    shortDesc:
      'Ultra-responsive Next.js web applications, headless CMS, high-load e-commerce, and high-frequency real-time web portals.',
    longDesc:
      'We construct scalable, SEO-dominant, enterprise-ready web applications leveraging Next.js App Router, React 19, TypeScript, and micro-frontend architectures with 3D interactions and sub-second load times.',
    iconName: 'Globe',
    features: [
      'Next.js 15 & SSR/SSG Edge Deployment',
      'Interactive 3D WebGL & Canvas Experiences',
      'High-Conversion E-Commerce & Checkout Engines',
      'Modern MVC & Microservices Backend APIs',
      'Lighthouse 95+ Performance & Core Web Vitals',
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Tailored CSS', 'Three.js'],
    deliverables: ['Production Next.js Codebase', 'Complete API Integration', 'Admin Control Panel', 'Full CI/CD Pipeline'],
  },
  {
    id: 'app-development',
    title: 'Mobile App Development',
    badge: 'Native & Cross-Platform',
    shortDesc:
      'Native iOS (Swift/SwiftUI), Android (Kotlin), and unified cross-platform apps built with React Native and Flutter.',
    longDesc:
      'Deliver fluid 120fps mobile experiences to App Store and Google Play. We build secure offline-first architectures, biometric authentication, push notifications, and hardware-accelerated interfaces.',
    iconName: 'Smartphone',
    features: [
      'React Native & Flutter Single-Codebase Speed',
      'Native Swift & Kotlin High-Performance Modules',
      'Instant In-App Subscriptions & Payment Gateways',
      'Real-Time WebSockets & Push Notifications',
      'Complete App Store & Play Store Publishing SLA',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Tailored Mobile Design'],
    deliverables: ['Published Store Apps', 'Source Code & Documentation', 'TestFlight / Beta Setup', 'Analytics Dashboard'],
  },
  {
    id: 'ai-integration',
    title: 'Enterprise AI Integration',
    badge: 'Intelligent Workflows',
    shortDesc:
      'Integrate frontier LLMs (OpenAI, Gemini, Anthropic Claude) and custom retrieval-augmented generation (RAG) pipelines into your existing systems.',
    longDesc:
      'Transform static business software into intelligent, context-aware applications. We build secure vector embeddings, private data connectors, semantic search, and autonomous business workflows.',
    iconName: 'Sparkles',
    features: [
      'Gemini 1.5/2.0, OpenAI GPT-4o, Claude 3.5 Integration',
      'Custom RAG (Retrieval-Augmented Generation) on your private data',
      'Vector Search with Pinecone, Qdrant & pgvector',
      'Automated Data Extraction & Document Analysis',
      'Enterprise Privacy & Token Optimization Layer',
    ],
    technologies: ['OpenAI API', 'Google Gemini', 'LangChain', 'LlamaIndex', 'Pinecone', 'FastAPI', 'Python'],
    deliverables: ['RAG Pipeline Architecture', 'Vector Search Engine', 'Prompt Engineering Suite', 'Admin Token Dashboard'],
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots & Voice Agents',
    badge: '24/7 Automation',
    shortDesc:
      'Custom AI conversational agents with personality, memory, multi-channel deployment (Web, WhatsApp, Telegram, Slack), and voice support.',
    longDesc:
      'Deploy autonomous customer support and sales agents that resolve 85% of inquiries instantly, schedule appointments, handle transactions, and escalate intelligently to human agents.',
    iconName: 'Bot',
    features: [
      'Omnichannel: Web Embed, WhatsApp Business, Telegram, Slack',
      'Dynamic Lead Qualification & Calendar Booking',
      'Multi-Language Support (English, Hindi, Gujarati + 50 languages)',
      'Voice-Enabled Real-Time Conversational AI',
      'Live Human Handoff with Full Conversation Memory',
    ],
    technologies: ['Whisper Voice', 'ElevenLabs', 'Twilio', 'WhatsApp Cloud API', 'WebSockets', 'Next.js Chat UI'],
    deliverables: ['Custom Chatbot Widget', 'WhatsApp Business Sync', 'CRM Lead Forwarder', 'Chat Analytics Studio'],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning Solutions',
    badge: 'Proprietary Intelligence',
    shortDesc:
      'Custom predictive machine learning models, computer vision, sentiment analysis, recommendation engines, and fine-tuned domain models.',
    longDesc:
      'Solve domain-specific problems that off-the-shelf APIs cannot handle. We prepare training datasets, fine-tune open-weights models (Llama 3, Mistral), and build low-latency inference endpoints.',
    iconName: 'Cpu',
    features: [
      'Domain Model Fine-Tuning (Llama 3, Mistral, DeepSeek)',
      'Predictive Analytics & Churn Forecasting Engines',
      'Computer Vision & Real-Time Object Recognition',
      'Automated Recommendation & Upsell Algorithms',
      'High-Throughput, Low-Latency Model Serving (vLLM/Triton)',
    ],
    technologies: ['PyTorch', 'TensorFlow', 'Hugging Face', 'scikit-learn', 'Docker', 'CUDA', 'AWS SageMaker'],
    deliverables: ['Trained Model Weights', 'Inference REST/gRPC API', 'Data Preprocessing Scripts', 'Performance Validation Report'],
  },
  {
    id: 'digital-marketing',
    title: 'Social Media & Digital Marketing',
    badge: 'High-ROI Growth',
    shortDesc:
      'Complete social media handling, daily high-converting graphic posts, viral video reels, targeted Meta/Google ad campaigns, and SEO ranking.',
    longDesc:
      'Scale your brand visibility and generate predictable customer inquiries. We manage your entire digital presence with bespoke social media graphics, Instagram and LinkedIn content, short-form reels, organic SEO, and hyper-targeted ad campaigns designed for maximum ROI.',
    iconName: 'Megaphone',
    features: [
      'Complete Social Media Account Management (Instagram, LinkedIn, FB, X)',
      'High-Converting Creative Post & Carousel Graphics',
      'Short-Form Video Reels & Story Visuals Production',
      'Hyper-Targeted Meta Ads & Google PPC Management',
      'Organic Search Engine Optimization (SEO) & Google Business Profile',
    ],
    technologies: ['Meta Ads Manager', 'Google Ads', 'Canva Pro', 'Adobe Creative Suite', 'SEMrush', 'Analytics GA4'],
    deliverables: ['Monthly High-Engagement Post Package', 'Trending Video Reels & Shorts', 'Weekly Content Calendar', 'Transparent ROAS & Inquiries Dashboard'],
  },
];
