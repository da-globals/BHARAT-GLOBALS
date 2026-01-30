import { Plane, Anchor, Camera, Heart, Package, Shield } from "lucide-react"

const capabilities = [
  {
    icon: Plane,
    title: "Aerial Operations",
    description: "High-altitude surveillance and reconnaissance with advanced obstacle avoidance and autonomous flight capabilities.",
    specs: ["Max Altitude: 5000m", "Flight Time: 8hrs", "Range: 150km"],
  },
  {
    icon: Anchor,
    title: "Submersible Mode",
    description: "Amphibious drones capable of underwater operations for maritime search and rescue missions.",
    specs: ["Max Depth: 100m", "Dive Time: 4hrs", "Sonar Range: 500m"],
  },
  {
    icon: Camera,
    title: "Multi-Spectrum Imaging",
    description: "Thermal, infrared, and night vision cameras for 24/7 operations in all weather conditions.",
    specs: ["4K Resolution", "Thermal Range: 2km", "Night Vision"],
  },
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Real-time vital sign detection from altitude using advanced biosensors and AI analysis.",
    specs: ["Heart Rate", "Body Temperature", "Movement Detection"],
  },
  {
    icon: Package,
    title: "Payload Delivery",
    description: "Precision delivery of medical supplies, emergency equipment, and communication devices.",
    specs: ["Max Payload: 25kg", "Drop Accuracy: 1m", "Auto-release"],
  },
  {
    icon: Shield,
    title: "Hostile Environment",
    description: "Hardened systems for operation in disaster zones, extreme weather, and hazardous environments.",
    specs: ["IP68 Rating", "Wind: 80km/h", "Temp: -40 to 60°C"],
  },
]

export function DronesCapabilities() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Technical Specs</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Advanced Capabilities
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Military-grade drone technology adapted for humanitarian and civilian applications.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <div 
              key={capability.title} 
              className="group relative rounded-xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-border hover:bg-card"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 transition-colors group-hover:bg-accent/20">
                <capability.icon className="h-6 w-6 text-accent" />
              </div>
              
              {/* Content */}
              <h3 className="mt-4 text-lg font-semibold text-foreground">{capability.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{capability.description}</p>
              
              {/* Specs */}
              <div className="mt-4 space-y-1">
                {capability.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {spec}
                  </div>
                ))}
              </div>
              
              {/* Index Number */}
              <span className="absolute right-6 top-6 font-mono text-xs text-muted-foreground/50">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
