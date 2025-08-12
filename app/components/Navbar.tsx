"use client"
import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu, X } from "lucide-react"
import SearchModal from "./SearchModal"
import { useCart } from "../context/CartContext"
import CurrencySelector from "./CurrencySelector"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button and logo */}
          <div className="flex items-center">
            <button
              className="md:hidden p-2 text-gray-700 hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 ml-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm font-playfair">MH</span>
              </div>
              <span className="text-lg font-bold text-gray-800 font-playfair hidden sm:block">
                MH Store
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Categories
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <CurrencySelector />
            </div>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-700 hover:text-pink-500 transition-colors"
            >
              <Search size={20} />
            </button>
            <Link href="/cart" className="p-2 text-gray-700 hover:text-pink-500 transition-colors relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>
            <Link href="/auth/login" className="p-2 text-gray-700 hover:text-pink-500 transition-colors hidden sm:block">
              <User size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Slide-out menu */}
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 md:hidden">
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm font-playfair">MH</span>
                  </div>
                  <span className="text-lg font-bold text-gray-800 font-playfair">MH Store</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-pink-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 flex flex-col space-y-4">
                <Link
                  href="/"
                  className="py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/categories"
                  className="py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link
                  href="/contact"
                  className="py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Currency & User moved here */}
                <div className="pt-6 border-t border-gray-200 mt-4">
                  <div className="flex items-center justify-between px-2">
                    <CurrencySelector mobile />
                    <Link
                      href="/auth/login"
                      className="p-2 text-gray-700 hover:text-pink-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  )
}
