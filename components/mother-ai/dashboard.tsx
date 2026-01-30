"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Activity, Brain, Heart, Users, TrendingUp, AlertCircle, CheckCircle2, Clock, RefreshCw } from "lucide-react"

const systemStats = [
  { label: "Active Diagnostics", value: "2,847", change: "+12%", icon: Brain, status: "up" },
  { label: "Health Monitors", value: "15,392", change: "+8%", icon: Heart, status: "up" },
  { label: "Connected Users", value: "4,521", change: "+24%", icon: Users, status: "up" },
  { label: "System Uptime", value: "99.97%", change: "0.02%", icon: Activity, status: "stable" },
]

const recentAlerts = [
  { id: 1, type: "info", message: "New diagnostic model deployed", time: "2 min ago", status: "completed" },
  { id: 2, type: "warning", message: "High load on medical inference cluster", time: "15 min ago", status: "monitoring" },
  { id: 3, type: "success", message: "Mental health dataset sync complete", time: "1 hour ago", status: "completed" },
  { id: 4, type: "info", message: "Scheduled maintenance completed", time: "3 hours ago", status: "completed" },
]

const analysisModules = [
  { name: "Medical Diagnostics", status: "active", accuracy: "97.8%", queries: "1.2M" },
  { name: "Mental Health Analysis", status: "active", accuracy: "94.2%", queries: "856K" },
  { name: "Physical Health Insights", status: "active", accuracy: "96.5%", queries: "2.1M" },
  { name: "Predictive Health Models", status: "training", accuracy: "92.1%", queries: "423K" },
]

export function MotherAIDashboard() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 1500)
  }

  return (
    <section id="dashboard" className="border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Offline Analytics</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              System Dashboard
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
              Live Data
            </Badge>
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {systemStats.map((stat) => (
            <Card key={stat.label} className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${stat.status === 'up' ? 'text-chart-2' : 'text-muted-foreground'}`}>
                    {stat.status === 'up' && <TrendingUp className="h-3 w-3" />}
                    {stat.change}
                  </div>
                </div>
                <p className="mt-4 text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Analysis Modules */}
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Analysis Modules</CardTitle>
              <CardDescription>AI processing engines and their current status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analysisModules.map((module) => (
                  <div key={module.name} className="flex items-center justify-between rounded-lg border border-border/50 bg-secondary/30 p-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full ${module.status === 'active' ? 'bg-chart-2' : 'bg-chart-4 animate-pulse'}`} />
                      <div>
                        <p className="font-medium text-foreground">{module.name}</p>
                        <p className="text-xs text-muted-foreground">{module.queries} queries processed</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-foreground">{module.accuracy}</p>
                      <p className="text-xs text-muted-foreground">Accuracy</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="text-lg">System Alerts</CardTitle>
              <CardDescription>Recent notifications and system events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-3 rounded-lg border border-border/50 bg-secondary/30 p-4">
                    <div className="mt-0.5">
                      {alert.type === 'success' && <CheckCircle2 className="h-4 w-4 text-chart-2" />}
                      {alert.type === 'warning' && <AlertCircle className="h-4 w-4 text-chart-4" />}
                      {alert.type === 'info' && <Activity className="h-4 w-4 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{alert.message}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{alert.time}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {alert.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
