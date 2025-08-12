"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "Watches", image: "/placeholder.svg?height=200&width=200", slug: "watches" },
  { name: "Handbags", image: "/placeholder.svg?height=200&width=200", slug: "handbags" },
  { name: "Earbuds", image: "/placeholder.svg?height=200&width=200", slug: "earbuds" },
  { name: "Accessories", image: "/placeholder.svg?height=200&width=200", slug: "accessories" },
]

export default function ShopByCategory() {
  return (
    <section className="section-padding bg-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-playfair">Shop by Category</h2>
          <p className="text-gray-600 text-lg">Find exactly what you're looking for</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <Link href={`/categories?category=${category.slug}`} className="group block">
                <div className="relative w-60 h-60 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-pink-500 text-2xl font-bold tracking-wide uppercase opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    {category.name}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
