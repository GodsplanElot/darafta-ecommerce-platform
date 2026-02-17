import type { Metadata } from "next"
import { ProductListingClient } from "@/components/products/product-listing"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our full range of solar panels, inverters, batteries, charge controllers, mounting kits, and complete solar power systems.",
}

export default function ProductsPage() {
  return <ProductListingClient />
}
