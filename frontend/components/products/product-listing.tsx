"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products, categories } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "name"

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "name", label: "Name A-Z" },
]

function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  inStockOnly,
  onInStockChange,
  activeFilterCount,
  onClearFilters,
}: {
  selectedCategory: string | null
  onCategoryChange: (slug: string | null) => void
  priceRange: [number, number]
  onPriceRangeChange: (range: [number, number]) => void
  inStockOnly: boolean
  onInStockChange: (value: boolean) => void
  activeFilterCount: number
  onClearFilters: () => void
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* Clear All */}
      {activeFilterCount > 0 && (
        <button
          onClick={onClearFilters}
          className="flex items-center gap-1 self-start text-xs font-medium text-primary hover:underline"
        >
          Clear all filters ({activeFilterCount})
        </button>
      )}

      {/* Categories */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Category
        </h3>
        <div className="mt-3 flex flex-col gap-1">
          <button
            onClick={() => onCategoryChange(null)}
            className={cn(
              "rounded-md px-3 py-2 text-left text-sm transition-colors",
              selectedCategory === null
                ? "bg-primary/10 font-medium text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onCategoryChange(cat.slug)}
              className={cn(
                "flex items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors",
                selectedCategory === cat.slug
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {cat.name}
              <span className="font-mono text-[11px]">
                {cat.productCount}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Price Range
        </h3>
        <div className="mt-3 flex flex-col gap-1">
          {[
            { label: "All Prices", range: [0, 99999] as [number, number] },
            { label: "Under $200", range: [0, 200] as [number, number] },
            { label: "$200 - $500", range: [200, 500] as [number, number] },
            { label: "$500 - $2,000", range: [500, 2000] as [number, number] },
            { label: "$2,000 - $5,000", range: [2000, 5000] as [number, number] },
            { label: "Over $5,000", range: [5000, 99999] as [number, number] },
          ].map((option) => (
            <button
              key={option.label}
              onClick={() => onPriceRangeChange(option.range)}
              className={cn(
                "rounded-md px-3 py-2 text-left text-sm transition-colors",
                priceRange[0] === option.range[0] &&
                  priceRange[1] === option.range[1]
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* In Stock */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Availability
        </h3>
        <div className="mt-3">
          <button
            onClick={() => onInStockChange(!inStockOnly)}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
              inStockOnly
                ? "bg-primary/10 font-medium text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
          >
            <div
              className={cn(
                "flex h-4 w-4 items-center justify-center rounded border transition-colors",
                inStockOnly
                  ? "border-primary bg-primary"
                  : "border-muted-foreground"
              )}
            >
              {inStockOnly && (
                <svg className="h-3 w-3 text-primary-foreground" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            In Stock Only
          </button>
        </div>
      </div>
    </div>
  )
}

export function ProductListingClient() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category")
  const initialSearch = searchParams.get("search") || ""

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory
  )
  const [sortBy, setSortBy] = useState<SortOption>("featured")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 99999])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [searchQuery] = useState(initialSearch)
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeFilterCount =
    (selectedCategory ? 1 : 0) +
    (priceRange[0] !== 0 || priceRange[1] !== 99999 ? 1 : 0) +
    (inStockOnly ? 1 : 0)

  const clearFilters = () => {
    setSelectedCategory(null)
    setPriceRange([0, 99999])
    setInStockOnly(false)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Search
    if (searchQuery) {
      const lower = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(lower) ||
          p.shortDescription.toLowerCase().includes(lower) ||
          p.category.toLowerCase().includes(lower)
      )
    }

    // Category
    if (selectedCategory) {
      result = result.filter((p) => p.categorySlug === selectedCategory)
    }

    // Price
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    // In Stock
    if (inStockOnly) {
      result = result.filter((p) => p.inStock)
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Featured: items with badges first
        result.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0))
    }

    return result
  }, [selectedCategory, sortBy, priceRange, inStockOnly, searchQuery])

  const activeCategoryName =
    categories.find((c) => c.slug === selectedCategory)?.name || "All Products"

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6 lg:py-10">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {activeCategoryName}
          </h1>
          <span className="font-mono text-sm text-muted-foreground">
            ({filteredProducts.length})
          </span>
        </div>
        {searchQuery && (
          <p className="text-sm text-muted-foreground">
            Search results for &ldquo;{searchQuery}&rdquo;
          </p>
        )}
      </div>

      {/* Toolbar: Sort + Mobile Filter Toggle */}
      <div className="mt-6 flex items-center justify-between gap-3">
        {/* Active filters (mobile) */}
        <div className="flex items-center gap-2">
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-border text-foreground lg:hidden"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 overflow-y-auto bg-background p-0">
              <SheetHeader className="border-b border-border px-4 py-4">
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="p-4">
                <FilterSidebar
                  selectedCategory={selectedCategory}
                  onCategoryChange={(slug) => {
                    setSelectedCategory(slug)
                    setMobileFiltersOpen(false)
                  }}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                  inStockOnly={inStockOnly}
                  onInStockChange={setInStockOnly}
                  activeFilterCount={activeFilterCount}
                  onClearFilters={clearFilters}
                />
              </div>
            </SheetContent>
          </Sheet>

          {/* Active filter chips */}
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {activeCategoryName}
              <X className="h-3 w-3" />
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
            className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
          >
            <span className="hidden text-muted-foreground sm:inline">
              Sort:
            </span>
            {sortOptions.find((o) => o.value === sortBy)?.label}
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
          {sortDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setSortDropdownOpen(false)}
              />
              <div className="absolute right-0 top-full z-50 mt-1 w-48 rounded-lg border border-border bg-popover p-1 shadow-xl">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value)
                      setSortDropdownOpen(false)
                    }}
                    className={cn(
                      "w-full rounded-md px-3 py-2 text-left text-sm transition-colors",
                      sortBy === option.value
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-6 flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <FilterSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            inStockOnly={inStockOnly}
            onInStockChange={setInStockOnly}
            activeFilterCount={activeFilterCount}
            onClearFilters={clearFilters}
          />
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
              <p className="text-sm font-medium text-foreground">
                No products found
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Try adjusting your filters or search query
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 border-border text-foreground"
                onClick={clearFilters}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
