import Link from "next/link"
import { Sun } from "lucide-react"

const footerLinks = {
  Products: [
    { name: "Solar Panels", href: "/products?category=solar-panels" },
    { name: "Inverters", href: "/products?category=inverters" },
    { name: "Batteries", href: "/products?category=batteries" },
    { name: "Charge Controllers", href: "/products?category=charge-controllers" },
    { name: "Mounting Kits", href: "/products?category=mounting-kits" },
    { name: "Complete Kits", href: "/products?category=complete-kits" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
  ],
  Support: [
    { name: "Help Center", href: "#" },
    { name: "Installation Guide", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Returns", href: "#" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <Sun className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Darafta
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium solar energy products engineered for performance and built
              to scale. Powering homes, businesses, and off-grid systems
              worldwide.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {"2026 Darafta. All rights reserved."}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
