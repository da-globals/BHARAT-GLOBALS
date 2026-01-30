"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Plane, Navigation2, Radio, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export function DronesHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[80vh] overflow-hidden pt-16">
      {/* Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Animated Glow Effects */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-accent/15 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Division Badge */}
          <div className={`mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-4 py-2 transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Plane className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Aerial & Submersible Operations</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-balance text-4xl font-bold tracking-tight text-foreground transition-all delay-100 duration-700 sm:text-5xl lg:text-6xl ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Mother Drones
          </h1>
          
          <p className={`mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground transition-all delay-200 duration-700 lg:text-xl ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Advanced autonomous drone systems for surveillance, reconnaissance, disaster response, 
            and search & rescue operations with real-time health monitoring capabilities.
          </p>

          {/* CTA Buttons */}
          <div className={`mt-8 flex flex-wrap justify-center gap-4 transition-all delay-300 duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Button size="lg" asChild>
              <Link href="#mission-control">
                Mission Control
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#fleet">
                <Plane className="mr-2 h-4 w-4" />
                View Fleet
              </Link>
            </Button>
          </div>

          {/* Key Capabilities */}
          <div className={`mt-16 grid gap-6 sm:grid-cols-3 transition-all delay-[400ms] duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                <Navigation2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Autonomous Navigation</h3>
              <p className="mt-2 text-sm text-muted-foreground">GPS-denied navigation with AI pathfinding</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                <Radio className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Real-time Telemetry</h3>
              <p className="mt-2 text-sm text-muted-foreground">Live sensor feeds and mission updates</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-chart-4/30 bg-chart-4/10">
                <Shield className="h-6 w-6 text-chart-4" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Life-Saving Systems</h3>
              <p className="mt-2 text-sm text-muted-foreground">Health monitors and rescue equipment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
