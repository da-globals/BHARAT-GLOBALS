import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DronesHero } from "@/components/drones/hero"
import { DronesMissionControl } from "@/components/drones/mission-control"
import { DronesCapabilities } from "@/components/drones/capabilities"
import { DronesFleet } from "@/components/drones/fleet"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mother Drones | Surveillance & Rescue Division | Mother Ecosystem",
  description: "Advanced aerial and submersible drones for disaster response, search & rescue, and real-time health monitoring with offline mission planning.",
}

export default function DronesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <DronesHero />
      <DronesMissionControl />
      <DronesCapabilities />
      <DronesFleet />
      <Footer />
    </main>
  )
}
