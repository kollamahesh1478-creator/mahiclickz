export interface PortfolioItem {
  id: string;
  title: string;
  category: 'videos' | 'vlogs' | 'photography' | 'albums' | 'thumbnails' | 'colorgrade';
  categoryLabel: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  beforeImageUrl?: string; // for before/after color grading
  software: string[];
  specs: {
    turnaround: string;
    aspectRatio: string;
    tools: string;
    clientType: string;
  };
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  software: string[];
  iconName: string;
  startingPrice: string;
  turnaround: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  project: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface EnquirySubmission {
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  projectScope: string;
  budgetTier: string;
  turnaroundUrgency: string;
  description: string;
  referenceLinks?: string;
}
