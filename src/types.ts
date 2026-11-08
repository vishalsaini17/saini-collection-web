export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  iconName: 'layout' | 'code' | 'server' | 'shopping-bag' | 'database' | 'palette';
}

export interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarLetter: string;
}

export interface ContactFormInput {
  fullName: string;
  email: string;
  service: string;
  message: string;
}
