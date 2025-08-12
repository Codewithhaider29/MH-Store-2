"use client"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, Tag, Truck } from "lucide-react"
import { useCart } from "../context/CartContext"
import { useCurrency } from "@/context/CurrencyContext"

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart()
  const { formatPrice } = useCurrency()

  const subtotal = cartTotal
  const originalSubtotal = cartItems.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0)
  const totalSavings = originalSubtotal - subtotal

  const shipping = 0
  const tax = 0 // Tax is now free
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20 px-4">
        <div className="max-w-4xl mx-auto py-12">
          <div className="text-center">
            <ShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-playfair">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-6 sm:mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link href="/categories" className="btn-primary inline-block">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 font-playfair text-center sm:text-left">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 sm:p-6 ${index !== cartItems.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Image */}
                    <div className="w-full sm:w-24 h-24 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 w-full">
                      <h3 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h3>
                      <p className="text-gray-600 capitalize text-sm">{item.category}</p>

                      <div className="flex flex-wrap items-center space-x-2 mt-2">
                        <p className="text-xl font-bold text-pink-500">{formatPrice(item.price)}</p>
                        <p className="text-sm text-gray-500 line-through">{formatPrice(item.originalPrice)}</p>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          15% OFF
                        </span>
                      </div>

                      <p className="text-sm text-green-600 font-medium mt-1">
                        You save: {formatPrice((item.originalPrice - item.price) * item.quantity)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 font-medium min-w-[3rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-6 font-playfair">Order Summary</h2>

              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-green-600" />
                  Free Shipping
                </h3>
                <p className="text-sm text-green-700">
                  🎉 Great news! We offer free shipping on all orders, no minimum purchase required!
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Original Subtotal</span>
                  <span className="font-medium line-through text-gray-500">{formatPrice(originalSubtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal (with 15% off)</span>
                  <span className="font-medium text-pink-500">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-600 font-medium flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    Total Savings
                  </span>
                  <span className="font-bold text-green-600">{formatPrice(totalSavings)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 flex items-center">
                        <Truck className="w-4 h-4 mr-1" />
                        Shipping
                      </span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>

                    <div className="text-xs text-gray-500 space-y-1">
                      <p>• Standard: Free (5-7 business days)</p>
                      <p>• Express: Free (2-3 business days)</p>
                      <p>• Free shipping on all orders!</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (0%)</span>
                  <span className="font-medium">{formatPrice(tax)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-800">Total</span>
                    <span className="text-lg font-bold text-pink-500">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2 text-sm">Shipping Benefits:</h4>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Free returns within 30 days</li>
                  <li>• Package tracking included</li>
                  <li>• Secure packaging guaranteed</li>
                  <li>• Free shipping on all orders! 🎉</li>
                </ul>
              </div>

              <Link href="/checkout" className="btn-primary w-full text-center block mb-4">
                Proceed to Checkout
              </Link>

              <Link href="/categories" className="btn-secondary w-full text-center block">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
