export interface Event {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  time: string;
  location: string;
  cause: 'environment' | 'health' | 'animal' | 'education';
  causeName: string;
  image: string;
  donation: number;
  maxParticipants: number;
  spotsLeft: number;
  isCompleted: boolean;
  impactNote?: string;
  schedule?: string[];
  whatToBring?: string[];
  fullDescription?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content?: string;
  author?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  cohort: string;
  quote: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Registration {
  eventId: string;
  eventTitle: string;
  date: string;
  location: string;
  tickets: number;
}
