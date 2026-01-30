import { Button } from "@/components/ui/button"
import { Shield, Leaf, Heart, Microscope, ArrowRight } from "lucide-react"
import Link from "next/link"

const principles = [
  {
    icon: Shield,
    title: "Allergen Safety First",
    description: "Rigorous testing and certification for all allergen-free claims. Multiple production lines to prevent cross-contamination.",
  },
  {
    icon: Microscope,
    title: "Science-Backed Formulations",
    description: "Every product developed in collaboration with nutritionists and validated through clinical studies.",
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description: "Ethically sourced ingredients from certified farms with full supply chain transparency.",
  },
  {
    icon: Heart,
    title: "Patient-Centered Design",
    description: "Products designed around specific health conditions and dietary requirements, not generic market segments.",
  },
]

export function LactoPrinciples() {
  return (
    <section className="border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-chart-2">Our Principles</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nutrition You Can Trust
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Lacto Made Easy operates under strict quality and ethical guidelines to ensure 
              every product delivers on its nutritional promises.
            </p>
            
            <div className="mt-8 space-y-6">
              {principles.map((principle) => (
                <div key={principle.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-chart-2/30 bg-chart-2/10">
                    <principle.icon className="h-5 w-5 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{principle.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-8" asChild>
              <Link href="/research">
                View Research Papers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right Column - Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Background Pattern */}
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(to_right,rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              
              {/* Main Card */}
              <div className="relative rounded-2xl border border-border bg-card p-8">
                {/* Corner Decorations */}
                <div className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-chart-2/30" />
                <div className="absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-chart-2/30" />
                <div className="absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-chart-2/30" />
                <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-chart-2/30" />
                
                <div className="space-y-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-chart-2/30 bg-chart-2/10">
                    <Leaf className="h-8 w-8 text-chart-2" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Quality Certified</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      All Lacto products meet international food safety and quality standards.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border border-border bg-secondary/50 p-4">
                      <p className="text-2xl font-bold text-foreground">100%</p>
                      <p className="mt-1 text-xs text-muted-foreground">Natural Ingredients</p>
                    </div>
                    <div className="rounded-lg border border-border bg-secondary/50 p-4">
                      <p className="text-2xl font-bold text-foreground">Zero</p>
                      <p className="mt-1 text-xs text-muted-foreground">Artificial Additives</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">ISO 22000</span>
                    <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">HACCP</span>
                    <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">GMP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
