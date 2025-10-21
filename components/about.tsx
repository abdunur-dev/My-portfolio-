import { Code2, Blocks, Rocket, Zap } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: Blocks,
      title: "Blockchain Development",
      description: "Smart contracts, DApps, and Web3 integrations using Solidity and modern blockchain frameworks.",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building scalable applications with React, Next.js, TypeScript, and modern backend technologies.",
    },
    {
      icon: Rocket,
      title: "Modern UI/UX",
      description: "Creating beautiful, responsive interfaces with Tailwind CSS and cutting-edge design patterns.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensuring fast, efficient applications with best practices in code optimization and architecture.",
    },
  ]

  return (
    <section id="about" className="container mx-auto px-4 py-12 md:py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-2 w-20 md:w-24 bg-primary mx-auto mb-4 md:mb-6" />
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed px-4">
            I'm a passionate Web3 and full-stack developer specializing in building decentralized applications and
            modern web experiences. With expertise in blockchain technology, smart contracts, and cutting-edge web
            frameworks, I create innovative solutions that push the boundaries of what's possible on the web.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border-4 border-foreground rounded-2xl bg-card p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 border-3 border-foreground bg-primary rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <skill.icon className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="border-4 border-foreground rounded-2xl bg-primary p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-foreground">Let's Build Something Amazing</h3>
          <p className="text-base md:text-lg text-foreground/80 mb-4 md:mb-6">
            I'm always interested in collaborations and new opportunities. Feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  )
}
