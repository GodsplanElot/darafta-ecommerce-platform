export interface Product {
  id: string
  name: string
  slug: string
  category: string
  categorySlug: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  badge?: string
  rating: number
  reviewCount: number
  shortDescription: string
  description: string
  specs: Record<string, string>
  features: string[]
  inStock: boolean
  sku: string
}

export interface Category {
  name: string
  slug: string
  description: string
  image: string
  productCount: number
}

export const categories: Category[] = [
  {
    name: "Solar Panels",
    slug: "solar-panels",
    description: "High-efficiency monocrystalline and polycrystalline panels",
    image: "/images/products/solar-panel.jpg",
    productCount: 4,
  },
  {
    name: "Inverters",
    slug: "inverters",
    description: "Grid-tie, hybrid, and off-grid inverters",
    image: "/images/products/inverter.jpg",
    productCount: 3,
  },
  {
    name: "Batteries",
    slug: "batteries",
    description: "Lithium and LFP battery storage systems",
    image: "/images/products/battery.jpg",
    productCount: 3,
  },
  {
    name: "Charge Controllers",
    slug: "charge-controllers",
    description: "MPPT and PWM charge controllers",
    image: "/images/products/charge-controller.jpg",
    productCount: 2,
  },
  {
    name: "Mounting Kits",
    slug: "mounting-kits",
    description: "Roof, ground, and pole mounting systems",
    image: "/images/products/mounting-kit.jpg",
    productCount: 2,
  },
  {
    name: "Complete Kits",
    slug: "complete-kits",
    description: "All-in-one solar power systems",
    image: "/images/products/complete-kit.jpg",
    productCount: 2,
  },
]

