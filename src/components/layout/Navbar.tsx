import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-display font-bold text-xl tracking-tight text-white hover:opacity-80 transition-opacity">
            ScrollPixel
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Templates</Link>
          <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
        
        <div className="flex items-center gap-4">
         
          <Link to="/contact">
            <Button size="sm" className="rounded-full font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all">
              Custom Request
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
