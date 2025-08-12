"use client"
import { motion } from "framer-motion"
import type React from "react"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate subscription process (no EmailJS)
    setTimeout(() => {
      setIsSubscribed(true)
      setEmail("")
      setIsLoading(false)
    }, 1500)
  }

  return (
    <section className="section-padding bg-gradient-to-r from-pink-500 to-pink-600 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {!isSubscribed ? (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 font-playfair">Stay Connected with MH</h2>
              <p className="text-pink-100 text-base sm:text-lg mb-6 sm:mb-8">
                Subscribe to our newsletter for exclusive offers, new arrivals, and style updates
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 rounded-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-pink-300 disabled:bg-gray-100"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-white text-pink-500 px-6 py-3 rounded-lg sm:rounded-l-none font-semibold hover:bg-pink-50 transition-colors disabled:bg-gray-200 disabled:text-gray-500"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              <p className="text-pink-100 text-xs sm:text-sm mt-3 sm:mt-4">Get 10% off your first order when you subscribe!</p>
            </>
          ) : (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 font-playfair">Thank You!</h2>
              <p className="text-pink-100 text-base sm:text-lg mb-6 sm:mb-8">
                You've successfully subscribed to our newsletter.
              </p>
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">✉️</div>
              <p className="text-pink-100 text-xs sm:text-sm">You'll receive exclusive offers and updates soon!</p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}