"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Milk, RefreshCw, Download, Save } from "lucide-react"

const allergenOptions = [
  { id: "lactose", label: "Lactose-Free", checked: false },
  { id: "gluten", label: "Gluten-Free", checked: true },
  { id: "soy", label: "Soy-Free", checked: false },
  { id: "nuts", label: "Nut-Free", checked: true },
  { id: "casein", label: "Casein-Free", checked: false },
]

const nutritionGoals = [
  { id: "protein", label: "High Protein", description: "Muscle building & recovery" },
  { id: "calcium", label: "Calcium Enriched", description: "Bone health support" },
  { id: "probiotic", label: "Probiotic", description: "Gut health & immunity" },
  { id: "lowfat", label: "Low Fat", description: "Weight management" },
]

export function LactoProductConfig() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>(["protein", "calcium"])
  const [proteinLevel, setProteinLevel] = useState([25])
  const [calciumLevel, setCalciumLevel] = useState([40])

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    )
  }

  return (
    <section id="configurator" className="border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-chart-2">Offline Configuration</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Product Configurator
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-chart-2/30 bg-chart-2/5 text-chart-2">
              <span className="mr-2 h-2 w-2 rounded-full bg-chart-2" />
              Local Mode
            </Badge>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Configuration Panel */}
          <div className="space-y-6">
            {/* Allergen Settings */}
            <Card className="border-border/50 bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Allergen Settings</CardTitle>
                <CardDescription>Configure allergen-free requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {allergenOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-3">
                      <Checkbox id={option.id} defaultChecked={option.checked} />
                      <Label htmlFor={option.id} className="text-sm font-medium text-foreground">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nutrition Goals */}
            <Card className="border-border/50 bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Nutrition Goals</CardTitle>
                <CardDescription>Select therapeutic nutrition targets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {nutritionGoals.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => toggleGoal(goal.id)}
                      className={`rounded-lg border p-4 text-left transition-all ${
                        selectedGoals.includes(goal.id)
                          ? 'border-chart-2 bg-chart-2/10'
                          : 'border-border/50 bg-secondary/30 hover:border-border'
                      }`}
                    >
                      <p className="font-medium text-foreground">{goal.label}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{goal.description}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nutrient Levels */}
            <Card className="border-border/50 bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Nutrient Levels</CardTitle>
                <CardDescription>Fine-tune nutritional content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Protein Content</Label>
                    <span className="text-sm font-medium text-chart-2">{proteinLevel}g/100ml</span>
                  </div>
                  <Slider
                    value={proteinLevel}
                    onValueChange={setProteinLevel}
                    max={50}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Calcium Content</Label>
                    <span className="text-sm font-medium text-chart-2">{calciumLevel}% DV</span>
                  </div>
                  <Slider
                    value={calciumLevel}
                    onValueChange={setCalciumLevel}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Product Preview</CardTitle>
                  <CardDescription>Generated formulation summary</CardDescription>
                </div>
                <Button variant="outline" size="icon">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border border-border bg-secondary/30 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-chart-2/30 bg-chart-2/10">
                    <Milk className="h-8 w-8 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Custom Formulation #2847</h3>
                    <p className="text-sm text-muted-foreground">Therapeutic Dairy Blend</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Allergen Status</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-chart-2/30 bg-chart-2/10 text-chart-2">Gluten-Free</Badge>
                      <Badge variant="outline" className="border-chart-2/30 bg-chart-2/10 text-chart-2">Nut-Free</Badge>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Nutrition Goals</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedGoals.map(goal => (
                        <Badge key={goal} variant="outline" className="border-primary/30 bg-primary/10 text-primary capitalize">
                          {goal}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="rounded-lg border border-border bg-card p-3">
                      <p className="text-2xl font-bold text-foreground">{proteinLevel}g</p>
                      <p className="text-xs text-muted-foreground">Protein/100ml</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-3">
                      <p className="text-2xl font-bold text-foreground">{calciumLevel}%</p>
                      <p className="text-xs text-muted-foreground">Calcium DV</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Button className="flex-1">
                  <Save className="mr-2 h-4 w-4" />
                  Save Profile
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
