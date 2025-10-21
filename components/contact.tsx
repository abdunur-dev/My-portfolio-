"use client"
import { Twitter, Linkedin, Github, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 md:mb-12 animate-in fade-in duration-700">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="h-2 w-20 md:w-24 bg-primary mx-auto mb-4 md:mb-6" />
          <p className="text-base md:text-xl text-muted-foreground px-4">
            Have a project in mind? Let's connect through social media.
          </p>
        </div>

        <div className="border-4 border-foreground rounded-2xl bg-card p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Connect With Me</h3>
            <p className="text-sm md:text-base text-muted-foreground">Choose your preferred platform to reach out</p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <a
              href="https://twitter.com/AbdurhamanNur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 border-3 border-foreground bg-background hover:bg-primary rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:scale-105"
            >
              <Twitter className="w-6 h-6 md:w-8 md:h-8" />
              <span className="text-sm md:text-base font-bold">Twitter</span>
            </a>

            <a
              href="https://www.linkedin.com/in/abdurhaman-nur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 border-3 border-foreground bg-background hover:bg-primary rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:scale-105"
            >
              <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
              <span className="text-sm md:text-base font-bold">LinkedIn</span>
            </a>

            <a
              href="https://github.com/abdunur-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 border-3 border-foreground bg-background hover:bg-primary rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:scale-105"
            >
              <Github className="w-6 h-6 md:w-8 md:h-8" />
              <span className="text-sm md:text-base font-bold">GitHub</span>
            </a>

            <a
              href="https://t.me/abdunur_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 border-3 border-foreground bg-background hover:bg-primary rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:scale-105"
            >
              <Send className="w-6 h-6 md:w-8 md:h-8" />
              <span className="text-sm md:text-base font-bold">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
