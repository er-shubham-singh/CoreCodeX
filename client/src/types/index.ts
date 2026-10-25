export type ThemeMode = 'dark' | 'light' | 'neon';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  client: string;
  url: string;
  previewImage: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  metrics: ProjectMetric[];
  completedYear: string;
  featured: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  company: string;
  website?: string;
  rating: number;
  review: string;
  projectDelivered: string;
  avatar: string;
  verifiedClient: boolean;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  badge: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
}

export interface FounderContact {
  name: string;
  role: string;
  phone: string;
  email?: string;
  location: string;
  callUrl: string;
  whatsappUrl: string;
  emailUrl?: string;
  focus: string[];
}

export interface QueryFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  preferredContact: 'Call' | 'Query' | 'WhatsApp';
}
