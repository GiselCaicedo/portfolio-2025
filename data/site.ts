import type {
  SiteConfig,
  Project,
  Service,
  TechItem,
  PlatformItem,
  ProcessStep,
  FaqItem,
} from '@/types';

export const siteConfig: SiteConfig = {
  name: 'gissoler',
  title: 'Creative digital product studio',
  description: 'We design and build web experiences focused on clarity, conversion, and performance',
  tagline: 'Premium sites that convert and feel alive',
  email: 'hello@gissoler.studio',
  location: 'Remote worldwide',
  navigation: [
    { label: 'Projects', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  socials: [
    { name: 'GitHub', href: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  ],
};

export const techStack: TechItem[] = [
  { name: 'Next.js' },
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Tailwind' },
  { name: 'Figma' },
  { name: 'Framer' },
  { name: 'Sanity' },
  { name: 'Stripe' },
  { name: 'Vercel' },
  { name: 'Notion' },
];

export const services: Service[] = [
  {
    id: 'web-sites',
    title: 'Custom websites',
    description: 'Bespoke sites with clean motion, real performance, and maintainable code.',
  },
  {
    id: 'ux-strategy',
    title: 'UX and conversion',
    description: 'Content architecture, flows, and messaging that convert without friction.',
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    description: 'Fast shopping experiences, payments, and scalable catalogs.',
  },
  {
    id: 'cms',
    title: 'CMS and content',
    description: 'Simple content management for non-technical teams without losing quality.',
  },
  {
    id: 'branding',
    title: 'Visual identity',
    description: 'A consistent system for type, color, and a memorable visual language.',
  },
  {
    id: 'maintenance',
    title: 'Continuous evolution',
    description: 'Monthly improvements, optimization, and post-launch support.',
  },
];

export const projects: Project[] = [
  {
    id: 'project-aurora',
    title: 'Aurora Health',
    description: 'Healthcare portal with a mobile-first experience and one-step booking.',
    category: 'Healthcare',
    image: '/projects/project-1.jpg',
    tags: ['Web', 'UX', 'Performance'],
    year: '2025',
  },
  {
    id: 'project-lumora',
    title: 'Lumora Studio',
    description: 'Editorial site with an interactive portfolio and visual storytelling.',
    category: 'Creative',
    image: '/projects/project-2.jpg',
    tags: ['Design', 'Animation', 'CMS'],
    year: '2025',
  },
  {
    id: 'project-north',
    title: 'North Commerce',
    description: 'Ecommerce platform with a fast checkout and integrated analytics.',
    category: 'Ecommerce',
    image: '/projects/project-3.jpg',
    tags: ['Next.js', 'Stripe', 'Growth'],
    year: '2024',
  },
  {
    id: 'project-atelier',
    title: 'Atelier One',
    description: 'Identity and site for a creative studio with a B2B conversion focus.',
    category: 'Branding',
    image: '/projects/project-4.jpg',
    tags: ['Brand', 'Web', 'Strategy'],
    year: '2024',
  },
];

export const platforms: PlatformItem[] = [
  { name: 'Webflow' },
  { name: 'WordPress' },
  { name: 'Shopify' },
  { name: 'Wix Studio' },
  { name: 'Squarespace' },
  { name: 'Framer' },
  { name: 'Sanity' },
  { name: 'Notion' },
];

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    title: 'Discovery first',
    description: 'We understand your business, goals, and content before design.',
  },
  {
    id: 'strategy',
    title: 'Strategy and narrative',
    description: 'Architecture, key messages, and section structure.',
  },
  {
    id: 'design',
    title: 'Visual design',
    description: 'Component system, typography, and editorial rhythm.',
  },
  {
    id: 'build',
    title: 'Precise build',
    description: 'Clean implementation with subtle motion and performance.',
  },
  {
    id: 'launch',
    title: 'Launch and support',
    description: 'Final review, QA, and continuous improvements.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'How do we start a project?',
    answer: 'We schedule a short call, review goals, and define scope within 48 hours.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Between 3 and 6 weeks depending on complexity, content, and approvals.',
  },
  {
    question: 'Do you work with in-house teams?',
    answer: 'Yes, we integrate with marketing, product, or agencies to speed up delivery.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'We offer monthly plans for improvements, optimization, and new sections.',
  },
  {
    question: 'Can I edit the content?',
    answer: 'Yes, we provide a simple CMS so your team can edit independently.',
  },
];
