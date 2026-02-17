"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeaturedProducts } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

export function FeaturedProducts() {
  const featured = getFeaturedProducts()

  return (
    <section className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              Featured
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Top-rated products
            </h2>
          </div>
          <Button
            asChild
            variant="ghost"
            className="hidden gap-1 text-sm text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            <Link href="/products">
              View all
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {featured.slice(0, 8).map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i < 4} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Button
            asChild
            variant="outline"
            className="gap-1 border-border text-foreground"
          >
            <Link href="/products">
              View all products
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
