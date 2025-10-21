import { Code2, Heart, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-card mt-12 md:mt-20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary border-4 border-foreground flex items-center justify-center">
                <Code2 className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
              </div>
              <span className="text-xl md:text-2xl font-bold">
                abdu<span className="text-primary">{"{dev}"}</span>
              </span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              Building the future of the web, one line of code at a time.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#projects"
                  className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Let's Connect</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3">
              Have a project in mind? Reach out on{" "}
              <a
                href="https://t.me/abdunur_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline inline-flex items-center gap-1"
              >
                Telegram <Send className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            </p>
          </div>
        </div>

        <div className="border-t-3 border-foreground pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>© 2025 abdu{"{dev}"}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary" /> and lots of ☕
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
