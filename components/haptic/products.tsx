import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hand, Shirt, Watch, Glasses } from "lucide-react"

const products = [
  {
    name: "HapticSuit Pro",
    type: "Full Body Suit",
    description: "Complete body coverage with 128 haptic feedback points for comprehensive safety monitoring.",
    icon: Shirt,
    features: ["128 Haptic Points", "Full Body Coverage", "IP65 Rating", "12hr Battery"],
    price: "Enterprise",
    status: "available",
  },
  {
    name: "HapticVest Lite",
    type: "Upper Body Vest",
    description: "Lightweight vest design for torso-focused monitoring and feedback in warehouse environments.",
    icon: Shirt,
    features: ["48 Haptic Points", "Lightweight Design", "IP54 Rating", "18hr Battery"],
    price: "Professional",
    status: "available",
  },
  {
    name: "HapticBand",
    type: "Wrist Wearable",
    description: "Compact wrist-worn device for basic vitals and simple haptic notifications.",
    icon: Watch,
    features: ["8 Haptic Points", "Pulse Monitor", "IP68 Rating", "7-day Battery"],
    price: "Standard",
    status: "available",
  },
  {
    name: "HapticGloves",
    type: "Hand Protection",
    description: "Precision haptic feedback gloves for detailed manipulation tasks and training.",
    icon: Hand,
    features: ["32 Haptic Points", "Grip Sensors", "Touch Compatible", "8hr Battery"],
    price: "Professional",
    status: "coming-soon",
  },
]

export function HapticProducts() {
  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-chart-4">Product Line</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Haptic Wearables
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            A range of haptic devices designed for different work environments and use cases.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Card key={product.name} className="border-border/50 bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-chart-4/30 bg-chart-4/10">
                    <product.icon className="h-6 w-6 text-chart-4" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-border">{product.price}</Badge>
                    <Badge 
                      variant="outline" 
                      className={product.status === 'available' ? 'border-chart-2/30 bg-chart-2/10 text-chart-2' : 'border-chart-4/30 bg-chart-4/10 text-chart-4'}
                    >
                      {product.status === 'available' ? 'Available' : 'Coming Soon'}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="mt-4">{product.name}</CardTitle>
                <CardDescription>{product.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                
                {/* Features */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span 
                      key={feature} 
                      className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
