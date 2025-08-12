"use client"
import { MessageCircle } from "lucide-react"
import type React from "react"

interface OrderDetails {
  orderId: string
  customerName: string
  amount: number
  address: string
  city: string
  state: string
  paymentMethod: string
  items?: Array<{
    name: string
    quantity: number
    price: number
  }>
}

interface WhatsAppButtonProps {
  orderDetails: OrderDetails
  className?: string
  children?: React.ReactNode
}

export default function WhatsAppButton({ orderDetails, className = "", children }: WhatsAppButtonProps) {
  // Store owner's WhatsApp number (replace with actual number)
  const storeWhatsAppNumber = "+923001234567" // Replace with actual store WhatsApp number

  const generateWhatsAppMessage = () => {
    const { orderId, customerName, amount, address, city, state, paymentMethod, items = [] } = orderDetails

    let message = `🛍️ *New Order Confirmation - MH Store*\n\n`
    message += `📋 *Order Details:*\n`
    message += `• Order ID: ${orderId}\n`
    message += `• Customer: ${customerName}\n`
    message += `• Total Amount: $${amount.toFixed(2)}\n\n`

    message += `📍 *Delivery Address:*\n`
    message += `${address}\n`
    message += `${city}, ${state}\n\n`

    message += `💳 *Payment Method:* ${paymentMethod}\n\n`

    if (items.length > 0) {
      message += `🛒 *Items Ordered:*\n`
      items.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`
        message += `   Qty: ${item.quantity} × $${item.price.toFixed(2)}\n`
      })
      message += `\n`
    }

    message += `✅ *Please confirm this order and provide estimated delivery time.*\n\n`
    message += `Thank you! 🙏`

    return encodeURIComponent(message)
  }

  const handleWhatsAppClick = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${storeWhatsAppNumber.replace(/[^0-9]/g, "")}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{children || "Confirm via WhatsApp"}</span>
    </button>
  )
}
