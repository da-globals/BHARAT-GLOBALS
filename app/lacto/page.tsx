import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LactoHero } from "@/components/lacto/hero"
import { LactoProductConfig } from "@/components/lacto/product-config"
import { LactoNutrition } from "@/components/lacto/nutrition"
import { LactoPrinciples } from "@/components/lacto/principles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lacto Made Easy | Personalized Nutrition | Mother Ecosystem",
  description: "Customized dairy and milk-based products with allergen-free formulations, therapeutic nutrition, and personalized nutrition profiles.",
}

export default function LactoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <LactoHero />
      <LactoProductConfig />
      <LactoNutrition />
      <LactoPrinciples />
      <Footer />
    </main>
  )
}
