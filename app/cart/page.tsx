"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/cart-context"
import styles from "./cart.module.css"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h1>Your Cart is Empty</h1>
        <p>Looks like you haven't added any products to your cart yet.</p>
        <Link href="/products" className={styles.continueShoppingBtn}>
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.cartPage}>
      <div className={styles.container}>
        <h1>Your Cart</h1>

        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                </div>

                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                </div>

                <div className={styles.itemQuantity}>
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className={styles.quantityBtn}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className={styles.quantityBtn}>
                    +
                  </button>
                </div>

                <div className={styles.itemTotal}>${(item.price * item.quantity).toFixed(2)}</div>

                <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h2>Order Summary</h2>

            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>

            <Link href="/checkout" className={styles.checkoutBtn}>
              Proceed to Checkout
            </Link>

            <Link href="/products" className={styles.continueShoppingLink}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
