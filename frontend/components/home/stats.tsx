import { Zap, Shield, Truck, Headphones } from "lucide-react"

const stats = [
  {
    icon: Zap,
    value: "99.5%",
    label: "MPPT Efficiency",
    description: "Maximum power point tracking",
  },
  {
    icon: Shield,
    value: "25 Yr",
    label: "Warranty Coverage",
    description: "Industry-leading protection",
  },
  {
    icon: Truck,
    value: "Free",
    label: "Shipping $500+",
    description: "Nationwide delivery",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Expert Support",
    description: "Technical assistance anytime",
  },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-2 px-4 py-6 text-center lg:py-8 ${
                i < stats.length - 1 ? "border-r border-border" : ""
              } ${i === 1 ? "border-r-0 sm:border-r" : ""} ${
                i < 2 ? "border-b border-border lg:border-b-0" : ""
              }`}
            >
              <stat.icon className="h-5 w-5 text-primary" />
              <span className="font-mono text-xl font-bold text-foreground lg:text-2xl">
                {stat.value}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  {stat.label}
                </span>
                <span className="hidden text-xs text-muted-foreground sm:block">
                  {stat.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
