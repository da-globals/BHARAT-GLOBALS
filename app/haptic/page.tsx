import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HapticHero } from "@/components/haptic/hero"
import { HapticDashboard } from "@/components/haptic/dashboard"
import { HapticProducts } from "@/components/haptic/products"
import { HapticUseCases } from "@/components/haptic/use-cases"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Haptic Systems | Smart Feedback Division | Mother Ecosystem",
  description: "Smart haptic feedback suits for workers, students, and high-risk professionals with safety alerts, fatigue monitoring, and real-time physical feedback.",
}

export default function HapticPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HapticHero />
      <HapticDashboard />
      <HapticProducts />
      <HapticUseCases />
      <Footer />
    </main>
  )
}
