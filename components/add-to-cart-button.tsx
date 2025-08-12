"use client"

import { useState } from "react"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/types"
import styles from "./add-to-cart-button.module.css"

export default function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    })

    setIsAdded(true)

    // Reset the "Added" state after 2 seconds
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <div className={styles.addToCartContainer}>
      <div className={styles.quantitySelector}>
        <button onClick={decrementQuantity} className={styles.quantityBtn} aria-label="Decrease quantity">
          -
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button onClick={incrementQuantity} className={styles.quantityBtn} aria-label="Increase quantity">
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className={`${styles.addToCartBtn} ${isAdded ? styles.added : ""}`}
        disabled={product.availability !== "Available" || isAdded}
      >
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  )
}
