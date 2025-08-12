export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 font-playfair">Return & Exchange Policy</h1>
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Our Commitment</h2>
              <p className="text-gray-600">
                At MH Store, we want you to be completely satisfied with your purchase. If you're not happy with your
                order for any reason, we offer a hassle-free return and exchange policy to ensure your peace of mind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Return Period</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">30-Day Return Window</h3>
                <p className="text-green-700">
                  You have <strong>30 days</strong> from the date of delivery to return your items for a full refund or
                  exchange.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>The return period starts from the delivery date, not the purchase date</li>
                <li>Items must be returned in their original condition</li>
                <li>Original packaging and tags must be included</li>
                <li>All accessories and free gifts must be returned</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Eligible Items</h2>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Returnable Items</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Watches in original condition with tags and packaging</li>
                <li>Handbags that are unused and in original packaging</li>
                <li>Wireless earbuds in unopened original packaging</li>
                <li>Accessories in original condition with tags</li>
                <li>Items with manufacturing defects</li>
                <li>Damaged items received during shipping</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">❌ Non-Returnable Items</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Personalized or customized items</li>
                <li>Items damaged due to misuse or normal wear</li>
                <li>Items without original packaging or tags</li>
                <li>Sale items marked as "Final Sale"</li>
                <li>Gift cards and digital products</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Return Process</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-pink-50 rounded-lg">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Contact Us</h3>
                  <p className="text-sm text-gray-600">Email us or call to initiate your return request</p>
                </div>

                <div className="text-center p-6 bg-pink-50 rounded-lg">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Get Return Label</h3>
                  <p className="text-sm text-gray-600">We'll provide a prepaid return shipping label</p>
                </div>

                <div className="text-center p-6 bg-pink-50 rounded-lg">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Ship & Get Refund</h3>
                  <p className="text-sm text-gray-600">Send the item back and receive your refund</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 mb-2">📞 Contact Information</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>
                    <strong>Email:</strong> returns@mhstore.com
                  </li>
                  <li>
                    <strong>Phone:</strong> +92 300 1234567
                  </li>
                  <li>
                    <strong>WhatsApp:</strong> +92 300 1234567
                  </li>
                  <li>
                    <strong>Hours:</strong> Monday - Friday: 9 AM - 6 PM
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Exchanges</h2>
              <p className="text-gray-600 mb-4">
                We offer exchanges for the same item in a different size, color, or model (subject to availability).
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Exchange requests must be made within 30 days of delivery</li>
                <li>Original item must be returned in perfect condition</li>
                <li>If the new item costs more, you'll pay the difference</li>
                <li>If the new item costs less, we'll refund the difference</li>
                <li>Free exchange shipping for defective or incorrect items</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Refund Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">💳 Refund Methods</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Original payment method</li>
                    <li>• Bank transfer (for COD orders)</li>
                    <li>• Store credit (if requested)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">⏰ Processing Time</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 3-5 business days after we receive your return</li>
                    <li>• Bank transfers: 5-7 business days</li>
                    <li>• Credit/debit cards: 5-10 business days</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Shipping Costs</h2>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">✅ FREE Return Shipping</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• Defective or damaged items</li>
                    <li>• Wrong item sent by mistake</li>
                    <li>• Quality issues or manufacturing defects</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">💰 Customer Pays Return Shipping</h3>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• Change of mind returns</li>
                    <li>• Size or color exchanges</li>
                    <li>• Buyer's remorse</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Special Circumstances</h2>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Damaged or Defective Items</h3>
              <p className="text-gray-600 mb-4">
                If you receive a damaged or defective item, please contact us immediately with photos. We'll provide:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Immediate replacement or full refund</li>
                <li>Free return shipping</li>
                <li>Priority processing</li>
                <li>Compensation for any inconvenience</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Wrong Item Received</h3>
              <p className="text-gray-600 mb-4">If we sent you the wrong item, we'll take full responsibility:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Free return shipping for the wrong item</li>
                <li>Free shipping for the correct item</li>
                <li>Expedited processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Important Notes</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <ul className="text-red-700 space-y-2">
                  <li>• Items must be returned in original condition to qualify for full refund</li>
                  <li>• Custom or personalized items cannot be returned unless defective</li>
                  <li>• Return shipping insurance is recommended for valuable items</li>
                  <li>• We reserve the right to refuse returns that don't meet our policy</li>
                  <li>• Refunds exclude original shipping costs (unless item was defective)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Contact Customer Service</h2>
              <p className="text-gray-600 mb-4">
                Our customer service team is here to help with any questions about returns or exchanges:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">📧 Email Support</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>returns@mhstore.com</li>
                      <li>support@mhstore.com</li>
                      <li>Response within 24 hours</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">📞 Phone Support</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>+92 300 1234567</li>
                      <li>Monday - Friday: 9 AM - 6 PM</li>
                      <li>Saturday: 10 AM - 4 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
