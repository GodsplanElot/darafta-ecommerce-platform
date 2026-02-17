"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/30">
      {/* Badge */}
      {product.badge && (
        <div className="absolute left-3 top-3 z-10">
          <span className="inline-flex rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
            {product.badge}
          </span>
        </div>
      )}

      {/* Image */}
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-[4/3] overflow-hidden bg-secondary"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={priority}
        />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-3 lg:p-4">
        {/* Category */}
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>

        {/* Name */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-1 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary lg:text-base">
            {product.name}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground lg:text-sm">
          {product.shortDescription}
        </p>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3 w-3",
                  i < Math.floor(product.rating)
                    ? "fill-primary text-primary"
                    : "fill-muted text-muted"
                )}
              />
            ))}
          </div>
          <span className="font-mono text-[11px] text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price + Add to Cart */}
        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="font-mono text-xs text-muted-foreground line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="font-mono text-base font-bold text-foreground lg:text-lg">
              ${product.price.toLocaleString()}
            </span>
          </div>
          <Button
            size="sm"
            className="h-8 gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={(e) => {
              e.preventDefault()
              addItem(product)
            }}
            disabled={!product.inStock}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Add</span>
          </Button>
        </div>
      </div>
    </article>
  )
}
