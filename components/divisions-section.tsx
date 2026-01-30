"use client"

import { Cpu, Plane, Hand, Milk, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const divisions = [
  {
    title: "Mother AI",
    description: "Core intelligence layer focused on medical decision support, mental health monitoring, and physical health insights with ethical, explainable AI behavior.",
    icon: Cpu,
    href: "/mother-ai",
    features: ["Medical Decision Support", "Mental Health Monitoring", "Ethical AI Behavior"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    title: "Mother Drones",
    description: "Surveillance and reconnaissance drones capable of aerial and submersible operation for disaster response, search & rescue, and real-time health monitoring.",
    icon: Plane,
    href: "/drones",
    features: ["Aerial & Submersible", "Disaster Response", "Real-time Monitoring"],
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    title: "Haptic Systems",
    description: "Smart haptic feedback suits for gig workers, students, and high-risk job workers featuring safety alerts, fatigue monitoring, and real-time feedback.",
    icon: Hand,
    href: "/haptic",
    features: ["Safety Alerts", "Fatigue Monitoring", "Training Simulations"],
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    borderColor: "border-chart-4/30",
  },
  {
    title: "Lacto Made Easy",
    description: "Customized dairy and milk-based products with allergen-free formulations, therapeutic nutrition, and personalized nutrition profiles.",
    icon: Milk,
    href: "/lacto",
    features: ["Allergen-Free", "Therapeutic Nutrition", "Personalized Profiles"],
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    borderColor: "border-chart-2/30",
  },
]

export function DivisionsSection() {
  return (
    <section className="relative border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Ecosystem</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technology Divisions
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Four specialized divisions working in harmony to create a comprehensive technological ecosystem for human well-being.
          </p>
        </div>

        {/* Division Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {divisions.map((division, index) => (
            <Card 
              key={division.title} 
              className="group relative overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Corner Accent */}
              <div className={`absolute right-0 top-0 h-24 w-24 ${division.bgColor} blur-2xl transition-all duration-300 group-hover:h-32 group-hover:w-32`} />
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${division.bgColor} border ${division.borderColor}`}>
                    <division.icon className={`h-6 w-6 ${division.color}`} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <CardTitle className="mt-4 text-xl text-foreground">{division.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{division.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="relative">
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {division.features.map((feature) => (
                    <span 
                      key={feature} 
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Link */}
                <Button variant="ghost" className="mt-6 -ml-4 group/btn" asChild>
                  <Link href={division.href}>
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
