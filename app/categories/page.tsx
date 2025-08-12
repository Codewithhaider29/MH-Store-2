"use client"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Filter, Grid, List } from "lucide-react"
import { products } from "@/data/products"
import AddToCartButton from "../components/AddToCartButton"
import { useCurrency } from "@/context/CurrencyContext"

export default function CategoriesPage() {
  const searchParams = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)

  const categories = ["all", "watches", "handbags", "earbuds", "accessories"]

  const searchQuery = searchParams.get("search") || ""

  const { formatPrice } = useCurrency()

  useEffect(() => {
    let filtered = products

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filter by price range (using discounted price)
    filtered = filtered.filter((product) => {
      const discountedPrice = product.price * 0.85
      return discountedPrice >= priceRange[0] && discountedPrice <= priceRange[1]
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price * 0.85 - b.price * 0.85
        case "price-high":
          return b.price * 0.85 - a.price * 0.85
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    setFilteredProducts(filtered)
  }, [selectedCategory, priceRange, sortBy, searchQuery])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 font-playfair">
              {searchQuery
                ? `Search Results for "${searchQuery}"`
                : selectedCategory === "all"
                  ? "All Products"
                  : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </h1>
            <p className="text-gray-600">{filteredProducts.length} products found</p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* View Mode Toggle */}
            <div className={`flex bg-white rounded-lg shadow-sm border`}>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-l-lg ${viewMode === "grid" ? "bg-pink-500 text-white" : "text-gray-600"}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-r-lg ${viewMode === "list" ? "bg-pink-500 text-white" : "text-gray-600"}`}
              >
                <List size={20} />
              </button>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border hover:bg-pink-50 transition-colors"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2 text-pink-500"
                      />
                      <span className="capitalize">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Price Range (After 15% Discount)</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number.parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className="lg:w-3/4">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      {product.tag && (
                        <span className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {product.tag}
                        </span>
                      )}
                      {product.status === "sold-out" && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="text-white font-bold">SOLD OUT</span>
                        </div>
                      )}
                      {product.status === "coming-soon" && (
                        <div className="absolute inset-0 bg-yellow-500 bg-opacity-75 flex items-center justify-center">
                          <span className="text-white font-bold">COMING SOON</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                      <div className="flex items-center space-x-2 mb-4">
                        <p className="text-2xl font-bold text-pink-500">{formatPrice(product.price * 0.85)}</p>
                        <p className="text-sm text-gray-500 line-through">{formatPrice(product.price)}</p>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          15% OFF
                        </span>
                      </div>
                      <div className="space-y-2">
                        <Link href={`/product/${product.id}`} className="btn-secondary w-full text-center block">
                          View Details
                        </Link>
                        <AddToCartButton product={product} className="btn-primary w-full text-center block" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full h-64 md:h-full object-cover"
                        />
                        {product.status === "sold-out" && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white font-bold">SOLD OUT</span>
                          </div>
                        )}
                        {product.status === "coming-soon" && (
                          <div className="absolute inset-0 bg-yellow-500 bg-opacity-75 flex items-center justify-center">
                            <span className="text-white font-bold">COMING SOON</span>
                          </div>
                        )}
                      </div>
                      <div className="md:w-2/3 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                          <p className="text-gray-700 mb-4">{product.description}</p>
                          <div className="flex items-center space-x-4 mb-4">
                            <p className="text-3xl font-bold text-pink-600">{formatPrice(product.price * 0.85)}</p>
                            <p className="line-through text-gray-500">{formatPrice(product.price)}</p>
                            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-semibold">
                              15% OFF
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <Link
                            href={`/product/${product.id}`}
                            className="btn-secondary flex-grow text-center py-3 rounded-md font-semibold"
                          >
                            View Details
                          </Link>
                          <AddToCartButton product={product} className="btn-primary flex-grow text-center py-3 rounded-md font-semibold" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
