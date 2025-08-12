"use client"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in original packaging. Items must be returned in the same condition as received.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days. Processing time is 1-2 business days.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we currently ship to UAE, Saudi Arabia, and UK. We're working on expanding to more countries. Contact us for specific country availability.",
  },
  {
    question: "How can I track my order?",
    answer:
      "You'll receive a tracking number via email once your order ships. You can also track your order by logging into your account on our website.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash on Delivery (COD), NayaPay, and all major credit/debit cards including Visa, Mastercard, and American Express.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer:
      "You can cancel or modify your order within 2 hours of placing it. After that, please contact our customer service team for assistance.",
  },
  {
    question: "Are your products authentic?",
    answer: "Yes, all our products are 100% authentic. We source directly from authorized dealers and manufacturers.",
  },
  {
    question: "Do you offer warranty on products?",
    answer:
      "Yes, most of our products come with manufacturer warranty. Warranty period varies by product - typically 1-2 years for watches and electronics.",
  },
  {
    question: "How do I use the free shipping code?",
    answer:
      "Enter the code '2901' during checkout in the shipping code field to get free shipping on any order, regardless of the order amount.",
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "If you receive a damaged item, please contact us immediately with photos. We'll arrange for a replacement or full refund.",
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-playfair">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about MH Store</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-pink-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-pink-500 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Support
              </a>
              <a href="mailto:support@mhstore.com" className="btn-secondary">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
