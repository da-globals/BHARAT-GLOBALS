import { Button } from "@/components/ui/button"
import { Warehouse, HardHat, Truck, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

const useCases = [
  {
    icon: Warehouse,
    title: "Warehouse & Logistics",
    description: "Prevent injuries from heavy lifting, monitor fatigue during long shifts, and provide navigation guidance in large facilities.",
    benefits: ["50% reduction in lifting injuries", "Real-time fatigue alerts", "Optimized picking routes"],
  },
  {
    icon: HardHat,
    title: "Construction Sites",
    description: "Alert workers to environmental hazards, monitor vital signs in extreme conditions, and ensure safety compliance.",
    benefits: ["Proximity danger alerts", "Heat stress monitoring", "Fall detection"],
  },
  {
    icon: Truck,
    title: "Delivery & Gig Workers",
    description: "Support independent workers with fatigue monitoring, safe driving alerts, and health tracking during long shifts.",
    benefits: ["Driver fatigue detection", "Posture correction", "Break reminders"],
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Immersive training simulations with haptic feedback for learning complex physical tasks safely.",
    benefits: ["Skill-based feedback", "Error correction", "Progress tracking"],
  },
]

export function HapticUseCases() {
  return (
    <section className="border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-chart-4">Applications</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Industry Use Cases
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Protecting workers across diverse industries with intelligent haptic feedback technology.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <div 
              key={useCase.title} 
              className="group relative rounded-xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-border hover:bg-card"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-chart-4/30 bg-chart-4/10 transition-colors group-hover:bg-chart-4/20">
                <useCase.icon className="h-6 w-6 text-chart-4" />
              </div>
              
              {/* Content */}
              <h3 className="mt-4 text-lg font-semibold text-foreground">{useCase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{useCase.description}</p>
              
              {/* Benefits */}
              <div className="mt-4 space-y-2">
                {useCase.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-chart-4" />
                    {benefit}
                  </div>
                ))}
              </div>
              
              {/* Index Number */}
              <span className="absolute right-6 top-6 font-mono text-xs text-muted-foreground/50">0{index + 1}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/contact">
              Request Product Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
