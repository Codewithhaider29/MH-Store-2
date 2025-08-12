"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products } from "@/data/products"

export default function EssentialAccessories() {
  const accessories = products.filter((product) => product.category === "accessories").slice(0, 4)

  return (
    <section className="section-padding bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
                Essential Accessories
              </h2>
              <p className="text-gray-600 text-base md:text-lg mt-1">
                Complete your look with our curated accessories
              </p>
            </div>
            <Link
              href="/categories?category=accessories"
              className="text-pink-600 text-base sm:text-lg font-medium flex items-center gap-1 mt-2 sm:mt-0"
            >
              View More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((accessory, index) => (
            <motion.div
              key={accessory.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Link
                href={`/product/${accessory.id}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover h-full flex flex-col transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={accessory.image || "/placeholder.svg"}
                    alt={accessory.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {accessory.status === "coming-soon" && (
                    <div className="absolute inset-0 bg-yellow-500 bg-opacity-75 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">COMING SOON</span>
                    </div>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 min-h-[3rem] line-clamp-2">
                    {accessory.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}