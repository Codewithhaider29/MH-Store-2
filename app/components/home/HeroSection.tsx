"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-pink-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 font-playfair"
        >
          Elegance in Every Detail
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 font-light"
        >
          Discover premium watches, handbags, and accessories
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/categories" className="btn-primary text-lg px-8 py-4">
            Shop Now
          </Link>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
    </section>
  )
}
