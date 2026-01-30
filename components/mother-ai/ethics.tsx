import { Button } from "@/components/ui/button"
import { Shield, Eye, Lock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const principles = [
  {
    icon: Shield,
    title: "Human Dignity First",
    description: "Every algorithm and decision prioritizes human dignity, safety, and well-being above all other metrics.",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description: "All AI decisions include full explanations, reasoning chains, and confidence levels for complete auditability.",
  },
  {
    icon: Lock,
    title: "Data Sovereignty",
    description: "Patient data remains encrypted, local-first, and under complete user control with no mandatory cloud dependency.",
  },
  {
    icon: Users,
    title: "Inclusive Design",
    description: "Built for accessibility across all demographics, abilities, and technological literacy levels.",
  },
]

export function MotherAIEthics() {
  return (
    <section className="border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Ethics Framework</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI Built on Trust
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Mother AI operates under a strict ethical framework that ensures every decision 
              respects human dignity, maintains transparency, and prioritizes user safety.
            </p>
            
            <div className="mt-8 space-y-6">
              {principles.map((principle) => (
                <div key={principle.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                    <principle.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{principle.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-8" asChild>
              <Link href="/security">
                Read Full Ethics Policy
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
                <div className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-primary/30" />
                <div className="absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-primary/30" />
                <div className="absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-primary/30" />
                <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-primary/30" />
                
                <div className="space-y-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Ethical AI Certification</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      All Mother AI systems undergo rigorous ethical review and continuous monitoring.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border border-border bg-secondary/50 p-4">
                      <p className="text-2xl font-bold text-foreground">100%</p>
                      <p className="mt-1 text-xs text-muted-foreground">Auditable Decisions</p>
                    </div>
                    <div className="rounded-lg border border-border bg-secondary/50 p-4">
                      <p className="text-2xl font-bold text-foreground">Zero</p>
                      <p className="mt-1 text-xs text-muted-foreground">Bias Tolerance</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">HIPAA Compliant</span>
                    <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">ISO 27001</span>
                    <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">GDPR Ready</span>
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
