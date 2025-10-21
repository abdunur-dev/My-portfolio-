import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "BaseLink App",
      description:
        " A comprehensive blockchain application built on Base network with modern UI and seamless user experience. It also showing your real time ETH balance by only Connect Ur wallet.",
      image: "/IMG_20251021_235155_188.jpg",
      tags: ["Next.js", "Base", "Web3", "TypeScript"],
      liveUrl: "https://baselink-app.vercel.app",
      codeUrl: "https://github.com/abdunur-dev/Base-day-2-challeng",
    },
    {
      title: "Neo Base App",
      description:
        "Initial Base blockchain challenge project showcasing smart contract integration and decentralized application development.",
      image: "/IMG_20251021_235153_290.jpg ",
      tags: ["React", "Solidity", "Base", "Ethers.js"],
      liveUrl: "https://neobaseapp.vercel.app",
      codeUrl: "https://github.com/abdunur-dev/Base-day1-challeng",
    },
    {
      title: "NFT Socal Sell",
      description:
        " A decentralized airdrop platform built on Base network with NFT buying method and claim functionality.",
      image: "/IMG_20251021_235147_091.jpg ",
      tags: ["Next.js", "Base", "Smart Contracts", "Web3"],
      liveUrl: "https://basedrop-miniapp.vercel.app",
      codeUrl: "https://github.com/abdunur-dev/Base-dapp-day-5-challenge",
    },
    {
      title: "VarilHub Mini App",
      description:
        "A comprehensive hub for managing decentralized applications with modern UI and seamless integration and also it have a game to interact or to entertainment with mini app.",
      image: "/IMG_20251021_235145_867.jpg",
      tags: ["Next.js", "TypeScript", "Base", "DApp"],
      liveUrl: "https://varil-hub-miniapp.vercel.app",
      codeUrl: "https://github.com/abdunur-dev/Day-6-base-challenge-",
    },
    {
      title: "My person portfolio",
      description:
        "This very site — built to showcase my skills and projects. You’re welcome to explore or even clone it to build your own.",
      image: "/IMG_20251021_203857_242.jpg",
      tags: ["React", "Web3", "TypeScript", "Blockchain"],
      liveUrl: "https://abdudevapp.vercel.app/",
      codeUrl: "https://github.com/abdunur-dev/My-portfolio-.git",
    },
    {
      title: "Salah Apologetics",
      description:
        "A comprehensive Islamic resource platform providing educational content, Some articles, and community engagement features.",
      image: "/IMG_20251021_235148_680.jpg ",
      tags: ["HTML", "CSS", "JAVASCRIPT", "FIREBASE INTEGRATION"],
      liveUrl: "https://salahapologetics.com",
      codeUrl: null, // No GitHub for this project
    },
  ]

  return (
    <section id="projects" className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-8 md:mb-12 animate-in fade-in duration-700">
        <div className="inline-block mb-4 px-4 py-2 md:px-6 md:py-3 border-4 border-foreground bg-primary rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform">
          <h2 className="text-xl md:text-3xl font-bold flex items-center gap-2">✨ FEATURED PROJECTS ✨</h2>
        </div>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          A selection of recent work showcasing my expertise in building modern web applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-4 border-foreground rounded-2xl bg-card overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 animate-in fade-in duration-700"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-40 md:h-48 bg-muted border-b-4 border-foreground overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">{project.title}</h3>
              <div className="h-1 w-12 md:w-16 bg-primary mb-3 md:mb-4" />

              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    className="text-xs border-2 border-foreground bg-secondary text-foreground hover:bg-primary font-medium transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 md:gap-3">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full text-sm md:text-base bg-primary hover:bg-primary/90 text-foreground border-3 border-foreground font-bold rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                    Live Demo <ExternalLink className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                  </Button>
                </a>
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-3 border-foreground font-bold rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all bg-background hover:bg-secondary"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
