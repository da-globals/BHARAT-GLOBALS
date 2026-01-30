import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye, Server, Wifi, FileKey, Users, Scale, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security & Ethics | Mother Ecosystem",
  description: "Learn about our data privacy policies, offline safety features, and AI responsibility framework.",
}

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted using AES-256 at rest and TLS 1.3 in transit. No unencrypted data ever leaves your device.",
  },
  {
    icon: Wifi,
    title: "Offline-First Architecture",
    description: "Systems function fully without internet connectivity. Data stays local with optional encrypted sync when online.",
  },
  {
    icon: Server,
    title: "Local Data Sovereignty",
    description: "Your data remains on your devices and servers. No mandatory cloud dependency or external data storage.",
  },
  {
    icon: FileKey,
    title: "Zero-Knowledge Design",
    description: "We cannot access your encrypted data even if requested. You hold the only decryption keys.",
  },
]

const ethicsPrinciples = [
  {
    icon: Eye,
    title: "Transparency",
    description: "Every AI decision includes full explanations, reasoning chains, and confidence levels for complete auditability.",
    commitments: ["Decision logs for all actions", "Source citations provided", "Confidence scores displayed"],
  },
  {
    icon: Users,
    title: "Human Dignity",
    description: "Technology that respects human autonomy, privacy, and dignity. Humans remain in control at all times.",
    commitments: ["Human-in-the-loop decisions", "Opt-out mechanisms", "No manipulation techniques"],
  },
  {
    icon: Scale,
    title: "Fairness",
    description: "Rigorous bias testing and inclusive design principles ensure equitable outcomes across all demographics.",
    commitments: ["Regular bias audits", "Diverse testing groups", "Equitable access policies"],
  },
  {
    icon: Shield,
    title: "Safety",
    description: "Multiple safety layers prevent harm. Systems fail safely and alert operators to any anomalies.",
    commitments: ["Fail-safe mechanisms", "Anomaly detection", "Emergency overrides"],
  },
]

const certifications = [
  { name: "ISO 27001", description: "Information Security Management" },
  { name: "SOC 2 Type II", description: "Security & Availability Controls" },
  { name: "HIPAA", description: "Healthcare Data Protection" },
  { name: "GDPR", description: "European Data Privacy" },
  { name: "IEEE 7000", description: "Ethical AI Standard" },
  { name: "ISO 22000", description: "Food Safety Management" },
]

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="pointer-events-none absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Security & Ethics</span>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Built on Trust
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Security, privacy, and ethical AI are not features we add later. 
              They are foundational principles that guide every decision we make.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Data Protection</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Security Architecture
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {securityFeatures.map((feature) => (
              <Card key={feature.title} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Framework */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">AI Responsibility</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ethics Framework
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Our ethical AI framework ensures technology serves humanity with transparency, fairness, and accountability.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {ethicsPrinciples.map((principle) => (
              <Card key={principle.title} className="border-border/50 bg-card">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                    <principle.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{principle.title}</CardTitle>
                  <CardDescription>{principle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {principle.commitments.map((commitment) => (
                      <div key={commitment} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-chart-2" />
                        <span className="text-sm text-muted-foreground">{commitment}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Compliance</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Certifications & Standards
            </h2>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center gap-4 rounded-lg border border-border/50 bg-card p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-chart-2/30 bg-chart-2/10">
                  <CheckCircle2 className="h-5 w-5 text-chart-2" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/contact">
                Request Compliance Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
