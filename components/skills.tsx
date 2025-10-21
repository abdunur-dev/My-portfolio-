"use client"

import { useEffect, useRef } from "react"

const skills = [
  { name: "Solidity", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Smart Contracts", icon: "📝" },
  { name: "Web3.js", icon: "🌐" },
  { name: "Ethers.js", icon: "💎" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Blockchain", icon: "⛓️" },
  { name: "DApps", icon: "🚀" },
  { name: "Git", icon: "📦" },
]

export function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 20)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section id="skills" className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">My Skills</h2>
          <p className="text-base md:text-lg text-gray-700">Technologies I work with</p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#FFF8F0] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#FFF8F0] to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-hidden py-4"
            style={{ scrollBehavior: "auto" }}
          >
            {/* Duplicate skills for infinite scroll effect */}
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white border-3 border-black rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <span className="text-base md:text-xl font-bold whitespace-nowrap">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-8 md:mt-12 flex justify-center gap-2">
          <div
            className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </section>
  )
}
