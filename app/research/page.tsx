import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Users, Microscope, Heart, Brain, Plane, Hand, Milk, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research & Impact | Mother Ecosystem",
  description: "Explore our research publications, medical studies, social impact reports, and workforce safety research.",
}

const researchAreas = [
  {
    icon: Brain,
    title: "AI in Healthcare",
    papers: 47,
    description: "Research on ethical AI applications in medical diagnostics and mental health monitoring.",
  },
  {
    icon: Plane,
    title: "Autonomous Systems",
    papers: 32,
    description: "Studies on drone navigation, disaster response optimization, and search algorithms.",
  },
  {
    icon: Hand,
    title: "Wearable Technology",
    papers: 28,
    description: "Research on haptic feedback systems, fatigue detection, and workplace safety.",
  },
  {
    icon: Milk,
    title: "Nutritional Science",
    papers: 21,
    description: "Clinical studies on personalized nutrition and therapeutic dairy formulations.",
  },
]

const publications = [
  {
    title: "Ethical AI Framework for Medical Decision Support Systems",
    authors: "Kumar, S., Patel, A., Singh, R.",
    journal: "Journal of Medical AI Ethics",
    year: "2024",
    type: "Peer Reviewed",
    division: "Mother AI",
  },
  {
    title: "Autonomous Drone Navigation in GPS-Denied Disaster Zones",
    authors: "Sharma, V., Gupta, M., Reddy, K.",
    journal: "Robotics & Autonomous Systems",
    year: "2024",
    type: "Peer Reviewed",
    division: "Drones",
  },
  {
    title: "Haptic Feedback for Real-time Fatigue Detection in Industrial Workers",
    authors: "Mehta, P., Joshi, N., Agarwal, S.",
    journal: "Ergonomics International",
    year: "2023",
    type: "Peer Reviewed",
    division: "Haptic",
  },
  {
    title: "Personalized Dairy Nutrition for Therapeutic Health Outcomes",
    authors: "Verma, R., Iyer, A., Das, B.",
    journal: "Clinical Nutrition Research",
    year: "2023",
    type: "Peer Reviewed",
    division: "Lacto",
  },
]

const impactMetrics = [
  { metric: "Lives Saved", value: "12,847", description: "Through disaster response and medical AI" },
  { metric: "Injuries Prevented", value: "45,000+", description: "Via haptic safety systems" },
  { metric: "Nutrition Profiles", value: "250,000", description: "Personalized formulations created" },
  { metric: "Research Papers", value: "128", description: "Peer-reviewed publications" },
]

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="pointer-events-none absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
              <Microscope className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Research & Impact</span>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Advancing Science for Humanity
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Our research spans AI ethics, autonomous systems, wearable technology, and nutritional science, 
              all focused on creating measurable positive impact in people&apos;s lives.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="border-t border-border bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((item) => (
              <div key={item.metric} className="text-center">
                <p className="text-3xl font-bold text-primary">{item.value}</p>
                <p className="mt-1 font-medium text-foreground">{item.metric}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Focus Areas</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Research Divisions
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area) => (
              <Card key={area.title} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{area.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{area.description}</p>
                  <p className="mt-4 text-2xl font-bold text-primary">{area.papers}</p>
                  <p className="text-xs text-muted-foreground">Published Papers</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Publications</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Recent Research Papers
              </h2>
            </div>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download All Papers
            </Button>
          </div>

          <div className="space-y-4">
            {publications.map((paper) => (
              <Card key={paper.title} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline">{paper.division}</Badge>
                        <Badge variant="outline" className="border-chart-2/30 bg-chart-2/10 text-chart-2">{paper.type}</Badge>
                        <span className="text-sm text-muted-foreground">{paper.year}</span>
                      </div>
                      <h3 className="mt-2 font-semibold text-foreground">{paper.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{paper.authors}</p>
                      <p className="mt-1 text-xs text-muted-foreground italic">{paper.journal}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
