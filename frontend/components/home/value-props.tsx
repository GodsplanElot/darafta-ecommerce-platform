import { Battery, Cpu, Leaf, TrendingUp } from "lucide-react"

const valueProps = [
  {
    icon: Cpu,
    title: "Engineered Performance",
    description:
      "Every product is tested under real-world conditions. Our panels deliver 22.6% peak efficiency with half-cut PERC cell technology that outperforms in partial shade.",
    stat: "22.6%",
    statLabel: "Efficiency",
  },
  {
    icon: Battery,
    title: "Built to Last",
    description:
      "LiFePO4 battery chemistry rated for 6,000+ cycles at 90% depth of discharge. That translates to over 15 years of daily cycling with minimal degradation.",
    stat: "6,000+",
    statLabel: "Cycles",
  },
  {
    icon: TrendingUp,
    title: "Scale Ready",
    description:
      "Start with a single panel or a complete kit. Our modular architecture lets you expand capacity over time without replacing existing equipment.",
    stat: "163kWh",
    statLabel: "Max Storage",
  },
  {
    icon: Leaf,
    title: "Clean Energy Impact",
    description:
      "A typical 5kW Darafta system offsets over 7 tonnes of CO2 annually. That is the equivalent of planting 320 trees every single year.",
    stat: "7t CO2",
    statLabel: "Offset / Year",
  },
]

export function ValueProps() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          Why Darafta
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Technology that delivers
        </h2>
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {valueProps.map((prop) => (
          <div
            key={prop.title}
            className="flex flex-col rounded-lg border border-border bg-card p-5 lg:p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <prop.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col items-end">
                <span className="font-mono text-xl font-bold text-foreground">
                  {prop.stat}
                </span>
                <span className="font-mono text-[11px] uppercase text-muted-foreground">
                  {prop.statLabel}
                </span>
              </div>
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {prop.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
