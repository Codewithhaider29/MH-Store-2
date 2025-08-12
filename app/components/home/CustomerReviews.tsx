"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    review:
      "Absolutely love my new handbag! The quality is exceptional and the design is so elegant. Will definitely shop here again.",
    product: "Premium Leather Handbag",
    verified: true,
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    review:
      "The watch I purchased exceeded my expectations. Great craftsmanship and fast shipping. Highly recommended!",
    product: "Elegant Rose Gold Watch",
    verified: true,
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emily Davis",
    image: "/placeholder.svg?height=80&width=80",
    rating: 4,
    review: "Beautiful accessories and excellent customer service. The earbuds have amazing sound quality too!",
    product: "Wireless Pro Earbuds",
    verified: true,
    date: "3 weeks ago",
  },
]

export default function CustomerReviews() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-playfair">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">Real reviews from verified customers</p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">4.8 out of 5 based on 1,247 reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-pink-200" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gray-300" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 mb-6 leading-relaxed">"{review.review}"</p>

              {/* Product info */}
              <div className="mb-4 p-3 bg-pink-50 rounded-lg">
                <p className="text-sm text-pink-700 font-medium">Purchased: {review.product}</p>
              </div>

              {/* Customer info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-800 text-sm">{review.name}</h4>
                      {review.verified && (
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-pink-500 mb-2">1,247+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-pink-500 mb-2">4.8/5</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-pink-500 mb-2">98%</div>
            <p className="text-gray-600">Would Recommend</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
