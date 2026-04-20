import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-xl tracking-tight text-white">ScrollPixel</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#templates" className="hover:text-foreground transition-colors">Templates</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="default" size="sm" className="rounded-full shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all font-medium">
            Browse Templates
          </Button>
        </div>
      </div>
    </nav>
  )
}
