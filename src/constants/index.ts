export interface Template {
  title: string
  description: string
  repo: string
  image: string
  tags: string[]
}

export const TEMPLATES: Template[] = [
  {
    title: 'AI Landing Page',
    description: 'High-converting landing page built for modern software products. Features clean animations and a minimal aesthetic.',
    repo: 'https://github.com/anup2/',
    image: '/gifs/ai-landing-page-template.gif',
    tags: ['React', 'Tailwind', 'GSAP'],
  },
  {
    title: 'Beverage Landing Page',
    description: 'Premium animated dark-mode website using sleek scrolling effects and interactive glassmorphism.',
    repo: 'https://github.com/anup2/',
    image: '/gifs/thesilkshake.gif',
    tags: ['React', 'Tailwind', 'GSAP'],
  },
  {
    title: 'AI Web Agency',
    description: 'Sleek and modern landing page for an AI web agency, featuring smooth animations and a clean design.',
    repo: 'https://github.com/anup2/',
    image: '/gifs/ai-web-agency-template.gif',
    tags: ['Framer', 'React', 'Tailwind'],
  },
  {
    title: 'AI Medical Landing Page',
    description: 'Dedicated landing page for an AI-powered medical solution, combining professionalism with modern design elements.',
    repo: 'https://github.com/anup2/',
    image: '/gifs/ai-medical-landing-page.gif',
    tags: ['React', 'Tailwind', 'THREE.js'],
  },
  {
    title: 'AI Sports Landing Page',
    description: 'Dynamic landing page for an AI-powered sports platform, showcasing cutting-edge technology and engaging user experience.',
    repo: 'https://github.com/anup2/',
    image: '/gifs/ai-sports-landing-template.gif',
    tags: ['React', 'Tailwind', 'GSAP'],
  },
]
