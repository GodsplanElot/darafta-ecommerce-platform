import { HeroSection } from "@/components/home/hero"
import { CategoriesSection } from "@/components/home/categories"
import { FeaturedProducts } from "@/components/home/featured-products"
import { ValueProps } from "@/components/home/value-props"
import { StatsSection } from "@/components/home/stats"
import { CtaSection } from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <FeaturedProducts />
      <ValueProps />
      <CtaSection />
    </>
  )
}
