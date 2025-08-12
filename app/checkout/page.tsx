"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/cart-context"
import { sendOrderConfirmation, sendWhatsAppNotification } from "@/lib/email-service"
import styles from "./checkout.module.css"

// Initialize EmailJS in a useEffect
import emailjs from "@emailjs/browser"

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, getTotalPrice, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postcode: "",
    phone: "",
    paymentMethod: "cod",
    paymentNumber: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [orderStatus, setOrderStatus] = useState<string | null>(null)

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("onEMJLhopJ4VThIet")
  }, [])

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCheckout}>
        <h1>Your Cart is Empty</h1>
        <p>You need to add products to your cart before checkout.</p>
        <Link href="/products" className={styles.shopNowBtn}>
          Shop Now
        </Link>
      </div>
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.address.trim()) newErrors.address = "Address is required"
    if (!formData.city.trim()) newErrors.city = "City is required"
    if (!formData.postcode.trim()) newErrors.postcode = "Postcode is required"
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number is invalid"
    }

    if (formData.paymentMethod !== "cod" && !formData.paymentNumber.trim()) {
      newErrors.paymentNumber = "Payment number is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setOrderStatus("Processing your order...")

    try {
      // Generate order number with date prefix for better tracking
      const orderDate = new Date()
      const orderNumber = `ORD-${orderDate.getFullYear()}${(orderDate.getMonth() + 1).toString().padStart(2, "0")}${orderDate.getDate().toString().padStart(2, "0")}-${Math.floor(1000 + Math.random() * 9000)}`

      // Prepare order data
      const orderData = {
        customer: formData,
        items: cart,
        total: getTotalPrice(),
        orderDate: orderDate.toISOString(),
        orderNumber: orderNumber,
      }

      // Send order confirmation email
      setOrderStatus("Sending confirmation email...")
      const emailSent = await sendOrderConfirmation(orderData)

      if (!emailSent) {
        throw new Error("Failed to send confirmation email")
      }

      // Optionally send WhatsApp notification
      try {
        await sendWhatsAppNotification(orderData)
      } catch (whatsappError) {
        console.error("WhatsApp notification failed, but continuing:", whatsappError)
        // Don't fail the whole process if WhatsApp fails
      }

      // Store order completion flag
      sessionStorage.setItem("orderCompleted", "true")
      sessionStorage.setItem("orderNumber", orderNumber)

      // Clear cart
      clearCart()

      // Redirect to success page
      router.push("/checkout/success")
    } catch (error) {
      console.error("Error processing order:", error)
      setOrderStatus(null)
      alert("There was an error processing your order. Please try again or contact us at 03287445683.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.checkoutPage}>
      <div className={styles.container}>
        <h1>Checkout</h1>

        <div className={styles.checkoutContent}>
          <div className={styles.checkoutForm}>
            {orderStatus && (
              <div className={styles.orderStatusMessage}>
                <p>{orderStatus}</p>
                <div className={styles.loadingSpinner}></div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={styles.formSection}>
                <h2>Contact Information</h2>

                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.inputError : ""}
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.inputError : ""}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? styles.inputError : ""}
                    disabled={isSubmitting}
                  />
                  {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                </div>
              </div>

              <div className={styles.formSection}>
                <h2>Shipping Address</h2>

                <div className={styles.formGroup}>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? styles.inputError : ""}
                    disabled={isSubmitting}
                  />
                  {errors.address && <span className={styles.errorMessage}>{errors.address}</span>}
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={errors.city ? styles.inputError : ""}
                      disabled={isSubmitting}
                    />
                    {errors.city && <span className={styles.errorMessage}>{errors.city}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="postcode">Postcode</label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      className={errors.postcode ? styles.inputError : ""}
                      disabled={isSubmitting}
                    />
                    {errors.postcode && <span className={styles.errorMessage}>{errors.postcode}</span>}
                  </div>
                </div>
              </div>

              <div className={styles.formSection}>
                <h2>Payment Method</h2>

                <div className={styles.paymentOptions}>
                  <div className={styles.paymentOption}>
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="cod">Cash on Delivery (COD)</label>
                  </div>

                  <div className={styles.paymentOption}>
                    <input
                      type="radio"
                      id="jazzcash"
                      name="paymentMethod"
                      value="jazzcash"
                      checked={formData.paymentMethod === "jazzcash"}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="jazzcash">JazzCash</label>
                  </div>

                  <div className={styles.paymentOption}>
                    <input
                      type="radio"
                      id="easypaisa"
                      name="paymentMethod"
                      value="easypaisa"
                      checked={formData.paymentMethod === "easypaisa"}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="easypaisa">Easypaisa</label>
                  </div>

                  <div className={styles.paymentOption}>
                    <input
                      type="radio"
                      id="nayapay"
                      name="paymentMethod"
                      value="nayapay"
                      checked={formData.paymentMethod === "nayapay"}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="nayapay">NayaPay</label>
                  </div>

                  <div className={styles.paymentOption}>
                    <input
                      type="radio"
                      id="sadapay"
                      name="paymentMethod"
                      value="sadapay"
                      checked={formData.paymentMethod === "sadapay"}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="sadapay">SadaPay</label>
                  </div>
                </div>

                {formData.paymentMethod !== "cod" && (
                  <div className={styles.formGroup}>
                    <label htmlFor="paymentNumber">Payment Number</label>
                    <input
                      type="text"
                      id="paymentNumber"
                      name="paymentNumber"
                      value={formData.paymentNumber}
                      onChange={handleChange}
                      placeholder="Enter your payment number"
                      className={errors.paymentNumber ? styles.inputError : ""}
                      disabled={isSubmitting}
                    />
                    {errors.paymentNumber && <span className={styles.errorMessage}>{errors.paymentNumber}</span>}
                  </div>
                )}
              </div>

              <div className={styles.contactInfo}>
                <p>Need help with your order? Contact us:</p>
                <p className={styles.contactNumber}>Phone: 03287445683</p>
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={styles.confirmOrderBtn} disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Confirm Order"}
                </button>

                <Link href="/cart" className={styles.backToCartLink}>
                  Back to Cart
                </Link>
              </div>
            </form>
          </div>

          <div className={styles.orderSummary}>
            <h2>Order Summary</h2>

            <div className={styles.orderItems}>
              {cart.map((item) => (
                <div key={item.id} className={styles.orderItem}>
                  <div className={styles.itemImage}>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={60}
                      height={60}
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.itemInfo}>
                    <h3>{item.name}</h3>
                    <div className={styles.itemMeta}>
                      <span>Qty: {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
          </div>
        </div>
      </div>
    </div>
  )
}
