import type { SiteConfig, Project, Service, TechItem } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'gissoler',
  title: 'Creative Developer & Designer',
  description: 'Crafting digital experiences that bridge design and technology',
  tagline: 'From design to development, complete digital solutions to elevate your product',
  email: 'hello@portfolio.dev',
  location: 'Remote Worldwide',
  navigation: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  // Clients/projects for header ticker (format: "description – Client Name")
  clients: [
    { desc: 'Web platform development', client: 'TechStartup' },
    { desc: 'E-commerce redesign', client: 'ModaShop' },
    { desc: 'Brand identity & website', client: 'CreativeStudio' },
    { desc: 'SaaS dashboard', client: 'DataFlow' },
    { desc: 'Mobile app design', client: 'FitTrack' },
    { desc: 'API architecture', client: 'CloudBase' },
  ],
  socials: [
    { name: 'GitHub', href: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  ],
};

export const techStack: TechItem[] = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'Python' },
  { name: 'Figma' },
  { name: 'Tailwind' },
  { name: 'PostgreSQL' },
  { name: 'GraphQL' },
  { name: 'AWS' },
  { name: 'Docker' },
  { name: 'Git' },
];

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Building performant, scalable web applications with modern technologies and best practices.',
  },
  {
    id: 'ui-design',
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces that delight users and drive engagement.',
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'Developing cohesive visual identities that communicate your unique value.',
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    description: 'Strategic guidance on technology decisions and digital transformation.',
  },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Digital Platform Redesign',
    description: 'Complete redesign of a SaaS platform focusing on user experience and conversion optimization.',
    category: 'Web Design',
    image: '/projects/project-1.jpg',
    tags: ['UI/UX', 'React', 'Figma'],
    year: '2024',
  },
  {
    id: 'project-2',
    title: 'E-Commerce Experience',
    description: 'End-to-end development of a modern e-commerce platform with seamless checkout flow.',
    category: 'Development',
    image: '/projects/project-2.jpg',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    year: '2024',
  },
  {
    id: 'project-3',
    title: 'Brand Identity System',
    description: 'Comprehensive brand identity including logo, typography, and design system.',
    category: 'Branding',
    image: '/projects/project-3.jpg',
    tags: ['Branding', 'Design System'],
    year: '2023',
  },
  {
    id: 'project-4',
    title: 'Mobile App Design',
    description: 'iOS and Android app design for a fitness tracking application.',
    category: 'Mobile',
    image: '/projects/project-4.jpg',
    tags: ['Mobile', 'UI/UX', 'Figma'],
    year: '2023',
  },
];
