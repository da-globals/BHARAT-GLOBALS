import Link from "next/link"
import { Cpu, Shield, Lock, Wifi } from "lucide-react"

const footerLinks = {
  ecosystem: [
    { name: "Mother AI", href: "/mother-ai" },
    { name: "Mother Drones", href: "/drones" },
    { name: "Haptic Systems", href: "/haptic" },
    { name: "Lacto Made Easy", href: "/lacto" },
  ],
  company: [
    { name: "About Bharat Globals", href: "/about" },
    { name: "Research & Impact", href: "/research" },
    { name: "Security & Ethics", href: "/security" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "System Status", href: "#" },
    { name: "Offline Guide", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
                <Cpu className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-foreground">Mother Ecosystem</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Bharat Globals</span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A holistic technological ecosystem centered around ethical AI, designed to support social, physical, and mental well-being.
            </p>
            
            {/* Status Indicators */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5">
                <Wifi className="h-3 w-3 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">Offline Capable</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5">
                <Lock className="h-3 w-3 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">Encrypted</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5">
                <Shield className="h-3 w-3 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">Ethical AI</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Ecosystem</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.ecosystem.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 lg:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Bharat Globals. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Data Ethics
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
