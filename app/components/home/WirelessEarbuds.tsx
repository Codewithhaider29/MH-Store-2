'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'

export default function WirelessEarbuds() {
  const earbuds = products
    .filter((product) => product.category === 'earbuds')
    .slice(0, 3)

  return (
    <section className="section-padding bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
                Wireless Earbuds
              </h2>
              <p className="text-gray-600 text-base md:text-lg mt-1">
                Premium sound quality meets elegant design
              </p>
            </div>
            <Link
              href="/categories?category=earbuds"
              className="text-pink-600 text-base sm:text-lg font-medium flex items-center gap-1 mt-2 sm:mt-0"
            >
              View More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {earbuds.map((earbud, index) => (
            <motion.div
              key={earbud.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Link href={`/product/${earbud.id}`} className="block h-full">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-transform duration-300 hover:scale-[1.02]">
                  {/* Image */}
                  <div className="relative aspect-square w-full flex-shrink-0">
                    <Image
                      src={earbud.image || '/placeholder.svg'}
                      alt={earbud.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {earbud.status === 'sold-out' && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">SOLD OUT</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {earbud.name}
                    </h3>
                    <p className="text-gray-600 flex-1">
                      {earbud.description}
                    </p>
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
