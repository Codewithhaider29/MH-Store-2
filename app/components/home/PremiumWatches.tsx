"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products } from "@/data/products"
import AddToCartButton from "../AddToCartButton"
import { useCurrency } from "@/context/CurrencyContext"

export default function PremiumWatches() {
  const watches = products.filter((product) => product.category === "watches").slice(0, 2)
  const { formatPrice } = useCurrency()

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
                Premium Watches
              </h2>
              <p className="text-gray-600 text-base md:text-lg mt-1">
                Timeless elegance for every occasion
              </p>
            </div>
            <Link
              href="/categories?category=watches"
              className="text-pink-600 text-base sm:text-lg font-medium flex items-center gap-1 mt-2 sm:mt-0"
            >
              View More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {watches.map((watch, index) => (
            <motion.div
              key={watch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image Section */}
                <div className="md:w-1/2 relative aspect-square">
                  <Image
                    src={watch.image || "/placeholder.svg"}
                    alt={watch.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {watch.status === "sold-out" && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">SOLD OUT</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 font-playfair">
                    {watch.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{watch.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <p className="text-2xl font-bold text-pink-500">
                      {formatPrice(watch.price * 0.85)}
                    </p>
                    <p className="text-lg text-gray-500 line-through">
                      {formatPrice(watch.price)}
                    </p>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                      15% OFF
                    </span>
                  </div>

                  <AddToCartButton 
                    product={watch} 
                    className="w-full md:w-auto px-6 py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-lg transition-colors duration-200"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}