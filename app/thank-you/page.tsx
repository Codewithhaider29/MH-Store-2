"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, Package, Truck, Mail } from "lucide-react"
import { useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { useCart } from "../context/CartContext"
import { useCurrency } from "@/context/CurrencyContext"
import Image from "next/image"

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get("orderNumber") || "MH-2024-001234"

  const { currentOrderItems, clearCurrentOrder } = useCart()
  const { formatPrice } = useCurrency()
  const hasCleared = useRef(false)

  // Calculate totals from current order items
  const subtotal = currentOrderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  useEffect(() => {
    // Clear current order when leaving thank you page - only once
    return () => {
      if (!hasCleared.current) {
        clearCurrentOrder()
        hasCleared.current = true
      }
    }
  }, [clearCurrentOrder])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-playfair">Thank You for Your Order!</h1>
          <p className="text-xl text-gray-600 mb-8">Your order has been successfully placed and is being processed.</p>

          {/* Order Number Display */}
          <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Package className="w-6 h-6 text-pink-600" />
              <span className="text-lg font-semibold text-gray-800">Order Number:</span>
              <span className="text-xl font-bold text-pink-600">{orderNumber}</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Please save this number for your records</p>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Package className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Order Confirmed</h3>
                <p className="text-sm text-gray-600">Order #{orderNumber}</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Truck className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Estimated Delivery</h3>
                <p className="text-sm text-gray-600">3-5 business days</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Email Sent</h3>
                <p className="text-sm text-gray-600">Confirmation email delivered</p>
              </div>
            </div>
          </div>

          {/* Order Summary - Only Current Order Items */}
          {currentOrderItems.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">Order Summary</h2>
              <div className="space-y-4">
                {currentOrderItems.map((item, index) => (
                  <div
                    key={`${item.id}-${item.orderTimestamp}`}
                    className="flex items-center justify-between py-3 border-b border-gray-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-sm text-gray-600 capitalize">{item.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-pink-500">{formatPrice(item.price * item.quantity)}</span>
                      <p className="text-xs text-gray-500 line-through">
                        {formatPrice(item.originalPrice * item.quantity)}
                      </p>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">15% OFF</span>
                    </div>
                  </div>
                ))}

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">{formatPrice(tax)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                    <span className="text-gray-800">Total</span>
                    <span className="text-pink-500">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">What's Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📧 Confirmation Email</h3>
                <p className="text-sm text-gray-600">
                  You've received an order confirmation email with all the details and your order number.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📦 Order Processing</h3>
                <p className="text-sm text-gray-600">
                  Your order will be processed within 1-2 business days and then shipped to your address.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">🚚 Tracking Information</h3>
                <p className="text-sm text-gray-600">
                  Once shipped, you'll receive tracking information to monitor your package's journey.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">💬 Customer Support</h3>
                <p className="text-sm text-gray-600">
                  Have questions? Our support team is available 24/7 to help you with any concerns.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categories" className="btn-primary px-8 py-3">
              Continue Shopping
            </Link>
            <Link href="/support" className="btn-secondary px-8 py-3">
              Contact Support
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-pink-50 rounded-xl">
            <h3 className="font-semibold text-gray-800 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              If you have any questions about your order, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <span className="text-gray-600">📞 +92 300 1234567</span>
              <span className="text-gray-600">📧 support@mhstore.com</span>
              <span className="text-gray-600">💬 Live Chat Available</span>
            </div>
            <div className="mt-4 p-3 bg-white rounded-lg">
              <p className="text-xs text-gray-500">
                <strong>Order Reference:</strong> {orderNumber} | Keep this number for future reference
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
