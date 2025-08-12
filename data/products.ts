export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "watches" | "handbags" | "earbuds" | "accessories"
  featured?: boolean
  tag?: string
  status: "in-stock" | "sold-out" | "coming-soon"
  stock: number
}

export const products: Product[] = [
  // Watches
  {
    id: "1",
    name: "Elegant Rose Gold Watch",
    description: "A stunning rose gold timepiece with leather strap, perfect for any occasion.",
    price: 299,
    image: "/placeholder.svg?height=400&width=400",
    category: "watches",
    featured: true,
    tag: "New",
    status: "in-stock",
    stock: 15,
  },
  {
    id: "2",
    name: "Classic Silver Watch",
    description: "Timeless silver watch with minimalist design and premium materials.",
    price: 249,
    image: "/placeholder.svg?height=400&width=400",
    category: "watches",
    featured: true,
    status: "in-stock",
    stock: 8,
  },
  {
    id: "3",
    name: "Luxury Diamond Watch",
    description: "Exquisite diamond-encrusted watch for the most special occasions.",
    price: 899,
    image: "/placeholder.svg?height=400&width=400",
    category: "watches",
    tag: "Luxury",
    status: "sold-out",
    stock: 0,
  },

  // Handbags
  {
    id: "4",
    name: "Premium Leather Handbag",
    description: "Sophisticated leather handbag with multiple compartments and elegant design.",
    price: 199,
    image: "/placeholder.svg?height=400&width=400",
    category: "handbags",
    featured: true,
    tag: "Bestseller",
    status: "in-stock",
    stock: 12,
  },
  {
    id: "5",
    name: "Designer Tote Bag",
    description: "Spacious designer tote bag perfect for work and everyday use.",
    price: 159,
    image: "/placeholder.svg?height=400&width=400",
    category: "handbags",
    status: "in-stock",
    stock: 6,
  },
  {
    id: "6",
    name: "Evening Clutch",
    description: "Elegant evening clutch with gold accents for special occasions.",
    price: 89,
    image: "/placeholder.svg?height=400&width=400",
    category: "handbags",
    tag: "New",
    status: "coming-soon",
    stock: 0,
  },

  // Earbuds
  {
    id: "7",
    name: "Wireless Pro Earbuds",
    description: "Premium wireless earbuds with noise cancellation and superior sound quality.",
    price: 179,
    image: "/placeholder.svg?height=400&width=400",
    category: "earbuds",
    featured: true,
    tag: "Pro",
    status: "in-stock",
    stock: 20,
  },
  {
    id: "8",
    name: "Sport Wireless Earbuds",
    description: "Water-resistant earbuds designed for active lifestyle and workouts.",
    price: 129,
    image: "/placeholder.svg?height=400&width=400",
    category: "earbuds",
    status: "in-stock",
    stock: 3,
  },
  {
    id: "9",
    name: "Studio Quality Earbuds",
    description: "Professional-grade earbuds with studio-quality sound reproduction.",
    price: 249,
    image: "/placeholder.svg?height=400&width=400",
    category: "earbuds",
    tag: "Studio",
    status: "sold-out",
    stock: 0,
  },

  // Accessories
  {
    id: "10",
    name: "Silk Scarf Collection",
    description: "Luxurious silk scarves in various patterns and colors.",
    price: 79,
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
    status: "in-stock",
    stock: 25,
  },
  {
    id: "11",
    name: "Designer Sunglasses",
    description: "Stylish sunglasses with UV protection and premium frames.",
    price: 149,
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
    tag: "Trending",
    status: "in-stock",
    stock: 10,
  },
  {
    id: "12",
    name: "Leather Wallet",
    description: "Premium leather wallet with RFID protection and multiple card slots.",
    price: 69,
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
    status: "coming-soon",
    stock: 0,
  },
  {
    id: "13",
    name: "Pearl Necklace",
    description: "Elegant pearl necklace perfect for formal occasions.",
    price: 199,
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
    tag: "Elegant",
    status: "in-stock",
    stock: 5,
  },
]
