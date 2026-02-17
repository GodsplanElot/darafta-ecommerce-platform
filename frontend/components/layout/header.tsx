"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  Sun,
  ChevronDown,
} from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { categories } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { name: "Products", href: "/products" },
  { name: "Complete Kits", href: "/products?category=complete-kits" },
]

export function SiteHeader() {
  const { itemCount } = useCart()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:h-16 lg:px-6">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Sun className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Darafta</span>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
              Categories
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 w-64 rounded-lg border border-border bg-popover p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products?category=${cat.slug}`}
                  className="flex flex-col rounded-md px-3 py-2.5 transition-colors hover:bg-accent"
                >
                  <span className="text-sm font-medium text-foreground">
                    {cat.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {cat.productCount} products
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Right: Search, Cart, Mobile Menu */}
        <div className="flex items-center gap-1">
          {/* Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 text-muted-foreground"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search products"
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* Cart */}
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="relative h-9 w-9 text-muted-foreground"
              aria-label={`Cart with ${itemCount} items`}
            >
              <ShoppingCart className="h-4 w-4" />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-muted-foreground md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background p-0">
              <SheetHeader className="border-b border-border px-4 py-4">
                <SheetTitle className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                    <Sun className="h-4 w-4 text-primary-foreground" />
                  </div>
                  Darafta
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-4">
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  All Products
                </Link>
                <Link
                  href="/products?category=complete-kits"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Complete Kits
                </Link>
                <div className="my-2 border-t border-border" />
                <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Categories
                </p>
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products?category=${cat.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {cat.name}
                    <span className="font-mono text-xs">
                      {cat.productCount}
                    </span>
                  </Link>
                ))}
                <div className="my-2 border-t border-border" />
                <Link
                  href="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Cart
                  </span>
                  {itemCount > 0 && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-bold text-primary-foreground">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Search Bar (expandable) */}
      {searchOpen && (
        <div className="border-t border-border/50 bg-background px-4 py-3">
          <div className="mx-auto max-w-7xl">
            <form
              action="/products"
              method="GET"
              className="flex items-center gap-2"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  name="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search panels, inverters, batteries..."
                  className="h-10 w-full rounded-md border border-input bg-secondary pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  autoFocus
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-10 w-10 shrink-0 text-muted-foreground"
                onClick={() => {
                  setSearchOpen(false)
                  setSearchQuery("")
                }}
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}
