export type Theme = 'light' | 'dark';

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  href?: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface TechItem {
  name: string;
  icon?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export interface TickerClient {
  desc: string;
  client: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  tagline: string;
  email: string;
  location?: string;
  navigation: NavItem[];
  socials: SocialLink[];
  clients?: TickerClient[];
}
