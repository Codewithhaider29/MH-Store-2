"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { CreditCard, Lock, Truck, Check, AlertCircle, Package } from "lucide-react"
import { useToastContext } from "../components/ToastProvider"
import { useCart } from "../context/CartContext"
import { pakistanCitiesData } from "@/data/cities"
import { useCurrency } from "@/context/CurrencyContext"
import Image from "next/image"
import emailjs from "@emailjs/browser"

const pakistanStates = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Gilgit-Baltistan",
  "Azad Jammu and Kashmir",
  "Islamabad Capital Territory",
]

const pakistanCities = pakistanCitiesData.map((city) => city.name)

// Generate unique order number
const generateOrderNumber = () => {
  const timestamp = Date.now().toString().slice(-6)
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0")
  return `MH-2024-${timestamp}${random}`
}

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [orderNumber] = useState(generateOrderNumber())
  const [isProcessingOrder, setIsProcessingOrder] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
  })
  const [formErrors, setFormErrors] = useState<string[]>([])
  const router = useRouter()
  const { success, error } = useToastContext()
  const { cartItems, cartTotal, setCurrentOrder, clearCart } = useCart()
  const { formatPrice } = useCurrency()

  const subtotal = cartTotal
  // Shipping calculation - Always free
  const shipping = 0 // Always free shipping
  const tax = 0 // Free tax - was: subtotal * 0.08
  const total = subtotal + shipping + tax

  const sendWhatsAppNotification = async (orderData: any) => {
    try {
      console.log("Sending WhatsApp notification with UltraMsg...")

      const response = await fetch("/api/send-whatsapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        console.log("WhatsApp notification sent successfully via UltraMsg:", result.messageId)
        // Remove this line: success("WhatsApp Sent!", "Order details sent to store admin via WhatsApp")
      } else {
        console.error("Failed to send WhatsApp notification:", result)
        // Don't show error to user - order was still successful
        console.log("Order placed successfully, WhatsApp notification had issues but that's okay")
      }
    } catch (err) {
      console.error("Error sending WhatsApp notification:", err)
      // Don't show error to user - order was still successful
      console.log("Order placed successfully, WhatsApp notification failed but that's okay")
    }
  }

  const sendOrderConfirmationEmail = async () => {
    try {
      // Validate email before sending
      if (!formData.email || !formData.email.trim()) {
        throw new Error("Customer email is required")
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        throw new Error("Invalid email format")
      }

      // Initialize EmailJS with your public key
      emailjs.init("onEMJLhopJ4VThIet")

      // Prepare email data with multiple field name variations to ensure compatibility
      const emailData = {
        // Standard EmailJS fields
        user_email: formData.email.trim(),
        to_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        email: formData.email.trim(),

        // Customer information
        user_name: `${formData.firstName} ${formData.lastName}`,
        to_name: `${formData.firstName} ${formData.lastName}`,
        customer_name: `${formData.firstName} ${formData.lastName}`,
        from_name: "MH Store",

        // Order details
        order_number: orderNumber,
        order_total: formatPrice(total),
        subtotal: formatPrice(subtotal),
        tax: formatPrice(tax),
        shipping: "Free",
        payment_method: getPaymentMethodName(),

        // Address
        delivery_address: `${formData.address}, ${selectedCity}, ${selectedState} ${formData.postalCode}, Pakistan`,
        address: formData.address,
        city: selectedCity,
        state: selectedState,
        postal_code: formData.postalCode,
        phone: formData.phone,

        // Items
        items_list: cartItems
          .map((item) => `${item.name} (Qty: ${item.quantity}) - ${formatPrice(item.price * item.quantity)}`)
          .join("\n"),

        // Additional info
        estimated_delivery: "3-5 business days",
        store_name: "MH Store",
        store_email: "support@mhstore.com",
        store_phone: "+92 300 1234567",

        // Message content
        message: `Thank you for your order! Your order number is ${orderNumber}. We will process your order within 1-2 business days and send you tracking information once shipped.`,

        // Date
        order_date: new Date().toLocaleDateString(),
      }

      console.log("Attempting to send email with data:", {
        service: "service_kos9kiq",
        template: "template_fsxvwx4",
        email: emailData.user_email,
        customerName: emailData.customer_name,
        orderNumber: emailData.order_number,
      })

      const response = await emailjs.send(
        "service_kos9kiq", // Your updated service ID
        "template_fsxvwx4", // Your template ID
        emailData,
      )

      console.log("Email sent successfully:", response)
      // Remove this line: success("Email Sent!", "Order confirmation email has been sent successfully")
    } catch (err) {
      console.error("Email sending failed:", err)

      // Don't fail the order if email fails
      if (err instanceof Error) {
        console.error("Error details:", err.message)
        error(
          "Email Warning",
          `Order placed successfully! However, the confirmation email could not be sent. Please save your order number: ${orderNumber}`,
        )
      } else {
        error("Email Warning", `Order placed successfully! Please save your order number: ${orderNumber}`)
      }
    }
  }

  const validateShippingForm = () => {
    const errors: string[] = []

    if (!formData.firstName.trim()) errors.push("First name is required")
    if (!formData.lastName.trim()) errors.push("Last name is required")
    if (!formData.email.trim()) errors.push("Email is required")
    if (!formData.phone.trim()) errors.push("Phone number is required")
    if (!formData.address.trim()) errors.push("Address is required")
    if (!selectedCity) errors.push("City is required")
    if (!selectedState) errors.push("State is required")

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address")
    }

    setFormErrors(errors)
    return errors.length === 0
  }

  const validatePaymentForm = () => {
    const errors: string[] = []

    if (!paymentMethod) errors.push("Payment method is required")

    setFormErrors(errors)
    return errors.length === 0
  }

  const validateFinalForm = () => {
    const errors: string[] = []

    // Re-validate all required fields before placing order
    if (!formData.firstName.trim()) errors.push("First name is required")
    if (!formData.lastName.trim()) errors.push("Last name is required")
    if (!formData.email.trim()) errors.push("Email is required")
    if (!formData.phone.trim()) errors.push("Phone number is required")
    if (!formData.address.trim()) errors.push("Address is required")
    if (!selectedCity) errors.push("City is required")
    if (!selectedState) errors.push("State is required")
    if (!paymentMethod) errors.push("Payment method is required")

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address")
    }

    if (cartItems.length === 0) {
      errors.push("Your cart is empty")
    }

    setFormErrors(errors)
    return errors.length === 0
  }

  const handlePlaceOrder = async () => {
    // Validate all form data before processing
    if (!validateFinalForm()) {
      error("Validation Error", "Please fill in all required fields correctly")
      return
    }

    setIsProcessingOrder(true)

    try {
      // Set current order items before clearing cart
      setCurrentOrder(cartItems)

      // Prepare WhatsApp order data with enhanced product information
      const whatsappOrderData = {
        orderNumber,
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        address: `${formData.address}, ${selectedCity}, ${selectedState} ${formData.postalCode}, Pakistan`,
        paymentMethod: getPaymentMethodName(),
        items: cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          price: formatPrice(item.price),
          originalPrice: formatPrice(item.originalPrice || item.price),
          quantity: item.quantity,
          image: item.image,
          category: item.category,
          total: formatPrice(item.price * item.quantity),
        })),
        subtotal: formatPrice(subtotal),
        tax: formatPrice(tax),
        shipping: "Free",
        total: formatPrice(total),
        orderDate: new Date().toLocaleDateString(),
        estimatedDelivery: "3-5 business days",
      }

      // Simulate order processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Always show success for order placement first
      success("Order Placed!", "Your order has been successfully placed")

      // Send WhatsApp notification to store owner via UltraMsg (don't wait for it)
      sendWhatsAppNotification(whatsappOrderData).catch((err) => {
        console.log("WhatsApp notification failed but order was successful:", err)
      })

      // Try to send email (but don't fail the order if it doesn't work)
      await sendOrderConfirmationEmail()

      // Clear cart after successful order
      clearCart()

      // Redirect to thank you page after a short delay
      setTimeout(() => {
        router.push(`/thank-you?orderNumber=${orderNumber}`)
      }, 2000)
    } catch (err) {
      console.error("Order processing failed:", err)
      error("Order Failed", "There was an error processing your order. Please try again.")
    } finally {
      setIsProcessingOrder(false)
    }
  }

  const getPaymentMethodName = () => {
    switch (paymentMethod) {
      case "cod":
        return "Cash on Delivery (COD)"
      case "nayapay":
        return "NayaPay"
      case "card":
        return "Credit/Debit Card"
      default:
        return paymentMethod
    }
  }

  const handleCityChange = (cityName: string) => {
    setSelectedCity(cityName)
    const cityData = pakistanCitiesData.find((city) => city.name === cityName)
    if (cityData) {
      setSelectedState(cityData.state)
      setFormData({ ...formData, postalCode: cityData.postalCode })
    }
  }

  const handleNextStep = () => {
    if (step === 1) {
      if (validateShippingForm()) {
        setStep(2)
        setFormErrors([])
      }
    } else if (step === 2) {
      if (validatePaymentForm()) {
        setStep(3)
        setFormErrors([])
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 font-playfair">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= stepNumber ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 ${step > stepNumber ? "bg-pink-500" : "bg-gray-200"}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Form Errors */}
              {formErrors.length > 0 && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <h3 className="font-medium text-red-800">Please fix the following errors:</h3>
                  </div>
                  <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                    {formErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">Shipping Information</h2>

                  {/* Show free shipping notice */}
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 text-green-600">
                      <Check className="w-5 h-5" />
                      <span className="font-medium">Free shipping on all orders!</span>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${formErrors.some((e) => e.includes("First name")) ? "border-red-300" : "border-gray-300"
                            }`}
                          placeholder="Ahmed"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${formErrors.some((e) => e.includes("Last name")) ? "border-red-300" : "border-gray-300"
                            }`}
                          placeholder="Ali"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${formErrors.some((e) => e.includes("Email") || e.includes("valid email"))
                            ? "border-red-300"
                            : "border-gray-300"
                          }`}
                        placeholder="ahmed.ali@example.com"
                      />
                      <p className="text-xs text-gray-500 mt-1">Order confirmation will be sent to this email</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${formErrors.some((e) => e.includes("Phone")) ? "border-red-300" : "border-gray-300"
                          }`}
                        placeholder="+92 300 1234567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${formErrors.some((e) => e.includes("Address")) ? "border-red-300" : "border-gray-300"
                          }`}
                        placeholder="House # 123, Street 45, Block A"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                        <select
                          value={selectedCity}
                          onChange={(e) => handleCityChange(e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${formErrors.some((e) => e.includes("City")) ? "border-red-300" : "border-gray-300"
                            }`}
                        >
                          <option value="">Select City</option>
                          {pakistanCities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">State/Province *</label>
                        <select
                          value={selectedState}
                          onChange={(e) => setSelectedState(e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${formErrors.some((e) => e.includes("State")) ? "border-red-300" : "border-gray-300"
                            }`}
                        >
                          <option value="">Select State/Province</option>
                          {pakistanStates.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                        <input
                          type="text"
                          value={formData.postalCode}
                          readOnly
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                          placeholder="Auto-filled based on city"
                        />
                      </div>
                    </div>

                    <button type="button" onClick={handleNextStep} className="btn-primary w-full">
                      Continue to Payment
                    </button>
                  </form>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">Payment & Shipping</h2>

                  {/* Show free shipping notice */}
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 text-green-600">
                      <Check className="w-5 h-5" />
                      <span className="font-medium">Free shipping on all orders!</span>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Payment Method</h3>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="cod"
                          checked={paymentMethod === "cod"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-3 text-pink-500"
                        />
                        <div className="flex-1">
                          <span className="font-medium">Cash on Delivery (COD)</span>
                          <p className="text-sm text-gray-600">Pay when you receive your order</p>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="nayapay"
                          checked={paymentMethod === "nayapay"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-3 text-pink-500"
                        />
                        <div className="flex-1">
                          <span className="font-medium">NayaPay</span>
                          <p className="text-sm text-gray-600">Pay securely with NayaPay wallet</p>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="card"
                          checked={paymentMethod === "card"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-3 text-pink-500"
                        />
                        <div className="flex-1">
                          <span className="font-medium">Credit/Debit Card</span>
                          <p className="text-sm text-gray-600">Visa, Mastercard, American Express</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Card Details (show only when card is selected) */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                        <div className="relative">
                          <input
                            type="text"
                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="1234 5678 9012 3456"
                          />
                          <CreditCard
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={20}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="123"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="Ahmed Ali"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-2 mt-6">
                    <Lock className="text-green-500" size={16} />
                    <span className="text-sm text-gray-600">Your payment information is secure and encrypted</span>
                  </div>

                  <div className="flex flex-col space-y-4 mt-8 md:flex-row md:space-y-0 md:space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-secondary w-full md:flex-1"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="btn-primary w-full md:flex-1"
                    >
                      Review Order
                    </button>
                  </div>

                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">Review Your Order</h2>

                  {/* Order Number */}
                  <div className="mb-6 p-4 bg-pink-50 border border-pink-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Package className="w-5 h-5 text-pink-600" />
                      <span className="font-semibold text-gray-800">Order Number:</span>
                      <span className="font-bold text-pink-600">{orderNumber}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Shipping Address</h3>
                      <p className="text-gray-600">
                        {formData.firstName} {formData.lastName}
                        <br />
                        {formData.address}
                        <br />
                        {selectedCity && `${selectedCity}, `}
                        {selectedState && `${selectedState} `}
                        {formData.postalCode}
                        <br />
                        Pakistan
                        <br />
                        Phone: {formData.phone}
                        <br />
                        Email: {formData.email}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Payment Method</h3>
                      <p className="text-gray-600">{getPaymentMethodName()}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Items Ordered</h3>
                      <div className="space-y-3">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex justify-between items-center">
                            <div>
                              <span className="font-medium text-gray-800">{item.name}</span>
                              <span className="text-gray-600 ml-2">(Qty: {item.quantity})</span>
                            </div>
                            <span className="font-bold text-pink-500">{formatPrice(item.price * item.quantity)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-green-600">
                      <Truck size={20} />
                      <span>Estimated delivery: 3-5 business days (FREE shipping)</span>
                    </div>

                    <div className="flex flex-col space-y-4">
                      <button
                        type="button"
                        onClick={handlePlaceOrder}
                        disabled={isProcessingOrder}
                        className={`btn-primary w-full ${isProcessingOrder ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        {isProcessingOrder ? "Processing Order..." : "Place Order"}
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={isProcessingOrder}
                        className="btn-secondary w-full"
                      >
                        Back to Payment
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary - Only Cart Items */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-6 font-playfair">Order Summary</h2>

              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">
                  📦 {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart
                </p>
              </div>

              {/* Cart Items Only */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-800 truncate">{item.name}</h4>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      <div className="flex items-center space-x-1">
                        <p className="text-sm font-bold text-pink-500">{formatPrice(item.price * item.quantity)}</p>
                        <span className="text-xs bg-green-100 text-green-700 px-1 rounded">15% OFF</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-800">Total</span>
                    <span className="text-lg font-bold text-pink-500">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <div className="flex items-center space-x-2">
                  <Lock className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">Secure checkout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">Free shipping on all orders!</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Package className="text-blue-500" size={16} />
                  <span className="text-sm text-gray-600">Email confirmation included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
