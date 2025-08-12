import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    // UltraMsg credentials - Replace with your actual credentials
    const instanceId = process.env.ULTRAMSG_INSTANCE_ID
    const token = process.env.ULTRAMSG_TOKEN
    const storePhoneNumber = process.env.STORE_PHONE_NUMBER // Your phone number without + or spaces, e.g., '923001234567'

    if (!instanceId || !token || !storePhoneNumber) {
      console.error("Missing UltraMsg credentials")
      return NextResponse.json({ error: "Missing UltraMsg credentials" }, { status: 500 })
    }

    // Create WhatsApp message with better formatting
    const message = `🛍️ *NEW ORDER RECEIVED - MH STORE*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 *ORDER INFORMATION*
🆔 Order ID: *${orderData.orderNumber}*
📅 Date: ${orderData.orderDate}
⏰ Time: ${new Date().toLocaleTimeString()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*
📝 Name: *${orderData.customerName}*
📧 Email: ${orderData.customerEmail}
📱 Phone: ${orderData.customerPhone}

📍 *DELIVERY ADDRESS*
${orderData.address}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛒 *ORDERED ITEMS*
${orderData.items
  .map(
    (item: any, index: number) =>
      `${index + 1}. *${item.name}*
   🆔 Product ID: ${item.id}
   💰 Price: ${item.price} (Original: ${item.originalPrice || item.price})
   📦 Quantity: ${item.quantity}
   🏷️ Category: ${item.category}
   💵 Line Total: *${item.total}*`,
  )
  .join("\n\n")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 *ORDER SUMMARY*
💳 Payment Method: *${orderData.paymentMethod}*
📊 Subtotal: ${orderData.subtotal}
🚛 Shipping: ${orderData.shipping}
💸 Tax (8%): ${orderData.tax}
💵 *TOTAL AMOUNT: ${orderData.total}*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚚 *DELIVERY INFO*
📅 Estimated Delivery: ${orderData.estimatedDelivery}
🎯 Status: *PENDING CONFIRMATION*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ *ACTION REQUIRED*
Please confirm this order and provide tracking details to customer.

🏪 *MH Store Team*
📞 Support: +92 300 1234567
🌐 Website: mhstore.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📸 *Product images will be sent separately if available*`

    // UltraMsg API endpoint
    const ultraMsgUrl = `https://api.ultramsg.com/${instanceId}/messages/chat`

    // Prepare the request payload for UltraMsg
    const payload = {
      token: token,
      to: storePhoneNumber,
      body: message,
      priority: 1,
      referenceId: orderData.orderNumber,
    }

    console.log("Sending WhatsApp message via UltraMsg:", {
      instanceId,
      to: storePhoneNumber,
      orderNumber: orderData.orderNumber,
    })

    // Send WhatsApp message using UltraMsg API
    const response = await fetch(ultraMsgUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(payload),
    })

    const result = await response.json()

    if (response.ok && result.sent) {
      console.log("WhatsApp message sent successfully via UltraMsg:", result.id)

      // Send product images if available (but don't fail if images don't work)
      try {
        await sendProductImages(orderData.items, instanceId, token, storePhoneNumber, orderData.orderNumber)
      } catch (imageError) {
        console.log("Product images could not be sent, but order notification was successful:", imageError)
      }

      return NextResponse.json({
        success: true,
        messageId: result.id,
        message: "Order notification sent successfully",
      })
    } else {
      console.error("Failed to send WhatsApp message via UltraMsg:", result)
      return NextResponse.json(
        {
          error: "Failed to send WhatsApp message",
          details: result,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error sending WhatsApp message:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

// Function to send product images with better error handling
async function sendProductImages(
  items: any[],
  instanceId: string,
  token: string,
  phoneNumber: string,
  orderNumber: string,
) {
  try {
    console.log("Attempting to send product images for", items.length, "items")

    for (let i = 0; i < items.length; i++) {
      const item = items[i]

      // Skip if no image or placeholder image
      if (!item.image || item.image === "/placeholder.svg" || item.image.includes("placeholder")) {
        console.log(`Skipping image for item ${i + 1}: ${item.name} (no valid image)`)
        continue
      }

      // Validate and construct image URL
      let imageUrl = item.image

      // If it's a relative URL, make it absolute
      if (!imageUrl.startsWith("http")) {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com"
        imageUrl = `${baseUrl}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`
      }

      console.log(`Attempting to send image ${i + 1}:`, imageUrl)

      // Check if image URL is accessible before sending
      try {
        const imageCheckResponse = await fetch(imageUrl, { method: "HEAD" })
        if (!imageCheckResponse.ok) {
          console.log(`Image ${i + 1} not accessible (${imageCheckResponse.status}):`, imageUrl)
          continue
        }
      } catch (checkError) {
        console.log(`Image ${i + 1} check failed:`, imageUrl, checkError)
        continue
      }

      const imagePayload = {
        token: token,
        to: phoneNumber,
        image: imageUrl,
        caption: `📸 *${item.name}*\n🆔 Product ID: ${item.id}\n💰 Price: ${item.price}\n📦 Qty: ${item.quantity}\n\n🛍️ Order: ${orderNumber}`,
        priority: 1,
        referenceId: `${orderNumber}_img_${i + 1}`,
      }

      const imageResponse = await fetch(`https://api.ultramsg.com/${instanceId}/messages/image`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(imagePayload),
      })

      const imageResult = await imageResponse.json()

      if (imageResponse.ok && imageResult.sent) {
        console.log(`Product image ${i + 1} sent successfully:`, imageResult.id)
      } else {
        console.log(`Failed to send product image ${i + 1}:`, imageResult)
        // Continue with next image instead of failing
      }

      // Add delay between image sends to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    console.log("Finished attempting to send product images")
  } catch (error) {
    console.log("Error in sendProductImages function:", error)
    // Don't throw error - just log it so main message still succeeds
  }
}
