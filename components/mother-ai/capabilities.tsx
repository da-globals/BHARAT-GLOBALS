import { Brain, Stethoscope, Heart, Activity, FileText, Shield } from "lucide-react"

const capabilities = [
  {
    icon: Stethoscope,
    title: "Medical Decision Support",
    description: "AI-assisted diagnostics that analyze symptoms, medical history, and test results to provide evidence-based treatment recommendations.",
    features: ["Symptom Analysis", "Drug Interaction Checks", "Treatment Protocols"],
  },
  {
    icon: Heart,
    title: "Mental Health Monitoring",
    description: "Continuous behavioral and emotional pattern analysis for early detection of mental health concerns and intervention triggers.",
    features: ["Mood Tracking", "Stress Detection", "Crisis Alerts"],
  },
  {
    icon: Activity,
    title: "Physical Health Insights",
    description: "Real-time analysis of vital signs and physical metrics to provide personalized health recommendations and risk assessments.",
    features: ["Vital Monitoring", "Fitness Analytics", "Sleep Quality"],
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Machine learning models that predict health trends, disease progression, and optimal intervention timing.",
    features: ["Risk Prediction", "Trend Analysis", "Outcome Forecasting"],
  },
  {
    icon: FileText,
    title: "Clinical Documentation",
    description: "Automated generation of clinical notes, reports, and summaries with full audit trails and version control.",
    features: ["Auto-summaries", "Report Generation", "Audit Logs"],
  },
  {
    icon: Shield,
    title: "Explainable AI",
    description: "Every decision comes with clear reasoning, confidence scores, and reference citations for complete transparency.",
    features: ["Decision Logs", "Confidence Scores", "Source Citations"],
  },
]

export function MotherAICapabilities() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Capabilities</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Intelligent Health Solutions
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Comprehensive AI capabilities designed to support healthcare professionals and improve patient outcomes.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <div 
              key={capability.title} 
              className="group relative rounded-xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-border hover:bg-card"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 transition-colors group-hover:bg-primary/20">
                <capability.icon className="h-6 w-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="mt-4 text-lg font-semibold text-foreground">{capability.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{capability.description}</p>
              
              {/* Features */}
              <div className="mt-4 flex flex-wrap gap-2">
                {capability.features.map((feature) => (
                  <span 
                    key={feature} 
                    className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              {/* Index Number */}
              <span className="absolute right-6 top-6 font-mono text-xs text-muted-foreground/50">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
