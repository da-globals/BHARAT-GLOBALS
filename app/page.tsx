import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { DivisionsSection } from "@/components/divisions-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <DivisionsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
