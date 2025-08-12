"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6 font-playfair">About MH Store</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where elegance meets excellence. We curate the finest collection of watches, handbags, and accessories for
            the discerning individual.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-playfair">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, MH Store began as a passion project to bring together the world's most elegant and
              sophisticated accessories. Our founders, Maria and Hassan, shared a vision of creating a curated shopping
              experience that celebrates both timeless design and contemporary style.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small boutique has grown into a trusted destination for luxury accessories, serving
              customers who appreciate quality, craftsmanship, and attention to detail.
            </p>
            <p className="text-gray-600">
              Today, we continue to handpick each item in our collection, ensuring that every product meets our high
              standards of excellence and elegance.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="MH Store founders"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center font-playfair">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">Q</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                We believe in offering only the highest quality products that stand the test of time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Elegance</h3>
              <p className="text-gray-600">Every piece in our collection embodies sophistication and timeless style.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Service</h3>
              <p className="text-gray-600">We're committed to providing exceptional customer service and support.</p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center font-playfair">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Maria Hassan", role: "Co-Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
              {
                name: "Hassan Ali",
                role: "Co-Founder & Creative Director",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Johnson",
                role: "Head of Customer Experience",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-pink-500 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4 font-playfair">Join Our Journey</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Be part of our story and discover the perfect accessories that reflect your unique style and personality.
          </p>
          <button className="bg-white text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
            Shop Our Collection
          </button>
        </motion.div>
      </div>
    </div>
  )
}
