"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products } from "@/data/products"
import AddToCartButton from "../AddToCartButton"
import { useCurrency } from "@/context/CurrencyContext"

export default function LuxuryHandbags() {
  const handbags = products.filter((product) => product.category === "handbags").slice(0, 3)
  const { formatPrice } = useCurrency()

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with View More on right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 font-playfair">
                Luxury Handbags
              </h2>
              <p className="text-gray-600 text-lg mt-1">
                Sophisticated style for the modern woman
              </p>
            </div>
            <Link
              href="/categories?category=handbags"
              className="text-pink-600 text-base sm:text-lg font-medium flex items-center gap-1"
            >
              View More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {handbags.map((handbag, index) => (
            <motion.div
              key={handbag.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-lg overflow-hidden card-hover h-[580px] flex flex-col"
            >
              <div className="relative h-64 flex-shrink-0">
                <Image src={handbag.image || "/placeholder.svg"} alt={handbag.name} fill className="object-cover" />
                {handbag.status === "sold-out" && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-bold">SOLD OUT</span>
                  </div>
                )}
                {handbag.status === "coming-soon" && (
                  <div className="absolute inset-0 bg-yellow-500 bg-opacity-75 flex items-center justify-center">
                    <span className="text-white font-bold">COMING SOON</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 min-h-[3.5rem] line-clamp-2">{handbag.name}</h3>
                <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{handbag.description}</p>

                {/* Color Options */}
                <div className="flex space-x-2 mb-4">
                  <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></div>
                  <div className="w-6 h-6 bg-pink-300 rounded-full border-2 border-gray-300"></div>
                  <div className="w-6 h-6 bg-blue-300 rounded-full border-2 border-gray-300"></div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <p className="text-2xl font-bold text-pink-500">{formatPrice(handbag.price * 0.85)}</p>
                  <p className="text-sm text-gray-500 line-through">{formatPrice(handbag.price)}</p>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    15% OFF
                  </span>
                </div>
                <AddToCartButton product={handbag} className="btn-primary w-full text-center block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
