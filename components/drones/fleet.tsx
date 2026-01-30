import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plane, ArrowRight } from "lucide-react"
import Link from "next/link"

const fleetTypes = [
  {
    name: "MothEye Series",
    type: "Surveillance",
    description: "Long-range reconnaissance drones with advanced optical systems for persistent monitoring.",
    models: ["MothEye-5", "MothEye-7", "MothEye-9 Pro"],
    status: "operational",
    units: 24,
  },
  {
    name: "AquaHawk Series",
    type: "Amphibious",
    description: "Hybrid air-water drones for coastal operations and underwater search missions.",
    models: ["AquaHawk-2", "AquaHawk-3", "AquaHawk-3S"],
    status: "operational",
    units: 12,
  },
  {
    name: "CargoFly Series",
    type: "Delivery",
    description: "Heavy-lift drones for medical supply delivery and emergency equipment transport.",
    models: ["CargoFly-8", "CargoFly-12", "CargoFly-20"],
    status: "operational",
    units: 18,
  },
  {
    name: "SwarmNet Series",
    type: "Coordinated",
    description: "Small autonomous drones that work in coordinated swarms for area coverage.",
    models: ["SwarmNet Mini", "SwarmNet Micro"],
    status: "beta",
    units: 150,
  },
]

export function DronesFleet() {
  return (
    <section id="fleet" className="border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Fleet Overview</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Drone Fleet Status
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Our diverse fleet of specialized drones ready for any mission type.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {fleetTypes.map((fleet) => (
            <Card key={fleet.name} className="border-border/50 bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                    <Plane className="h-5 w-5 text-accent" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={fleet.status === 'operational' ? 'border-chart-2/30 bg-chart-2/10 text-chart-2' : 'border-chart-4/30 bg-chart-4/10 text-chart-4'}
                  >
                    {fleet.status}
                  </Badge>
                </div>
                <CardTitle className="mt-4">{fleet.name}</CardTitle>
                <CardDescription>{fleet.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{fleet.description}</p>
                
                {/* Models */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {fleet.models.map((model) => (
                    <span 
                      key={model} 
                      className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {model}
                    </span>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm text-muted-foreground">Active Units</span>
                  <span className="text-lg font-semibold text-foreground">{fleet.units}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/contact">
              Request Fleet Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
