import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { CartProvider } from "@/lib/cart-context"
import { SiteHeader } from "@/components/layout/header"
import { SiteFooter } from "@/components/layout/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: {
    default: "Darafta - Solar Energy Products",
    template: "%s | Darafta",
  },
  description:
    "Premium solar panels, inverters, batteries, and complete solar kits. Built for performance. Engineered for scale.",
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <CartProvider>
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  )
}
