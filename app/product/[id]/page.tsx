"use client"
import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Star, Heart, Minus, Plus, Package, AlertTriangle, Clock } from "lucide-react"
import { products } from "@/data/products"
import AddToCartButton from "@/app/components/AddToCartButton"
import { useCurrency } from "@/context/CurrencyContext"

export default function ProductDetailPage() {
  const params = useParams()
  const product = products.find((p) => p.id === params.id)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { formatPrice } = useCurrency()

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    )
  }

  const images = [product.image, product.image, product.image] // Mock multiple images
  const discountedPrice = product.price * 0.85
  const savings = product.price - discountedPrice

  const getStatusBadge = () => {
    switch (product.status) {
      case "sold-out":
        return (
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <AlertTriangle className="w-4 h-4 mr-1" />
            Sold Out
          </span>
        )
      case "coming-soon":
        return (
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            Coming Soon
          </span>
        )
      default:
        return (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Package className="w-4 h-4 mr-1" />
            {product.stock} in stock
          </span>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <Image
                src={images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="flex space-x-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-pink-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4 flex items-center space-x-3">
              {product.tag && (
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">{product.tag}</span>
              )}
              {getStatusBadge()}
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-playfair">{product.name}</h1>

            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">(4.8) 124 reviews</span>
            </div>

            {/* Price with discount */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <p className="text-4xl font-bold text-pink-500">{formatPrice(discountedPrice)}</p>
                <p className="text-2xl text-gray-500 line-through">{formatPrice(product.price)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">15% OFF</span>
                <span className="text-green-600 font-medium">You save {formatPrice(savings)}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

            {/* Stock Information */}
            {product.status === "in-stock" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Package className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-medium">
                    {product.stock > 10 ? "In Stock" : `Only ${product.stock} left in stock!`}
                  </span>
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            {product.status === "in-stock" && (
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">Max: {product.stock}</span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <AddToCartButton product={product} className="btn-primary flex-1" />
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Heart size={20} />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Product Features */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium quality materials</li>
                <li>• Elegant and timeless design</li>
                <li>• Perfect for any occasion</li>
                <li>• 1-year warranty included</li>
                <li>• Free shipping on orders over $50</li>
                <li>• 15% discount already applied</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 font-playfair">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                  <div className="relative">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      width={300}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    {relatedProduct.status === "sold-out" && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-bold">SOLD OUT</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{relatedProduct.name}</h3>
                    <div className="flex items-center space-x-2 mb-4">
                      <p className="text-xl font-bold text-pink-500">{formatPrice(relatedProduct.price * 0.85)}</p>
                      <p className="text-sm text-gray-500 line-through">{formatPrice(relatedProduct.price)}</p>
                    </div>
                    <AddToCartButton product={relatedProduct} className="btn-primary w-full text-center text-sm" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
