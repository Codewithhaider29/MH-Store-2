"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Company Info - spans full width on mobile, 2 columns on sm */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm font-playfair">MH</span>
              </div>
              <span className="text-xl font-bold font-playfair">MH Store</span>
            </div>
            <p className="text-gray-300 text-sm">
              Discover elegance in every detail with our premium collection of watches, handbags, and accessories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-pink-400 transition-colors text-sm block">Home</Link></li>
              <li><Link href="/categories" className="text-gray-300 hover:text-pink-400 transition-colors text-sm block">Categories</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-pink-400 transition-colors text-sm block">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-pink-400 transition-colors text-sm block">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-pink-400 transition-colors text-sm block">Blog</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-300 hover:text-pink-400 transition-colors text-sm block">FAQ</Link></li>
              <li><Link href="/shipping" className="text-gray-300 hover:text-pink-400 transition-colors text-sm block">Shipping Info</Link></li>
              <li><Link href="/return-policy" className="text-gray-300 hover:text-pink-400 transition-colors text-sm block">Return Policy</Link></li>
              <li><Link href="/size-guide" className="text-gray-300 hover:text-pink-400 transition-colors text-sm block">Size Guide</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-pink-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@mhstore.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-pink-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-pink-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Fashion St, Style City, SC 12345</span>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription - Now on the right side */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1 lg:col-start-5">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white text-sm rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-pink-400"
                required
              />
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium px-4 py-2 rounded transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 MH Store. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/shipping-policy" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Shipping Policy
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}