"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Activity, Users, AlertTriangle, Heart, ThermometerSun, Zap, RefreshCw } from "lucide-react"

const workerStats = [
  { label: "Active Workers", value: "1,847", change: "+8%", icon: Users, status: "up" },
  { label: "Avg Fatigue Level", value: "32%", change: "-5%", icon: Activity, status: "down" },
  { label: "Safety Alerts Today", value: "23", change: "-12%", icon: AlertTriangle, status: "down" },
  { label: "System Uptime", value: "99.9%", change: "0%", icon: Zap, status: "stable" },
]

const activeWorkers = [
  { id: "W-001", name: "Operator Alpha", role: "Warehouse", fatigue: 28, heartRate: 72, temp: 36.8, status: "normal" },
  { id: "W-002", name: "Operator Beta", role: "Construction", fatigue: 65, heartRate: 95, temp: 37.2, status: "warning" },
  { id: "W-003", name: "Operator Gamma", role: "Delivery", fatigue: 42, heartRate: 78, temp: 36.6, status: "normal" },
  { id: "W-004", name: "Operator Delta", role: "Manufacturing", fatigue: 18, heartRate: 68, temp: 36.7, status: "normal" },
]

export function HapticDashboard() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 1500)
  }

  const getFatigueColor = (level: number) => {
    if (level < 30) return "bg-chart-2"
    if (level < 60) return "bg-chart-4"
    return "bg-destructive"
  }

  return (
    <section id="dashboard" className="border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-chart-4">Offline Analytics</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Safety Dashboard
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-chart-4/30 bg-chart-4/5 text-chart-4">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-chart-4" />
              1,847 Active
            </Badge>
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workerStats.map((stat) => (
            <Card key={stat.label} className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-chart-4/30 bg-chart-4/10">
                    <stat.icon className="h-5 w-5 text-chart-4" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${stat.status === 'down' ? 'text-chart-2' : stat.status === 'up' ? 'text-chart-4' : 'text-muted-foreground'}`}>
                    {stat.change}
                  </div>
                </div>
                <p className="mt-4 text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Worker Monitoring */}
        <Card className="mt-8 border-border/50 bg-card">
          <CardHeader>
            <CardTitle className="text-lg">Active Worker Monitoring</CardTitle>
            <CardDescription>Real-time vitals and fatigue levels from connected suits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeWorkers.map((worker) => (
                <div key={worker.id} className="flex flex-col gap-4 rounded-lg border border-border/50 bg-secondary/30 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`h-3 w-3 rounded-full ${worker.status === 'normal' ? 'bg-chart-2' : 'bg-chart-4 animate-pulse'}`} />
                    <div>
                      <p className="font-medium text-foreground">{worker.name}</p>
                      <p className="text-xs text-muted-foreground">{worker.id} - {worker.role}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6 sm:flex sm:items-center sm:gap-8">
                    {/* Fatigue */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Activity className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Fatigue</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={worker.fatigue} className={`h-2 w-16 ${getFatigueColor(worker.fatigue)}`} />
                        <span className="text-sm font-medium text-foreground">{worker.fatigue}%</span>
                      </div>
                    </div>
                    
                    {/* Heart Rate */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Heart className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Heart</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">{worker.heartRate} bpm</p>
                    </div>
                    
                    {/* Temperature */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <ThermometerSun className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Temp</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">{worker.temp}°C</p>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className={worker.status === 'normal' ? 'border-chart-2/30 bg-chart-2/10 text-chart-2' : 'border-chart-4/30 bg-chart-4/10 text-chart-4'}>
                    {worker.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
