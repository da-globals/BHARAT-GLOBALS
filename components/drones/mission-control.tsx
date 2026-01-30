"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plane, MapPin, Battery, Signal, Wind, Thermometer, RefreshCw, Play, Pause, Square } from "lucide-react"

const activeMissions = [
  { 
    id: "M-001", 
    name: "Coastal Survey Alpha", 
    type: "Surveillance",
    status: "active",
    drone: "MothEye-7",
    battery: 78,
    signal: 95,
    altitude: "150m",
    speed: "45 km/h"
  },
  { 
    id: "M-002", 
    name: "Flood Zone Recon", 
    type: "Search & Rescue",
    status: "active",
    drone: "AquaHawk-3",
    battery: 62,
    signal: 88,
    altitude: "80m",
    speed: "32 km/h"
  },
  { 
    id: "M-003", 
    name: "Medical Supply Drop", 
    type: "Delivery",
    status: "pending",
    drone: "CargoFly-12",
    battery: 100,
    signal: 0,
    altitude: "--",
    speed: "--"
  },
]

const environmentalData = [
  { label: "Wind Speed", value: "12 km/h", icon: Wind, status: "good" },
  { label: "Temperature", value: "24°C", icon: Thermometer, status: "good" },
  { label: "Visibility", value: "8.5 km", icon: MapPin, status: "good" },
  { label: "GPS Satellites", value: "14", icon: Signal, status: "excellent" },
]

export function DronesMissionControl() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 1500)
  }

  return (
    <section id="mission-control" className="border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Offline Operations</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Mission Control Center
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-accent/30 bg-accent/5 text-accent">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-accent" />
              3 Active Missions
            </Badge>
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              Sync
            </Button>
          </div>
        </div>

        {/* Environmental Conditions */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {environmentalData.map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-lg border border-border/50 bg-card p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="text-lg font-semibold text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {activeMissions.map((mission) => (
            <Card key={mission.id} className="border-border/50 bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className={mission.status === 'active' ? 'border-chart-2/30 bg-chart-2/10 text-chart-2' : 'border-chart-4/30 bg-chart-4/10 text-chart-4'}
                  >
                    {mission.status}
                  </Badge>
                  <span className="font-mono text-xs text-muted-foreground">{mission.id}</span>
                </div>
                <CardTitle className="mt-2 text-lg">{mission.name}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Plane className="h-3 w-3" />
                  {mission.drone} - {mission.type}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Telemetry Data */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border/50 bg-secondary/30 p-3">
                    <div className="flex items-center gap-2">
                      <Battery className={`h-4 w-4 ${mission.battery > 50 ? 'text-chart-2' : mission.battery > 20 ? 'text-chart-4' : 'text-destructive'}`} />
                      <span className="text-xs text-muted-foreground">Battery</span>
                    </div>
                    <p className="mt-1 text-lg font-semibold text-foreground">{mission.battery}%</p>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-secondary/30 p-3">
                    <div className="flex items-center gap-2">
                      <Signal className={`h-4 w-4 ${mission.signal > 70 ? 'text-chart-2' : mission.signal > 40 ? 'text-chart-4' : 'text-destructive'}`} />
                      <span className="text-xs text-muted-foreground">Signal</span>
                    </div>
                    <p className="mt-1 text-lg font-semibold text-foreground">{mission.signal}%</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Alt: {mission.altitude}</span>
                  <span className="text-muted-foreground">Speed: {mission.speed}</span>
                </div>

                {/* Mission Controls */}
                <div className="mt-4 flex gap-2">
                  {mission.status === 'active' ? (
                    <>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Pause className="mr-2 h-3 w-3" />
                        Pause
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Square className="mr-2 h-3 w-3" />
                        Abort
                      </Button>
                    </>
                  ) : (
                    <Button size="sm" className="flex-1">
                      <Play className="mr-2 h-3 w-3" />
                      Launch Mission
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
