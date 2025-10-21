import { MapPin, Briefcase, Users } from "lucide-react"

export function Stats() {
  const stats = [
    { icon: MapPin, label: "COUNTRIES", value: "2+" },
    { icon: Briefcase, label: "PROJECTS", value: "10+" },
    { icon: Users, label: "CLIENTS", value: "5+" },
  ]

  return (
    <section className="container mx-auto px-4 py-8 md:py-12 animate-in fade-in duration-700">
      <div className="border-4 border-foreground rounded-2xl bg-card p-4 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform">
              <div className="w-10 h-10 md:w-12 md:h-12 border-3 border-foreground bg-primary rounded-lg flex items-center justify-center">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
