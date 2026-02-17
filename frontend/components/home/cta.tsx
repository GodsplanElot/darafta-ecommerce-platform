import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="flex flex-col items-center rounded-xl border border-primary/20 bg-primary/5 px-6 py-12 text-center sm:px-12 lg:py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            Ready to go solar?
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Start with a free system design
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Not sure what you need? Our complete kits come with a free
            consultation to design the perfect system for your energy goals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/products?category=complete-kits">
                Explore Complete Kits
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 border-border text-foreground hover:bg-accent"
            >
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
