import React, {
  memo,
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
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

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

const TemplateCard = memo(({ template }: any) => {
  const { ref, isVisible } = useInView(0.15)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    if (isVisible) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [isVisible])

  return (
    <div
      ref={ref}
      className="hero-stagger opacity-0 group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 overflow-hidden backdrop-blur-md [content-visibility:auto]"
      style={{
        containIntrinsicSize: '400px',
      }}
    >
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-10" />

      {/* Preview Media */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white/5 border-b border-white/5">
        {isVisible ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          >
            <source src={template.video} type="video/webm" />
            <source src={template.videoMp4} type="video/mp4" />
          </video>
        ) : (
          <img
            src={template.poster}
            alt={template.title}
            loading="lazy"
            className="object-cover w-full h-full"
          />
        )}

        {/* Live Preview CTA */}
        <a
          href={template.live}
          target="_blank"
          rel="noreferrer"
          className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg z-20"
        >
          <ExternalLink className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold text-foreground tracking-tight">
            {template.title}
          </h3>

          {/* Repo CTA */}
          <a
            href={template.repo}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {template.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
})

TemplateCard.displayName = 'TemplateCard'

function TemplateGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-24 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
      {TEMPLATES.map((template, i) => (
        <TemplateCard key={i} template={template} />
      ))}
    </div>
  )
}

function SkeletonGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-24 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-[320px] rounded-2xl border border-white/10 bg-white/[0.03] animate-pulse"
        />
      ))}
    </div>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-stagger',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.1,
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center w-full min-h-[calc(100vh-4rem)] pt-24 pb-20 px-4 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto z-10">
        <h1 className="hero-stagger opacity-0 max-w-4xl text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 leading-[1.1] font-display">
          Scroll-driven websites that actually convert.
        </h1>

        <p className="hero-stagger opacity-0 max-w-xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-sans mt-2">
          Production-ready templates built with motion, performance, and modern
          design in mind.
        </p>
      </div>

      {/* Templates */}
      <Suspense fallback={<SkeletonGrid />}>
        <TemplateGrid />
      </Suspense>
    </section>
  )
}