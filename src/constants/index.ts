export interface Template {
  title: string
  description: string
  repo: string
  image: string
  tags: string[]
  live?: string
  video?: string
}

export const TEMPLATES: Template[] = [
  {
    title: 'AI Landing Page',
    description: 'High-converting landing page built for modern software products. Features clean animations and a minimal aesthetic.',
    repo: 'https://github.com/Anup9148680234/ai-landing-page-template',
    image: '/gifs/ai-landing-page-template.gif',
    video: '/videos/ai-landing-page-template.webm',
    tags: ['React', 'Tailwind', 'GSAP'],
    live: 'https://ai-landing-page-template-five.vercel.app/',
  },
  {
    title: 'Beverage Landing Page',
    description: 'Premium animated dark-mode website using sleek scrolling effects and interactive glassmorphism.',
    repo: 'https://github.com/Anup9148680234/thesilkshake',
    image: '/gifs/thesilkshake.gif',
    video: '/videos/thesilkshake.webm',
    tags: ['React', 'Tailwind', 'GSAP'],
    live: 'https://thesilkshake.vercel.app/',
  },
  {
    title: 'AI Web Agency',
    description: 'Sleek and modern landing page for an AI web agency, featuring smooth animations and a clean design.',
    repo: 'https://github.com/Anup9148680234/ai-web-agency-template',
    image: '/gifs/ai-web-agency-template.gif',
    video: '/videos/ai-web-agency-template.webm',
    tags: ['Framer', 'React', 'Tailwind'],
    live: 'https://ai-web-agency-template.vercel.app/',
  },
  {
    title: 'AI Medical Landing Page',
    description: 'Dedicated landing page for an AI-powered medical solution, combining professionalism with modern design elements.',
    repo: 'https://github.com/Anup9148680234/ai-medical-landing-page',
    image: '/gifs/ai-medical-landing-page.gif',
    video: '/videos/ai-medical-landing-page.webm',
    tags: ['React', 'Tailwind', 'THREE.js'],
    live: 'https://ai-medical-landing-page.vercel.app/',
  },
  {
    title: 'AI Sports Landing Page',
    description: 'Dynamic landing page for an AI-powered sports platform, showcasing cutting-edge technology and engaging user experience.',
    repo: 'https://scrollpixel.gumroad.com/l/vkukob',
    image: '/gifs/ai-sports-landing-template.gif',
    video: '/videos/ai-sports-landing-template.webm',
    tags: ['React', 'Tailwind', 'GSAP'],
    live: 'https://ai-sports-landing-template.vercel.app/',
  },
  {
  title: 'AI Jewelry Shopify Store Template',
  description: 'Modern React-based Shopify storefront template built for luxury jewelry brands with elegant UI, responsive layouts, and seamless Shopify Storefront API integration.',
  repo: 'https://scrollpixel.gumroad.com/l/ai-jewelry-shopify-store-template',
  image: '/gifs/ai-jewelry-shopify-store-template.gif',
  video: '/videos/ai-jewelry-shopify-store-template.webm',
  tags: ['React', 'Shopify', 'Ecommerce'],
  live: 'https://ai-jewelry-shopify-store-template.vercel.app/',
},
]
