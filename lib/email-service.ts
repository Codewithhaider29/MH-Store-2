"use client"

import emailjs from "@emailjs/browser"
import type { OrderData } from "./types"

// EmailJS integration for sending order confirmations
export async function sendOrderConfirmation(orderData: OrderData): Promise<boolean> {
  try {
    // Format order items for email
    const itemsList = orderData.items
      .map((item) => `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`)
      .join("\n")

    // Format shipping address
    const shippingAddress = `${orderData.customer.address}, ${orderData.customer.city}, ${orderData.customer.postcode}`

    // Format payment method
    let paymentMethod = orderData.customer.paymentMethod.toUpperCase()
    if (paymentMethod !== "COD" && orderData.customer.paymentNumber) {
      paymentMethod += ` (${orderData.customer.paymentNumber})`
    }

    // Prepare template parameters
    const templateParams = {
      to_name: orderData.customer.name,
      to_email: orderData.customer.email,
      order_number: orderData.orderNumber,
      order_date: new Date(orderData.orderDate).toLocaleDateString(),
      order_total: orderData.total.toFixed(2),
      items_list: itemsList,
      shipping_address: shippingAddress,
      payment_method: paymentMethod,
      contact_number: "03287445683",
      customer_phone: orderData.customer.phone,
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      "service_b44py1r", // Replace with your EmailJS service ID
      "template_ixjrvwd", // Replace with your EmailJS template ID
      templateParams,
      "onEMJLhopJ4VThIet", // Replace with your EmailJS public key
    )

    console.log("Email sent successfully:", response)

    // Also send a copy to the store owner
    await sendOrderNotificationToOwner(orderData)

    return true
  } catch (error) {
    console.error("Failed to send email:", error)
    return false
  }
}

// Send notification to store owner about new order
async function sendOrderNotificationToOwner(orderData: OrderData): Promise<boolean> {
  try {
    // Format order items for email
    const itemsList = orderData.items
      .map((item) => `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`)
      .join("\n")

    // Prepare template parameters for store owner
    const templateParams = {
      customer_name: orderData.customer.name,
      customer_email: orderData.customer.email,
      customer_phone: orderData.customer.phone,
      order_number: orderData.orderNumber,
      order_date: new Date(orderData.orderDate).toLocaleDateString(),
      order_total: orderData.total.toFixed(2),
      items_list: itemsList,
      shipping_address: `${orderData.customer.address}, ${orderData.customer.city}, ${orderData.customer.postcode}`,
      payment_method: orderData.customer.paymentMethod.toUpperCase(),
    }

    // Send email to store owner
    const response = await emailjs.send(
      "service_b44py1r",
      "template_ixjrvwd", // You can use the same template or create a separate one for owner
      templateParams,
      "onEMJLhopJ4VThIet",
    )

    console.log("Owner notification sent successfully:", response)
    return true
  } catch (error) {
    console.error("Failed to send owner notification:", error)
    return false
  }
}

// Function to send WhatsApp notification (optional)
export async function sendWhatsAppNotification(orderData: OrderData): Promise<boolean> {
  // This is a placeholder for WhatsApp integration
  // You would need to use a WhatsApp Business API provider

  console.log("WhatsApp notification would be sent here")
  return true
}
