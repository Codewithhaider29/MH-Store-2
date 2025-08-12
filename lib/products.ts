import type { Product } from "./types"

// Mock product data
const products: Product[] = [
  // Watches
  {
    id: "watch-1",
    name: "Chronos Elite Watch",
    description:
      "A premium stainless steel watch with chronograph functionality. Water-resistant up to 100m and features a sapphire crystal face.",
    price: 199.99,
    category: "watches",
    image: "/images/watch-1.jpg",
    availability: "Available",
    rating: 4,
    reviews: 128,
    colors: ["Silver", "Black", "Gold"],
    sizes: ["One Size"],
  },
  {
    id: "watch-2",
    name: "Lumina Smart Watch",
    description:
      "Track your fitness, receive notifications, and monitor your health with this advanced smartwatch. Features a bright AMOLED display.",
    price: 249.99,
    category: "watches",
    image: "/images/watch-2.jpg",
    availability: "Available",
    rating: 5,
    reviews: 94,
    colors: ["Black", "White", "Blue"],
    sizes: ["One Size"],
  },
  {
    id: "watch-3",
    name: "Elegance Women's Watch",
    description:
      "A delicate and elegant watch designed for women. Features a mother-of-pearl dial and genuine leather strap.",
    price: 179.99,
    category: "watches",
    image: "/images/watch-3.jpg",
    availability: "Coming Soon",
    rating: 0,
    reviews: 0,
    colors: ["Rose Gold", "Silver", "White"],
    sizes: ["One Size"],
  },
  {
    id: "watch-4",
    name: "Aqua Diver Watch",
    description:
      "Professional diving watch with 300m water resistance. Features a unidirectional rotating bezel and luminous markers.",
    price: 299.99,
    category: "watches",
    image: "/images/watch-4.jpg",
    availability: "Available",
    rating: 4,
    reviews: 56,
    colors: ["Blue", "Black", "Orange"],
    sizes: ["One Size"],
  },

  // Earbuds
  {
    id: "earbud-1",
    name: "SonicPods Pro",
    description:
      "True wireless earbuds with active noise cancellation. Enjoy up to 8 hours of playback on a single charge.",
    price: 149.99,
    category: "earbuds",
    image: "/images/earbud-1.jpg",
    availability: "Available",
    rating: 5,
    reviews: 203,
    colors: ["White", "Black", "Blue"],
    sizes: ["One Size"],
  },
  {
    id: "earbud-2",
    name: "BassBuds X3",
    description:
      "Experience deep, powerful bass with these wireless earbuds. Features IPX7 waterproof rating for workouts and outdoor activities.",
    price: 129.99,
    category: "earbuds",
    image: "/images/earbud-2.jpg",
    availability: "Available",
    rating: 4,
    reviews: 87,
    colors: ["Black", "Red", "Green"],
    sizes: ["One Size"],
  },
  {
    id: "earbud-3",
    name: "ClearSound TWS",
    description:
      "Crystal clear sound quality with Bluetooth 5.2 connectivity. Features touch controls and voice assistant support.",
    price: 99.99,
    category: "earbuds",
    image: "/images/earbud-3.jpg",
    availability: "Sold Out",
    rating: 4,
    reviews: 142,
    colors: ["White", "Black"],
    sizes: ["One Size"],
  },
  {
    id: "earbud-4",
    name: "SportFit Earbuds",
    description:
      "Designed for athletes with secure ear hooks and sweat resistance. Provides up to 10 hours of playback time.",
    price: 119.99,
    category: "earbuds",
    image: "/images/earbud-4.jpg",
    availability: "Available",
    rating: 4,
    reviews: 76,
    colors: ["Black", "Yellow", "Blue"],
    sizes: ["One Size"],
  },

  // Bags
  {
    id: "bag-1",
    name: "Elegance Tote Bag",
    description:
      "A spacious and stylish tote bag made from premium vegan leather. Features multiple compartments for organization.",
    price: 89.99,
    category: "bags",
    image: "/images/bag-1.jpg",
    availability: "Available",
    rating: 5,
    reviews: 67,
    colors: ["Black", "Brown", "Beige"],
    sizes: ["Large"],
  },
  {
    id: "bag-2",
    name: "Chic Crossbody Bag",
    description:
      "A compact crossbody bag perfect for everyday essentials. Features adjustable strap and secure zipper closure.",
    price: 69.99,
    category: "bags",
    image: "/images/bag-2.jpg",
    availability: "Available",
    rating: 4,
    reviews: 93,
    colors: ["Red", "Black", "Navy"],
    sizes: ["Small", "Medium"],
  },
  {
    id: "bag-3",
    name: "Urban Backpack",
    description: "Modern backpack with laptop compartment and anti-theft features. Perfect for commuting and travel.",
    price: 79.99,
    category: "bags",
    image: "/images/bag-3.jpg",
    availability: "Coming Soon",
    rating: 0,
    reviews: 0,
    colors: ["Gray", "Black", "Blue"],
    sizes: ["One Size"],
  },
  {
    id: "bag-4",
    name: "Weekend Duffle Bag",
    description:
      "Spacious duffle bag for weekend getaways. Features durable canvas construction and genuine leather accents.",
    price: 119.99,
    category: "bags",
    image: "/images/bag-4.jpg",
    availability: "Available",
    rating: 4,
    reviews: 45,
    colors: ["Olive", "Brown", "Black"],
    sizes: ["One Size"],
  },

  // Neckbands
  {
    id: "neckband-1",
    name: "SportFlex Neckband",
    description: "Flexible neckband earphones with magnetic earbuds. Perfect for workouts with IPX5 sweat resistance.",
    price: 59.99,
    category: "neckbands",
    image: "/images/neckband-1.jpg",
    availability: "Available",
    rating: 4,
    reviews: 112,
    colors: ["Black", "Blue", "Red"],
    sizes: ["One Size"],
  },
  {
    id: "neckband-2",
    name: "BassWave Neckband",
    description: "Experience powerful bass with these premium neckband earphones. Features active noise cancellation.",
    price: 79.99,
    category: "neckbands",
    image: "/images/neckband-2.jpg",
    availability: "Available",
    rating: 4,
    reviews: 78,
    colors: ["Black", "Silver"],
    sizes: ["One Size"],
  },
  {
    id: "neckband-3",
    name: "ComfortFit Pro",
    description: "Ultra-comfortable neckband with memory foam ear tips. Enjoy up to 20 hours of playback time.",
    price: 69.99,
    category: "neckbands",
    image: "/images/neckband-3.jpg",
    availability: "Sold Out",
    rating: 5,
    reviews: 54,
    colors: ["Black", "White"],
    sizes: ["One Size"],
  },
  {
    id: "neckband-4",
    name: "AquaSound Neckband",
    description: "Waterproof neckband earphones perfect for swimming and water sports. Features IPX8 rating.",
    price: 89.99,
    category: "neckbands",
    image: "/images/neckband-4.jpg",
    availability: "Coming Soon",
    rating: 0,
    reviews: 0,
    colors: ["Blue", "Black", "Yellow"],
    sizes: ["One Size"],
  },
]

// Helper functions to work with products
export function getProducts(): Product[] {
  return products
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getRelatedProducts(id: string, category: string, limit = 4): Product[] {
  return products.filter((product) => product.id !== id && product.category === category).slice(0, limit)
}

export function getFeaturedProducts(limit = 8): Product[] {
  // In a real app, you might have a "featured" flag on products
  // For this example, we'll just return products with high ratings
  return [...products].sort((a, b) => b.rating - a.rating).slice(0, limit)
}
