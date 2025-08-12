"use client"
import { useState } from "react"
import { MessageCircle, Phone, Mail, Clock, HelpCircle, Headphones } from "lucide-react"

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState("")

  const supportCategories = [
    "Order Issues",
    "Payment Problems",
    "Shipping Questions",
    "Product Information",
    "Returns & Exchanges",
    "Technical Support",
    "Account Help",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-playfair">Customer Support</h1>
          <p className="text-xl text-gray-600">We're here to help you with any questions or concerns</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
              <h2 className="text-xl font-bold text-gray-800 font-playfair">Get in Touch</h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-pink-50 transition-colors">
                  <MessageCircle className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Live Chat</h3>
                    <p className="text-sm text-gray-600">Available 24/7 for instant help</p>
                    <button className="text-pink-500 text-sm font-medium mt-1">Start Chat</button>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-pink-50 transition-colors">
                  <Phone className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone Support</h3>
                    <p className="text-sm text-gray-600">+92 300 1234567</p>
                    <p className="text-xs text-gray-500">Mon-Fri: 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-pink-50 transition-colors">
                  <Mail className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Support</h3>
                    <p className="text-sm text-gray-600">support@mhstore.com</p>
                    <p className="text-xs text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-pink-50 transition-colors">
                  <Clock className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-sm text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
                    <p className="text-sm text-gray-600">Saturday: 10 AM - 4 PM</p>
                    <p className="text-sm text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 font-playfair">Quick Help</h2>
              <div className="space-y-3">
                <a
                  href="/faq"
                  className="flex items-center space-x-3 text-gray-700 hover:text-pink-500 transition-colors"
                >
                  <HelpCircle className="w-5 h-5" />
                  <span>FAQ</span>
                </a>
                <a
                  href="/shipping"
                  className="flex items-center space-x-3 text-gray-700 hover:text-pink-500 transition-colors"
                >
                  <HelpCircle className="w-5 h-5" />
                  <span>Shipping Info</span>
                </a>
                <a
                  href="/size-guide"
                  className="flex items-center space-x-3 text-gray-700 hover:text-pink-500 transition-colors"
                >
                  <HelpCircle className="w-5 h-5" />
                  <span>Size Guide</span>
                </a>
              </div>
            </div>
          </div>

          {/* Support Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Headphones className="w-6 h-6 text-pink-500" />
                <h2 className="text-2xl font-bold text-gray-800 font-playfair">Submit a Support Request</h2>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order Number (if applicable)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="MH-2024-001234"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="">Select a category</option>
                    {supportCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Please provide as much detail as possible about your issue..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="priority" value="low" className="mr-2 text-pink-500" />
                      <span className="text-sm">Low</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priority"
                        value="medium"
                        className="mr-2 text-pink-500"
                        defaultChecked
                      />
                      <span className="text-sm">Medium</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="priority" value="high" className="mr-2 text-pink-500" />
                      <span className="text-sm">High</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="priority" value="urgent" className="mr-2 text-pink-500" />
                      <span className="text-sm">Urgent</span>
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Submit Support Request
                </button>
              </form>

              <div className="mt-6 p-4 bg-pink-50 border border-pink-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Response Time:</strong> We typically respond to support requests within 24 hours during
                  business days. For urgent issues, please call our support line directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Issues */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center font-playfair">Common Issues & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Order Not Received</h3>
              <p className="text-gray-600 text-sm mb-4">
                Check your tracking number and delivery address. Contact us if it's been longer than expected delivery
                time.
              </p>
              <a href="/shipping" className="text-pink-500 text-sm font-medium">
                View Shipping Info →
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Issues</h3>
              <p className="text-gray-600 text-sm mb-4">
                Ensure your payment method is valid and has sufficient funds. Try a different payment method if issues
                persist.
              </p>
              <a href="/faq" className="text-pink-500 text-sm font-medium">
                View FAQ →
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Wrong Size/Item</h3>
              <p className="text-gray-600 text-sm mb-4">
                We offer easy exchanges within 30 days. Check our size guide before ordering to ensure the perfect fit.
              </p>
              <a href="/size-guide" className="text-pink-500 text-sm font-medium">
                View Size Guide →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
