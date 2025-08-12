"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"
import AddToCartButton from "../AddToCartButton"
import { useCurrency } from "@/context/CurrencyContext"

export default function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4)
  const { formatPrice } = useCurrency()

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-playfair">Featured Products</h2>
          <p className="text-gray-600 text-base md:text-lg">Handpicked items just for you</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <Link href={`/product/${product.id}`} className="flex flex-col flex-1">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {product.tag && (
                      <span className="absolute top-3 left-3 bg-pink-500 text-white px-2.5 py-0.5 rounded-full text-xs font-medium">
                        {product.tag}
                      </span>
                    )}
                    {product.status === "sold-out" && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">SOLD OUT</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-3">
                        <p className="text-xl font-bold text-pink-500">{formatPrice(product.price * 0.85)}</p>
                        <p className="text-sm text-gray-500 line-through">{formatPrice(product.price)}</p>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          15% OFF
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="px-4 pb-4">
                  <AddToCartButton
                    product={product}
                    className="w-full py-2.5 text-sm font-medium text-white rounded-md bg-pink-500 hover:bg-pink-600 transition-colors duration-200"
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