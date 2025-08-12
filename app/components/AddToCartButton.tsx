"use client"
import { ShoppingCart } from "lucide-react"
import { useToastContext } from "./ToastProvider"
import { useCart } from "../context/CartContext"
import { useCurrency } from "@/context/CurrencyContext"

interface AddToCartButtonProps {
  product: any
  className?: string
  disabled?: boolean
}

export default function AddToCartButton({
  product,
  className = "btn-primary",
  disabled = false,
}: AddToCartButtonProps) {
  const { success, warning } = useToastContext()
  const { addToCart } = useCart()
  const { currency } = useCurrency()

  // Add safety checks for product
  if (!product) {
    return (
      <button
        disabled
        className="bg-gray-400 cursor-not-allowed flex items-center justify-center space-x-2 px-4 py-2 rounded-lg"
      >
        <ShoppingCart size={20} />
        <span>Unavailable</span>
      </button>
    )
  }

  const handleAddToCart = () => {
    if (disabled || product.status === "sold-out") {
      warning("Out of Stock", "This product is currently sold out")
      return
    }

    if (product.status === "coming-soon") {
      warning("Coming Soon", "This product will be available soon")
      return
    }

    addToCart(product)
    success("Added to Cart!", `${product.name} has been added to your cart with 15% discount!`)
  }

  const getButtonText = () => {
    if (product.status === "sold-out") return "Sold Out"
    if (product.status === "coming-soon") return "Coming Soon"
    return "Add to Cart"
  }

  const getButtonClass = () => {
    if (product.status === "sold-out") return "bg-gray-400 cursor-not-allowed text-white px-4 py-2 rounded-lg"
    if (product.status === "coming-soon") return "bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
    return className
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={disabled || product.status === "sold-out"}
      className={`${getButtonClass()} flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <ShoppingCart size={20} />
      <span>{getButtonText()}</span>
    </button>
  )
}
