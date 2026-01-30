import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const nutritionData = [
  { nutrient: "Protein", amount: "25g", dv: 50, color: "bg-chart-2" },
  { nutrient: "Calcium", amount: "400mg", dv: 40, color: "bg-primary" },
  { nutrient: "Vitamin D", amount: "4mcg", dv: 20, color: "bg-accent" },
  { nutrient: "Vitamin B12", amount: "1.2mcg", dv: 50, color: "bg-chart-4" },
  { nutrient: "Phosphorus", amount: "250mg", dv: 20, color: "bg-chart-2" },
  { nutrient: "Potassium", amount: "350mg", dv: 8, color: "bg-primary" },
]

const therapeuticBenefits = [
  { 
    condition: "Bone Health", 
    description: "Enhanced calcium and Vitamin D for skeletal support",
    efficacy: "92%"
  },
  { 
    condition: "Muscle Recovery", 
    description: "High-quality protein with optimal amino acid profile",
    efficacy: "88%"
  },
  { 
    condition: "Digestive Health", 
    description: "Probiotic strains for gut microbiome balance",
    efficacy: "85%"
  },
  { 
    condition: "Immune Support", 
    description: "Fortified with zinc and immune-boosting compounds",
    efficacy: "79%"
  },
]

export function LactoNutrition() {
  return (
    <section id="nutrition" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-chart-2">Analysis</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nutritional Analysis
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Comprehensive breakdown of nutritional content and therapeutic benefits.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Nutrition Facts */}
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Nutrition Facts</CardTitle>
              <CardDescription>Per 100ml serving - Standard formulation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nutritionData.map((item) => (
                  <div key={item.nutrient} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{item.nutrient}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{item.amount}</span>
                        <Badge variant="outline" className="text-xs">{item.dv}% DV</Badge>
                      </div>
                    </div>
                    <Progress value={item.dv} className={`h-2 ${item.color}`} />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 rounded-lg border border-border bg-secondary/30 p-4">
                <p className="text-xs text-muted-foreground">
                  * Percent Daily Values (DV) are based on a 2,000 calorie diet. 
                  Your daily values may be higher or lower depending on your calorie needs.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Therapeutic Benefits */}
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Therapeutic Benefits</CardTitle>
              <CardDescription>Clinically studied health outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {therapeuticBenefits.map((benefit) => (
                  <div key={benefit.condition} className="rounded-lg border border-border/50 bg-secondary/30 p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">{benefit.condition}</h4>
                      <Badge variant="outline" className="border-chart-2/30 bg-chart-2/10 text-chart-2">
                        {benefit.efficacy} efficacy
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
