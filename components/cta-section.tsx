import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Lock } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 lg:p-16">
          {/* Background Effects */}
          <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 bg-primary/10 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 bg-accent/10 blur-[80px]" />
          
          {/* Corner Decorations */}
          <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-primary/30" />
          <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-primary/30" />
          <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-primary/30" />
          <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-primary/30" />
          
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Secure Access Portal</span>
            </div>
            
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Join the Mother Ecosystem?
            </h2>
            
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Access our secure portal to explore dashboards, documentation, and integration tools. Available for authorized operators and partners.
            </p>
            
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/security">
                  <Lock className="mr-2 h-4 w-4" />
                  Security & Ethics
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                End-to-end encryption
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Local-first architecture
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                No cloud dependency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
