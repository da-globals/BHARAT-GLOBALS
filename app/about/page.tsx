import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Target, Heart, Globe, Users, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Bharat Globals | Mother Ecosystem",
  description: "Learn about Bharat Globals mission, ethics, and long-term societal goals driving the Mother Ecosystem.",
}

const values = [
  {
    icon: Heart,
    title: "Human Dignity",
    description: "Every technology we develop prioritizes human dignity, safety, and well-being above all metrics.",
  },
  {
    icon: Target,
    title: "Ethical Innovation",
    description: "We pursue technological advancement only when it serves the greater good of society.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our solutions are designed to scale from local communities to global ecosystems.",
  },
  {
    icon: Users,
    title: "Inclusive Design",
    description: "Technology that serves everyone, regardless of ability, location, or economic status.",
  },
]

const milestones = [
  { year: "2018", event: "Bharat Globals founded with a vision for ethical technology" },
  { year: "2020", event: "Mother AI core development begins" },
  { year: "2021", event: "First Mother Drone prototype for disaster response" },
  { year: "2022", event: "Haptic Systems division established" },
  { year: "2023", event: "Lacto Made Easy nutritional research launched" },
  { year: "2024", event: "Mother Ecosystem integrated platform released" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Bharat Globals
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Building a holistic technological ecosystem centered around ethical AI, 
              designed to support social, physical, and mental well-being for humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Mission</p>
              <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Technology for Humanity
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Bharat Globals was founded on the belief that technology should serve humanity, 
                not the other way around. Our mission is to develop intelligent systems that 
                enhance human capabilities while respecting human dignity and privacy.
              </p>
              <p className="mt-4 text-muted-foreground">
                We envision a future where AI assists healthcare professionals in saving lives, 
                drones respond to disasters faster than ever before, wearable technology keeps 
                workers safe, and personalized nutrition improves health outcomes for all.
              </p>
              <Button className="mt-8" asChild>
                <Link href="/research">
                  View Our Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <Card key={value.title} className="border-border/50 bg-card">
                  <CardContent className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Journey</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Key Milestones
            </h2>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="rounded-xl border border-border/50 bg-card p-6">
                      <span className="font-mono text-sm text-primary">{milestone.year}</span>
                      <p className="mt-2 text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative hidden lg:flex h-4 w-4 items-center justify-center">
                    <div className="h-4 w-4 rounded-full border-2 border-primary bg-background" />
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground">4</p>
              <p className="mt-2 text-sm text-muted-foreground">Technology Divisions</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground">500+</p>
              <p className="mt-2 text-sm text-muted-foreground">Research Partners</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground">50+</p>
              <p className="mt-2 text-sm text-muted-foreground">Countries Reached</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground">1M+</p>
              <p className="mt-2 text-sm text-muted-foreground">Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
