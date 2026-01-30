import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MotherAIHero } from "@/components/mother-ai/hero"
import { MotherAIDashboard } from "@/components/mother-ai/dashboard"
import { MotherAICapabilities } from "@/components/mother-ai/capabilities"
import { MotherAIEthics } from "@/components/mother-ai/ethics"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mother AI | Core Intelligence Layer | Mother Ecosystem",
  description: "Holistic AI focused on medical decision support, mental health monitoring, physical health insights, and ethical, explainable AI behavior.",
}

export default function MotherAIPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <MotherAIHero />
      <MotherAIDashboard />
      <MotherAICapabilities />
      <MotherAIEthics />
      <Footer />
    </main>
  )
}
