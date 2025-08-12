"use client"
import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState(products.slice(0, 6))

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults(products.slice(0, 6))
    } else {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setSearchResults(filtered.slice(0, 8))
    }
  }, [searchQuery])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center p-6 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-lg outline-none"
            autoFocus
          />
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-4">
          {searchResults.length > 0 ? (
            <div className="space-y-3">
              {searchResults.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={onClose}
                  className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={60}
                    height={60}
                    className="w-15 h-15 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-600 capitalize">{product.category}</p>
                    <p className="text-lg font-bold text-pink-500">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No products found for "{searchQuery}"</p>
            </div>
          )}
        </div>

        {searchQuery && searchResults.length > 0 && (
          <div className="border-t border-gray-200 p-4">
            <Link
              href={`/categories?search=${encodeURIComponent(searchQuery)}`}
              onClick={onClose}
              className="text-pink-500 hover:text-pink-600 font-medium"
            >
              View all results for "{searchQuery}"
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
