export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  availability: "Available" | "Coming Soon" | "Sold Out"
  rating: number
  reviews: number
  colors?: string[]
  sizes?: string[]
}

export interface OrderData {
  customer: {
    name: string
    email: string
    address: string
    city: string
    postcode: string
    phone: string
    paymentMethod: string
    paymentNumber?: string
  }
  items: Array<Product & { quantity: number }>
  total: number
  orderDate: string
  orderNumber: string
}
