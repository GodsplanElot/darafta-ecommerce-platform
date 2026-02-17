import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-6 lg:py-36">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
            <span className="font-mono text-xs font-medium text-primary">
              Free shipping on orders over $500
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Power your world
            <br />
            <span className="text-primary">with solar.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Premium solar panels, inverters, batteries, and complete power
            systems. Engineered for maximum efficiency. Built to last decades.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/products">
                Browse Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 border-border text-foreground hover:bg-accent"
            >
              <Link href="/products?category=complete-kits">
                View Complete Kits
              </Link>
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="mt-10 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="font-mono text-2xl font-bold text-foreground">25yr</span>
              <span className="text-xs text-muted-foreground">Panel Warranty</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col">
              <span className="font-mono text-2xl font-bold text-foreground">22.6%</span>
              <span className="text-xs text-muted-foreground">Peak Efficiency</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col">
              <span className="font-mono text-2xl font-bold text-foreground">6000+</span>
              <span className="text-xs text-muted-foreground">Battery Cycles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
