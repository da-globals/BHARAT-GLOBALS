import { Shield, Wifi, Lock, Server, Cpu, Eye } from "lucide-react"

const features = [
  {
    name: "Offline-First Architecture",
    description: "Fully functional without internet connectivity. Local server and edge device compatible with automatic sync when online.",
    icon: Wifi,
  },
  {
    name: "Encrypted Data Handling",
    description: "Military-grade encryption for all data storage and transmission. Your sensitive information stays protected.",
    icon: Lock,
  },
  {
    name: "Ethical AI Core",
    description: "Explainable AI with built-in ethical guardrails. Emphasis on human dignity, safety, and transparent decision-making.",
    icon: Shield,
  },
  {
    name: "Modular Architecture",
    description: "Scalable design that allows integration with hardware systems, AI models, and future expansion modules.",
    icon: Server,
  },
  {
    name: "Edge Computing",
    description: "Optimized for edge devices, field units, and labs. Minimal latency with maximum processing power.",
    icon: Cpu,
  },
  {
    name: "Real-time Monitoring",
    description: "Live sensor visualization, mission tracking, and health monitoring dashboards for instant situational awareness.",
    icon: Eye,
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(255_255_255/0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Core Capabilities</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for Security & Reliability
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Every component designed with offline capability, data privacy, and long-term scalability at its core.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className="group relative rounded-xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-border hover:bg-card"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              
              {/* Index Number */}
              <span className="absolute right-6 top-6 font-mono text-xs text-muted-foreground/50">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
