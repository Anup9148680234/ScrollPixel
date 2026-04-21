import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import gsap from 'gsap'
import { ExternalLink } from 'lucide-react'
import { TEMPLATES } from '@/constants'

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.8A5.5 5.5 0 0 0 2 12.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
      <path d="M9 18c-4.5 1.5-5-2.5-7-3" />
    </svg>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-stagger', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.1 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative flex flex-col items-center w-full min-h-[calc(100vh-4rem)] pt-24 pb-20 px-4 overflow-hidden">
      
      {/* Subtle top glow as secondary accent to the CSS gradient */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto z-10">
        <h1 className="hero-stagger opacity-0 max-w-4xl text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 leading-[1.1] font-display">
          Scroll-driven websites that actually convert.
        </h1>
        
        <p className="hero-stagger opacity-0 max-w-xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-sans mt-2">
          Production-ready templates built with motion, performance, and modern design in mind.
        </p>
        
        <div className="hero-stagger opacity-0 flex flex-col sm:flex-row items-center gap-4">
          <Link to="/pricing">
            <Button size="lg" className="rounded-full px-8 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] border-none transition-all duration-300">
              Go Premium
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="rounded-full px-8 text-base font-medium bg-transparent border-border/80 hover:bg-white/5 transition-colors">
            View Demo
          </Button>
        </div>
      </div>

      {/* Template Grid underneath */}
      <div className="w-full max-w-6xl mx-auto mt-24 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        {TEMPLATES.map((template, i) => (
          <a
            key={i}
            href={template.repo}
            target="_blank"
            rel="noreferrer"
            className="hero-stagger opacity-0 group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-0 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 overflow-hidden backdrop-blur-md"
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white/5 mb-4 border border-white/5">
              <img 
                src={template.image} 
                alt={template.title} 
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <div className="p-3  pb-2 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-foreground tracking-tight">{template.title}</h3>
                <GithubIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {template.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      
    </section>
  )
}
