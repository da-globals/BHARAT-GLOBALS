"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Shield, Activity, Wifi } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Animated Glow Effects */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Status Badge */}
            <div className={`mb-8 flex items-center gap-2 transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-sm font-medium text-primary">System Online</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2">
                <Wifi className="h-3 w-3 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Offline Ready</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className={`text-balance text-4xl font-bold tracking-tight text-foreground transition-all delay-100 duration-700 sm:text-5xl lg:text-6xl ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <span className="block">Intelligent Systems</span>
              <span className="block text-primary">For Humanity</span>
            </h1>

            <p className={`mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground transition-all delay-200 duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Mother Ecosystem is a holistic technological platform centered around ethical AI, 
              designed to support social, physical, and mental well-being across medical, 
              disaster response, and workforce applications.
            </p>

            {/* CTA Buttons */}
            <div className={`mt-8 flex flex-wrap gap-4 transition-all delay-300 duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Button size="lg" asChild>
                <Link href="/mother-ai">
                  Explore Mother AI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className={`mt-12 grid grid-cols-3 gap-8 transition-all delay-[400ms] duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div>
                <p className="text-3xl font-bold text-foreground">4</p>
                <p className="mt-1 text-sm text-muted-foreground">Core Divisions</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">100%</p>
                <p className="mt-1 text-sm text-muted-foreground">Offline Capable</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">24/7</p>
                <p className="mt-1 text-sm text-muted-foreground">Mission Ready</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className={`relative flex items-center justify-center transition-all delay-500 duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative aspect-square w-full max-w-lg">
              {/* Outer Ring */}
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border border-border/50" />
              <div className="absolute inset-4 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-primary/20" />
              <div className="absolute inset-8 animate-[spin_10s_linear_infinite] rounded-full border border-accent/20" />
              
              {/* Central Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-border bg-card shadow-2xl shadow-primary/5">
                  <Cpu className="h-16 w-16 text-primary" />
                  
                  {/* Orbiting Icons */}
                  <div className="absolute -top-4 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <div className="absolute -left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card">
                    <Wifi className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-primary/30" />
              <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-primary/30" />
              <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-primary/30" />
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
