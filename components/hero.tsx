import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter, Send } from "lucide-react"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-32">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-block mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 border-3 border-foreground bg-secondary rounded-lg">
            <span className="text-xs md:text-sm font-mono text-muted-foreground">{"<Web3 Dev />"}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-balance">
            Building Digital{" "}
            <span className="relative inline-block">
              <span className="text-primary">Experiences</span>
              <svg
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 10C50 5 150 5 198 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="text-primary"
                />
              </svg>
            </span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
            Web3 & Full-stack developer crafting decentralized applications and modern web experiences. Specializing in
            blockchain technology, smart contracts, React, Next.js, and TypeScript.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
            <Link href="#projects">
              <Button className="text-sm md:text-base bg-primary hover:bg-primary/90 text-foreground border-4 border-foreground font-bold rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:scale-105">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                className="text-sm md:text-base border-4 border-foreground font-bold rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all bg-background hover:bg-secondary hover:scale-105"
              >
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="flex gap-3 md:gap-4">
            <a
              href="https://twitter.com/AbdurhamanNur"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 border-3 border-foreground bg-background hover:bg-primary rounded-lg flex items-center justify-center transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110"
            >
              <Twitter className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdurhaman-nur"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 border-3 border-foreground bg-background hover:bg-primary rounded-lg flex items-center justify-center transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://github.com/abdunur-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 border-3 border-foreground bg-background hover:bg-primary rounded-lg flex items-center justify-center transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://t.me/abdunur_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 border-3 border-foreground bg-background hover:bg-primary rounded-lg flex items-center justify-center transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110"
            >
              <Send className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right duration-700">
          <div className="border-4 border-foreground rounded-2xl bg-card p-4 md:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/daa19134f9e745b1d342a56ca70b3ef6-yXSeo7vKYbRMA5DvncmcTNqAtRx9Pu.jpg"
              alt="Abdurhaman Nur - Web3 Developer"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Floating elements with animation */}
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-20 md:h-20 border-4 border-foreground bg-primary rounded-2xl flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-12 animate-bounce">
            <span className="text-2xl md:text-3xl">⚡</span>
          </div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-20 h-20 md:w-24 md:h-24 border-4 border-foreground bg-secondary rounded-2xl flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-12 animate-pulse">
            <span className="text-3xl md:text-4xl">🚀</span>
          </div>
        </div>
      </div>
    </section>
  )
}
