"use client"

import React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Shield, Send, CheckCircle2 } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@bharatglobals.com",
    description: "For general inquiries",
  },
  {
    icon: Phone,
    title: "Secure Line",
    value: "+91 (800) 555-0199",
    description: "For urgent matters",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Bengaluru, India",
    description: "Research & Development Center",
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="pointer-events-none absolute right-1/3 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Secure Contact</span>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              For partnership inquiries, access requests, or general questions about the Mother Ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <Card className="border-border/50 bg-card">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and we will get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-chart-2/30 bg-chart-2/10">
                      <CheckCircle2 className="h-8 w-8 text-chart-2" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">Message Sent</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Thank you for reaching out. Our team will respond within 24 hours.
                    </p>
                    <Button className="mt-6" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" placeholder="Your organization name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="interest">Area of Interest</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mother-ai">Mother AI</SelectItem>
                          <SelectItem value="drones">Mother Drones</SelectItem>
                          <SelectItem value="haptic">Haptic Systems</SelectItem>
                          <SelectItem value="lacto">Lacto Made Easy</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="research">Research Collaboration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your inquiry..." 
                        className="min-h-[120px]"
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">
                  Reach out through any of the channels below for assistance.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <div key={method.title} className="flex items-start gap-4 rounded-lg border border-border/50 bg-card p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                      <method.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{method.title}</p>
                      <p className="text-sm text-primary">{method.value}</p>
                      <p className="text-xs text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Security Notice */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-chart-2/30 bg-chart-2/10">
                    <Shield className="h-5 w-5 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Secure Communications</h3>
                    <p className="text-sm text-muted-foreground">All messages are encrypted end-to-end</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  For sensitive inquiries, we offer PGP-encrypted email and secure video conferencing. 
                  Request access credentials after initial contact.
                </p>
              </div>

              {/* Office Hours */}
              <div className="rounded-xl border border-border/50 bg-secondary/30 p-6">
                <h3 className="font-semibold text-foreground">Response Times</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">General Inquiries</span>
                    <span className="text-foreground">24-48 hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Partnership Requests</span>
                    <span className="text-foreground">3-5 business days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Technical Support</span>
                    <span className="text-foreground">4-8 hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Emergency Line</span>
                    <span className="text-foreground">Immediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
