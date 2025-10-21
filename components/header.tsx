import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export function Header() {
  return (
    <header className="border-b-4 border-foreground bg-background/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
          <div className="w-10 h-10 rounded-full bg-primary border-4 border-foreground flex items-center justify-center">
            <Code2 className="w-5 h-5 text-foreground" />
          </div>
          <span className="text-2xl font-bold">
            abdu<span className="text-primary">{"{dev}"}</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-foreground hover:text-primary transition-colors font-medium">
            Projects
          </Link>
          <Link href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
            About
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </Link>
        </nav>

        <Link href="#contact">
          <Button className="bg-primary hover:bg-primary/90 text-foreground border-4 border-foreground font-bold rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            Get In Touch
          </Button>
        </Link>
      </div>
    </header>
  )
}
