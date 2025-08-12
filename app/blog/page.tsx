"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { blogPosts, categories } from "@/data/blogPosts"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6 font-playfair">MH Store Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest trends, style tips, and insights from the world of luxury fashion and accessories.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-white border border-gray-200 rounded-full hover:bg-pink-50 hover:border-pink-300 transition-colors text-gray-700 hover:text-pink-600"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <Link href={`/blog/${blogPosts[0].id}`}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-bold text-sm">
                        {blogPosts[0].author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{blogPosts[0].author}</p>
                      <p className="text-xs text-gray-500">
                        {blogPosts[0].date} • {blogPosts[0].readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-playfair line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                        <span className="text-pink-600 font-bold text-xs">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">{post.readTime}</p>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-6 md:p-8 text-center text-white mx-4 sm:mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-playfair">Stay Updated</h2>
          <p className="text-pink-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Subscribe to our blog newsletter and never miss our latest style tips, product updates, and exclusive offers.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm sm:text-base"
            />
            <button className="bg-white text-pink-500 px-6 py-3 rounded-lg sm:rounded-r-lg sm:rounded-l-none font-semibold hover:bg-pink-50 transition-colors text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