export const products: Product[] = [
  // Solar Panels
  {
    id: "sp-001",
    name: "Darafta Mono 550W",
    slug: "darafta-mono-550w",
    category: "Solar Panels",
    categorySlug: "solar-panels",
    price: 289.99,
    originalPrice: 349.99,
    image: "/images/products/solar-panel.jpg",
    images: ["/images/products/solar-panel.jpg"],
    badge: "Best Seller",
    rating: 4.8,
    reviewCount: 342,
    shortDescription: "550W monocrystalline panel with 22.6% efficiency",
    description:
      "The Darafta Mono 550W is our flagship solar panel featuring premium Grade-A monocrystalline cells. Engineered for maximum energy harvest, this panel delivers industry-leading 22.6% conversion efficiency with exceptional low-light performance. The half-cut cell technology minimizes power loss and increases shade tolerance, making it ideal for both residential and commercial installations.",
    specs: {
      "Max Power": "550W",
      Efficiency: "22.6%",
      "Cell Type": "Mono PERC Half-Cut",
      "Open Circuit Voltage": "49.8V",
      "Short Circuit Current": "13.89A",
      "Max System Voltage": "1500V DC",
      Dimensions: "2278 x 1134 x 35mm",
      Weight: "28.6 kg",
      "Frame Material": "Anodized Aluminum",
      Warranty: "25 Years Linear",
      Certification: "IEC 61215 / IEC 61730",
      "Temperature Coefficient": "-0.34%/C",
    },
    features: [
      "Half-cut cell technology for superior shade tolerance",
      "Anti-reflective glass coating for maximum light absorption",
      "IP68 rated junction box for all-weather durability",
      "Compatible with all major mounting systems",
      "25-year linear performance warranty",
    ],
    inStock: true,
    sku: "DRF-SP-550M",
  },
  {
    id: "sp-002",
    name: "Darafta Mono 450W",
    slug: "darafta-mono-450w",
    category: "Solar Panels",
    categorySlug: "solar-panels",
    price: 219.99,
    image: "/images/products/solar-panel.jpg",
    images: ["/images/products/solar-panel.jpg"],
    rating: 4.7,
    reviewCount: 218,
    shortDescription: "450W monocrystalline panel ideal for residential installs",
    description:
      "The Darafta Mono 450W delivers excellent efficiency in a residential-friendly form factor. Featuring the same premium monocrystalline technology as our flagship line, this panel is optimized for rooftop installations where space and weight considerations matter.",
    specs: {
      "Max Power": "450W",
      Efficiency: "21.3%",
      "Cell Type": "Mono PERC",
      "Open Circuit Voltage": "41.2V",
      "Short Circuit Current": "13.75A",
      "Max System Voltage": "1500V DC",
      Dimensions: "2094 x 1038 x 35mm",
      Weight: "23.5 kg",
      "Frame Material": "Anodized Aluminum",
      Warranty: "25 Years Linear",
    },
    features: [
      "Optimized for residential rooftop installations",
      "Low-light performance enhancement",
      "PID resistant design",
      "Salt mist and ammonia resistant",
    ],
    inStock: true,
    sku: "DRF-SP-450M",
  },
  {
    id: "sp-003",
    name: "Darafta Bifacial 600W",
    slug: "darafta-bifacial-600w",
    category: "Solar Panels",
    categorySlug: "solar-panels",
    price: 399.99,
    image: "/images/products/solar-panel.jpg",
    images: ["/images/products/solar-panel.jpg"],
    badge: "New",
    rating: 4.9,
    reviewCount: 89,
    shortDescription: "600W bifacial panel with up to 30% rear-side gain",
    description:
      "Our most advanced panel yet. The Darafta Bifacial 600W captures energy from both sides, delivering up to 30% additional power from reflected light. Perfect for ground-mount and elevated installations where rear-side irradiance can be maximized.",
    specs: {
      "Max Power": "600W (front) + 180W (rear)",
      Efficiency: "23.1%",
      "Cell Type": "N-Type TOPCon Bifacial",
      "Bifaciality Factor": "85%",
      "Open Circuit Voltage": "52.4V",
      "Short Circuit Current": "14.42A",
      Dimensions: "2384 x 1134 x 35mm",
      Weight: "32.1 kg",
      Warranty: "30 Years Linear",
    },
    features: [
      "N-Type TOPCon cell technology",
      "Up to 30% rear-side energy gain",
      "Zero LID degradation",
      "Enhanced low-light performance",
      "30-year linear power warranty",
    ],
    inStock: true,
    sku: "DRF-SP-600B",
  },
  {
    id: "sp-004",
    name: "Darafta Flexi 200W",
    slug: "darafta-flexi-200w",
    category: "Solar Panels",
    categorySlug: "solar-panels",
    price: 159.99,
    image: "/images/products/solar-panel.jpg",
    images: ["/images/products/solar-panel.jpg"],
    rating: 4.5,
    reviewCount: 156,
    shortDescription: "200W flexible panel for RVs, boats, and curved surfaces",
    description:
      "The Darafta Flexi 200W is a lightweight, bendable solar panel designed for mobile and unconventional installations. With up to 30 degrees of flex, it conforms to curved surfaces like RV roofs, boat decks, and curved structures.",
    specs: {
      "Max Power": "200W",
      Efficiency: "20.1%",
      "Cell Type": "Mono PERC Shingled",
      "Open Circuit Voltage": "24.6V",
      "Short Circuit Current": "10.2A",
      "Flex Angle": "Up to 30 degrees",
      Dimensions: "1420 x 700 x 2.5mm",
      Weight: "4.2 kg",
      Warranty: "10 Years",
    },
    features: [
      "Ultra-lightweight at only 4.2 kg",
      "Flexible up to 30 degrees",
      "ETFE surface for marine environments",
      "Ideal for RVs, boats, and mobile setups",
    ],
    inStock: true,
    sku: "DRF-SP-200F",
  },

  // Inverters
  {
    id: "inv-001",
    name: "Darafta Hybrid 5kW",
    slug: "darafta-hybrid-5kw",
    category: "Inverters",
    categorySlug: "inverters",
    price: 1299.99,
    originalPrice: 1499.99,
    image: "/images/products/inverter.jpg",
    images: ["/images/products/inverter.jpg"],
    badge: "Popular",
    rating: 4.7,
    reviewCount: 187,
    shortDescription: "5kW hybrid inverter with built-in MPPT and battery management",
    description:
      "The Darafta Hybrid 5kW is an all-in-one solution combining a solar inverter, battery charger, and grid-tie functionality. Its dual MPPT trackers maximize energy harvest from different roof orientations, while the integrated battery management system supports seamless storage integration.",
    specs: {
      "Rated Power": "5000W",
      "Max PV Input": "6500W",
      "MPPT Trackers": "2",
      "MPPT Voltage Range": "120-500V DC",
      "Battery Voltage": "48V",
      "Max Charge Current": "100A",
      "Grid Connection": "Single Phase 230V",
      "Transfer Time": "< 10ms",
      Efficiency: "97.6%",
      Dimensions: "460 x 540 x 185mm",
      Weight: "24 kg",
      Warranty: "10 Years",
      "Communication": "WiFi / RS485 / CAN",
    },
    features: [
      "Dual MPPT for flexible panel configuration",
      "Seamless grid to battery switchover in < 10ms",
      "Built-in WiFi monitoring",
      "Compatible with lithium and lead-acid batteries",
      "Programmable priority modes: solar, battery, grid",
    ],
    inStock: true,
    sku: "DRF-INV-5KH",
  },
  {
    id: "inv-002",
    name: "Darafta Grid-Tie 3kW",
    slug: "darafta-grid-tie-3kw",
    category: "Inverters",
    categorySlug: "inverters",
    price: 649.99,
    image: "/images/products/inverter.jpg",
    images: ["/images/products/inverter.jpg"],
    rating: 4.6,
    reviewCount: 134,
    shortDescription: "3kW grid-tie micro-inverter for residential systems",
    description:
      "A compact, efficient grid-tie inverter designed for residential solar systems. Features maximum power point tracking for optimal energy conversion and built-in monitoring capabilities for real-time performance tracking.",
    specs: {
      "Rated Power": "3000W",
      "Max PV Input": "3600W",
      "MPPT Trackers": "1",
      "MPPT Voltage Range": "80-450V DC",
      "Grid Connection": "Single Phase 230V",
      Efficiency: "97.2%",
      Dimensions: "350 x 380 x 165mm",
      Weight: "12 kg",
      Warranty: "10 Years",
    },
    features: [
      "Compact wall-mount design",
      "Fanless cooling for silent operation",
      "Real-time monitoring via app",
      "IP65 rated for outdoor installation",
    ],
    inStock: true,
    sku: "DRF-INV-3KG",
  },
  {
    id: "inv-003",
    name: "Darafta Off-Grid 8kW",
    slug: "darafta-off-grid-8kw",
    category: "Inverters",
    categorySlug: "inverters",
    price: 2199.99,
    image: "/images/products/inverter.jpg",
    images: ["/images/products/inverter.jpg"],
    rating: 4.8,
    reviewCount: 76,
    shortDescription: "8kW pure sine wave off-grid inverter for large systems",
    description:
      "Built for demanding off-grid applications, the Darafta Off-Grid 8kW delivers clean pure sine wave power for sensitive electronics and heavy loads. With 16kW surge capacity, it handles motor starts and high-inrush loads with ease.",
    specs: {
      "Rated Power": "8000W",
      "Surge Power": "16000W",
      "DC Input": "48V",
      "AC Output": "230V Pure Sine Wave",
      "Max PV Input": "10400W",
      "MPPT Trackers": "2",
      Efficiency: "93.5%",
      Dimensions: "580 x 480 x 210mm",
      Weight: "38 kg",
      Warranty: "5 Years",
    },
    features: [
      "Pure sine wave output for sensitive equipment",
      "16kW surge capability for motor loads",
      "Parallel capability up to 6 units (48kW)",
      "Built-in AC charger for generator backup",
    ],
    inStock: true,
    sku: "DRF-INV-8KO",
  },

  // Batteries
  {
    id: "bat-001",
    name: "Darafta PowerVault 10kWh",
    slug: "darafta-powervault-10kwh",
    category: "Batteries",
    categorySlug: "batteries",
    price: 3499.99,
    originalPrice: 3999.99,
    image: "/images/products/battery.jpg",
    images: ["/images/products/battery.jpg"],
    badge: "Best Seller",
    rating: 4.9,
    reviewCount: 203,
    shortDescription: "10kWh LFP battery with 6000+ cycle life",
    description:
      "The Darafta PowerVault 10kWh is a premium lithium iron phosphate (LiFePO4) battery designed for daily cycling in solar storage applications. With over 6000 cycles at 90% depth of discharge, it delivers reliable energy storage for over 15 years of daily use.",
    specs: {
      Capacity: "10.24 kWh",
      "Usable Capacity": "9.72 kWh (95% DoD)",
      Chemistry: "LiFePO4 (LFP)",
      "Nominal Voltage": "51.2V",
      "Max Continuous Discharge": "100A (5.12 kW)",
      "Peak Discharge": "150A (7.68 kW)",
      "Cycle Life": "6000+ cycles at 90% DoD",
      "Round-Trip Efficiency": "96%",
      "Operating Temperature": "-10C to 50C",
      Dimensions: "600 x 400 x 200mm",
      Weight: "98 kg",
      Warranty: "10 Years",
      Communication: "CAN / RS485",
    },
    features: [
      "LiFePO4 chemistry for maximum safety",
      "Stackable design - connect up to 16 units (163 kWh)",
      "Built-in BMS with cell-level monitoring",
      "96% round-trip efficiency",
      "Floor or wall mounting options",
      "10-year or 6000-cycle warranty",
    ],
    inStock: true,
    sku: "DRF-BAT-10K",
  },
  {
    id: "bat-002",
    name: "Darafta PowerVault 5kWh",
    slug: "darafta-powervault-5kwh",
    category: "Batteries",
    categorySlug: "batteries",
    price: 1899.99,
    image: "/images/products/battery.jpg",
    images: ["/images/products/battery.jpg"],
    rating: 4.7,
    reviewCount: 145,
    shortDescription: "5kWh LFP battery for small to medium systems",
    description:
      "A compact version of our PowerVault line, the 5kWh model delivers the same premium LFP chemistry and build quality in a smaller package. Perfect for apartments, small homes, or as an expansion module for larger systems.",
    specs: {
      Capacity: "5.12 kWh",
      Chemistry: "LiFePO4 (LFP)",
      "Nominal Voltage": "51.2V",
      "Max Continuous Discharge": "50A (2.56 kW)",
      "Cycle Life": "6000+ cycles at 90% DoD",
      Dimensions: "480 x 400 x 180mm",
      Weight: "52 kg",
      Warranty: "10 Years",
    },
    features: [
      "Compact form factor for tight spaces",
      "Same premium LFP cells as larger units",
      "Expandable - stack up to 16 units",
      "Silent operation with passive cooling",
    ],
    inStock: true,
    sku: "DRF-BAT-5K",
  },
  {
    id: "bat-003",
    name: "Darafta PowerVault 20kWh",
    slug: "darafta-powervault-20kwh",
    category: "Batteries",
    categorySlug: "batteries",
    price: 6499.99,
    image: "/images/products/battery.jpg",
    images: ["/images/products/battery.jpg"],
    badge: "New",
    rating: 4.9,
    reviewCount: 34,
    shortDescription: "20kWh high-capacity LFP storage for whole-home backup",
    description:
      "Our highest-capacity single battery unit, the PowerVault 20kWh provides whole-home backup capability in a single enclosure. Designed for complete energy independence.",
    specs: {
      Capacity: "20.48 kWh",
      Chemistry: "LiFePO4 (LFP)",
      "Nominal Voltage": "51.2V",
      "Max Continuous Discharge": "200A (10.24 kW)",
      "Cycle Life": "6000+ cycles at 90% DoD",
      Dimensions: "800 x 600 x 250mm",
      Weight: "186 kg",
      Warranty: "10 Years",
    },
    features: [
      "Whole-home backup in a single unit",
      "200A continuous discharge for high loads",
      "Integrated fire suppression system",
      "IP65 rated for indoor or outdoor use",
    ],
    inStock: false,
    sku: "DRF-BAT-20K",
  },

  // Charge Controllers
  {
    id: "cc-001",
    name: "Darafta MPPT 60A",
    slug: "darafta-mppt-60a",
    category: "Charge Controllers",
    categorySlug: "charge-controllers",
    price: 349.99,
    image: "/images/products/charge-controller.jpg",
    images: ["/images/products/charge-controller.jpg"],
    badge: "Popular",
    rating: 4.6,
    reviewCount: 267,
    shortDescription: "60A MPPT charge controller with LCD display",
    description:
      "The Darafta MPPT 60A delivers advanced maximum power point tracking with up to 99% tracking efficiency. Its intelligent algorithm adapts to changing conditions throughout the day, ensuring maximum energy harvest from your solar array.",
    specs: {
      "Max Charge Current": "60A",
      "Max PV Input": "3200W (48V) / 1600W (24V)",
      "MPPT Voltage Range": "18-150V DC",
      "Battery Voltage": "12/24/48V Auto-Detect",
      "Tracking Efficiency": "99.5%",
      "Conversion Efficiency": "98%",
      Display: "4.3\" Color LCD",
      Communication: "RS485 / Bluetooth",
      Dimensions: "280 x 185 x 95mm",
      Weight: "3.8 kg",
      Warranty: "5 Years",
    },
    features: [
      "99.5% MPPT tracking efficiency",
      "Auto battery voltage detection",
      "Multi-stage charging algorithm",
      "Bluetooth monitoring via smartphone app",
      "Temperature compensation sensor included",
    ],
    inStock: true,
    sku: "DRF-CC-60M",
  },
  {
    id: "cc-002",
    name: "Darafta MPPT 30A",
    slug: "darafta-mppt-30a",
    category: "Charge Controllers",
    categorySlug: "charge-controllers",
    price: 179.99,
    image: "/images/products/charge-controller.jpg",
    images: ["/images/products/charge-controller.jpg"],
    rating: 4.5,
    reviewCount: 189,
    shortDescription: "30A MPPT charge controller for small systems",
    description:
      "An efficient MPPT controller sized for smaller off-grid installations. Perfect for RVs, sheds, cabins, and starter solar systems.",
    specs: {
      "Max Charge Current": "30A",
      "Max PV Input": "1600W (48V) / 800W (24V)",
      "MPPT Voltage Range": "18-100V DC",
      "Battery Voltage": "12/24V Auto-Detect",
      "Tracking Efficiency": "99%",
      Display: "2\" LCD",
      Dimensions: "210 x 140 x 75mm",
      Weight: "1.8 kg",
      Warranty: "3 Years",
    },
    features: [
      "Compact design for tight installations",
      "Multiple battery type presets",
      "Electronic protection suite",
      "LED status indicators",
    ],
    inStock: true,
    sku: "DRF-CC-30M",
  },

  // Mounting Kits
  {
    id: "mk-001",
    name: "Darafta RoofMount Pro",
    slug: "darafta-roofmount-pro",
    category: "Mounting Kits",
    categorySlug: "mounting-kits",
    price: 189.99,
    image: "/images/products/mounting-kit.jpg",
    images: ["/images/products/mounting-kit.jpg"],
    rating: 4.6,
    reviewCount: 198,
    shortDescription: "Complete roof mounting kit for 4 panels",
    description:
      "The Darafta RoofMount Pro includes everything needed to securely install up to 4 solar panels on a pitched or flat roof. Constructed from marine-grade anodized aluminum with stainless steel hardware.",
    specs: {
      "Panel Capacity": "Up to 4 panels",
      Material: "6063-T5 Anodized Aluminum",
      Hardware: "A2-70 Stainless Steel",
      "Roof Types": "Tile, Metal, Shingle",
      "Wind Rating": "Up to 60 m/s",
      "Snow Load": "Up to 1.4 kN/m2",
      "Rail Length": "4 x 2100mm",
      Weight: "14.2 kg (total kit)",
      Warranty: "15 Years",
    },
    features: [
      "Universal compatibility with most panel sizes",
      "Pre-assembled clamps for faster installation",
      "Integrated cable management channel",
      "Grounding clips included",
    ],
    inStock: true,
    sku: "DRF-MK-4RP",
  },
  {
    id: "mk-002",
    name: "Darafta GroundMount Standard",
    slug: "darafta-groundmount-standard",
    category: "Mounting Kits",
    categorySlug: "mounting-kits",
    price: 349.99,
    image: "/images/products/mounting-kit.jpg",
    images: ["/images/products/mounting-kit.jpg"],
    rating: 4.7,
    reviewCount: 87,
    shortDescription: "Adjustable ground mount for 6 panels",
    description:
      "A heavy-duty ground mounting system with adjustable tilt angles from 15 to 45 degrees. Designed for open-field installations where roof mounting is not suitable.",
    specs: {
      "Panel Capacity": "Up to 6 panels",
      Material: "Hot-dip Galvanized Steel",
      "Tilt Range": "15-45 degrees adjustable",
      "Foundation Type": "Ground screw or concrete pier",
      "Wind Rating": "Up to 55 m/s",
      Weight: "42 kg (total kit)",
      Warranty: "20 Years",
    },
    features: [
      "Adjustable tilt for seasonal optimization",
      "No welding required for assembly",
      "Compatible with ground screw foundations",
      "Expandable with additional rail kits",
    ],
    inStock: true,
    sku: "DRF-MK-6GS",
  },

  // Complete Kits
  {
    id: "ck-001",
    name: "Darafta Home Essential 5kW",
    slug: "darafta-home-essential-5kw",
    category: "Complete Kits",
    categorySlug: "complete-kits",
    price: 5999.99,
    originalPrice: 7199.99,
    image: "/images/products/complete-kit.jpg",
    images: ["/images/products/complete-kit.jpg"],
    badge: "Best Value",
    rating: 4.8,
    reviewCount: 124,
    shortDescription:
      "Complete 5kW system: 10 panels, inverter, battery, and mounting",
    description:
      "Everything you need to power your home with solar energy. The Home Essential 5kW kit includes 10 high-efficiency panels, a hybrid inverter with battery management, a 10kWh LFP battery, and a complete roof mounting system. Designed as a turnkey solution for energy independence.",
    specs: {
      "System Size": "5.5 kW (10 x 550W panels)",
      Inverter: "Darafta Hybrid 5kW",
      Battery: "Darafta PowerVault 10kWh",
      Mounting: "Darafta RoofMount Pro (3 kits)",
      "Daily Production": "22-28 kWh (location dependent)",
      "Annual Production": "8,000-10,000 kWh",
      "Backup Duration": "8-12 hours (average home)",
      Warranty: "Component warranties apply individually",
    },
    features: [
      "Complete plug-and-play system",
      "Enough to power a 3-4 bedroom home",
      "8-12 hours backup during outages",
      "Expandable battery and panel capacity",
      "Free system design consultation included",
      "All cables, connectors, and hardware included",
    ],
    inStock: true,
    sku: "DRF-CK-5KH",
  },
  {
    id: "ck-002",
    name: "Darafta Off-Grid Cabin 3kW",
    slug: "darafta-off-grid-cabin-3kw",
    category: "Complete Kits",
    categorySlug: "complete-kits",
    price: 3499.99,
    image: "/images/products/complete-kit.jpg",
    images: ["/images/products/complete-kit.jpg"],
    rating: 4.7,
    reviewCount: 67,
    shortDescription:
      "Off-grid 3kW system for cabins, workshops, and remote sites",
    description:
      "A self-contained off-grid power system designed for locations without grid access. Includes everything needed to generate, store, and use solar electricity independently.",
    specs: {
      "System Size": "3.0 kW (6 x 500W panels)",
      Inverter: "Darafta Off-Grid 3kW",
      Battery: "Darafta PowerVault 10kWh",
      "Charge Controller": "Darafta MPPT 60A",
      Mounting: "Darafta GroundMount Standard",
      "Daily Production": "12-16 kWh",
    },
    features: [
      "100% grid-independent operation",
      "Ground mount included for flexible placement",
      "Generator input for extended cloudy periods",
      "All wiring and protection devices included",
    ],
    inStock: true,
    sku: "DRF-CK-3KO",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge)
}

export function searchProducts(query: string): Product[] {
  const lower = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) ||
      p.shortDescription.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower)
  )
}
