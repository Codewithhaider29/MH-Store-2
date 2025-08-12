"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./success.module.css"

export default function SuccessPage() {
  const router = useRouter()
  const [orderNumber, setOrderNumber] = useState<string>("")

  useEffect(() => {
    // Check if there's an order in the session
    const hasOrder = sessionStorage.getItem("orderCompleted")
    const storedOrderNumber = sessionStorage.getItem("orderNumber")

    if (!hasOrder) {
      // If no order was completed, redirect to home
      router.push("/")
    } else {
      // Set the order number if available
      if (storedOrderNumber) {
        setOrderNumber(storedOrderNumber)
      }

      // Clear the flags after checking
      sessionStorage.removeItem("orderCompleted")
      sessionStorage.removeItem("orderNumber")
    }
  }, [router])

  return (
    <div className={styles.successPage}>
      <div className={styles.successCard}>
        <div className={styles.checkmark}>
          <div className={styles.checkmarkCircle}></div>
          <div className={styles.checkmarkStem}></div>
          <div className={styles.checkmarkKick}></div>
        </div>

        <h1>Order Successful!</h1>

        <p>
          Thank you for your purchase. Your order has been received and is being processed. You will receive a
          confirmation email shortly.
        </p>

        <div className={styles.orderInfo}>
          <p>
            Order number:{" "}
            <strong>
              {orderNumber ||
                `#${Math.floor(Math.random() * 10000)
                  .toString()
                  .padStart(4, "0")}`}
            </strong>
          </p>
          <p>
            Date: <strong>{new Date().toLocaleDateString()}</strong>
          </p>
        </div>

        <div className={styles.emailNotice}>
          <p>A confirmation email has been sent to your email address.</p>
          <p>Please check your inbox (and spam folder) for order details.</p>
        </div>

        <div className={styles.actions}>
          <Link href="/products" className={styles.continueShoppingBtn}>
            Continue Shopping
          </Link>

          <Link href="/" className={styles.homeBtn}>
            Back to Home
          </Link>
        </div>

        <div className={styles.contactSupport}>
          <p>If you have any questions about your order, please contact us:</p>
          <p className={styles.contactNumber}>03287445683</p>
        </div>
      </div>
    </div>
  )
}
