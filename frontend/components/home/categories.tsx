import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { categories } from "@/lib/data"

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          Product Categories
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Everything you need for solar
        </h2>
        <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground">
          From individual components to complete systems, find the right
          products for your installation.
        </p>
      </div>

      {/* Category Grid */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {categories.map((category, i) => (
          <Link
            key={category.slug}
            href={`/products?category=${category.slug}`}
            className={`group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/30 ${
              i === 0 ? "col-span-2 lg:col-span-1" : ""
            }`}
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-1 items-start justify-between p-3 lg:p-4">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-semibold text-foreground lg:text-base">
                  {category.name}
                </h3>
                <p className="hidden text-xs text-muted-foreground sm:block">
                  {category.description}
                </p>
                <p className="font-mono text-[11px] text-muted-foreground">
                  {category.productCount} products
                </p>
              </div>
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
