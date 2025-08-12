export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 font-playfair">Shipping Policy</h1>
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-green-800 mb-4 font-playfair">
                  🎉 FREE Shipping on All Orders!
                </h2>
                <p className="text-green-700 text-lg">
                  We're excited to offer <strong>completely FREE shipping</strong> on all orders, regardless of order
                  amount or location within Pakistan!
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Shipping Options</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">📦 Standard Shipping</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>
                      • <strong>Cost:</strong> FREE
                    </li>
                    <li>
                      • <strong>Delivery:</strong> 5-7 business days
                    </li>
                    <li>
                      • <strong>Tracking:</strong> Included
                    </li>
                    <li>
                      • <strong>Coverage:</strong> All Pakistan
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">🚀 Express Shipping</h3>
                  <ul className="text-purple-700 space-y-2">
                    <li>
                      • <strong>Cost:</strong> FREE
                    </li>
                    <li>
                      • <strong>Delivery:</strong> 2-3 business days
                    </li>
                    <li>
                      • <strong>Tracking:</strong> Real-time updates
                    </li>
                    <li>
                      • <strong>Coverage:</strong> Major cities
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Processing Time</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">1-2</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Business Days</h3>
                    <p className="text-sm text-gray-600">Order processing and quality check</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">24</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Hours</h3>
                    <p className="text-sm text-gray-600">Tracking information available</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">48</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Hours</h3>
                    <p className="text-sm text-gray-600">Maximum processing for complex orders</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Processing Schedule:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <strong>Standard Orders:</strong> 1-2 business days
                  </li>
                  <li>
                    <strong>Custom Orders:</strong> 3-5 business days
                  </li>
                  <li>
                    <strong>Bulk Orders:</strong> 5-7 business days
                  </li>
                  <li>
                    <strong>Holiday Periods:</strong> May take additional 1-2 days
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Delivery Areas</h2>

              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">🇵🇰 Pakistan (Nationwide Coverage)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Major Cities (2-3 days):</h4>
                      <ul className="text-green-600 space-y-1 text-sm">
                        <li>• Karachi, Lahore, Islamabad</li>
                        <li>• Rawalpindi, Faisalabad, Multan</li>
                        <li>• Peshawar, Quetta, Hyderabad</li>
                        <li>• Gujranwala, Sialkot, Bahawalpur</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Other Cities (5-7 days):</h4>
                      <ul className="text-green-600 space-y-1 text-sm">
                        <li>• All other Pakistani cities</li>
                        <li>• Remote areas and villages</li>
                        <li>• Northern areas (weather permitting)</li>
                        <li>• Coastal regions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">🌍 International Shipping</h3>
                  <p className="text-blue-700 mb-4">We currently ship to select international destinations:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">🇦🇪 UAE</h4>
                      <ul className="text-blue-600 space-y-1 text-sm">
                        <li>• 7-10 business days</li>
                        <li>• FREE shipping</li>
                        <li>• Customs included</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">🇸🇦 Saudi Arabia</h4>
                      <ul className="text-blue-600 space-y-1 text-sm">
                        <li>• 7-12 business days</li>
                        <li>• FREE shipping</li>
                        <li>• Customs included</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">🇬🇧 United Kingdom</h4>
                      <ul className="text-blue-600 space-y-1 text-sm">
                        <li>• 10-15 business days</li>
                        <li>• FREE shipping</li>
                        <li>• Customs may apply</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-blue-600 text-sm mt-4">
                    <strong>Note:</strong> Contact us for shipping to other countries
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Order Tracking</h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">📱 Track Your Order</h3>
                <p className="text-yellow-700">
                  Every order comes with free tracking! You'll receive tracking information via email and SMS once your
                  order ships.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">How to Track:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Check your email for tracking number</li>
                    <li>Visit our tracking page</li>
                    <li>SMS updates on delivery status</li>
                    <li>Contact customer service for updates</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Tracking Updates:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Order confirmed and processing</li>
                    <li>Package prepared for shipment</li>
                    <li>In transit to your city</li>
                    <li>Out for delivery</li>
                    <li>Delivered successfully</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Delivery Information</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">🏠 Home Delivery</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Delivery to your doorstep</li>
                    <li>• No signature required for orders under Rs. 50,000</li>
                    <li>• Signature required for high-value items</li>
                    <li>• Safe place delivery available (with instructions)</li>
                    <li>• 2 delivery attempts before return to depot</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">⏰ Delivery Times</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Standard Hours:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Monday - Friday: 9 AM - 6 PM</li>
                        <li>• Saturday: 10 AM - 4 PM</li>
                        <li>• Sunday: No delivery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Holiday Schedule:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• No delivery on public holidays</li>
                        <li>• Extended delivery during Eid</li>
                        <li>• Special arrangements for Ramadan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Packaging & Security</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-800 mb-3">📦 Secure Packaging</h3>
                  <ul className="text-purple-700 space-y-2">
                    <li>• Bubble wrap for fragile items</li>
                    <li>• Branded boxes for premium look</li>
                    <li>• Tamper-evident seals</li>
                    <li>• Weather-resistant materials</li>
                    <li>• Eco-friendly packaging options</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-800 mb-3">🔒 Package Security</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Insurance on all shipments</li>
                    <li>• GPS tracking for high-value items</li>
                    <li>• Photo confirmation of delivery</li>
                    <li>• Signature required for expensive orders</li>
                    <li>• 24/7 customer support</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Special Circumstances</h2>

              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-semibold text-red-800 mb-3">⚠️ Delivery Issues</h3>
                  <p className="text-red-700 mb-3">If you experience any delivery problems, we're here to help:</p>
                  <ul className="text-red-600 space-y-2">
                    <li>• Lost packages: Full refund or replacement</li>
                    <li>• Damaged in transit: Free replacement</li>
                    <li>• Delivery delays: Compensation available</li>
                    <li>• Wrong address: Reshipping at our cost</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="font-semibold text-orange-800 mb-3">🌦️ Weather Delays</h3>
                  <ul className="text-orange-700 space-y-2">
                    <li>• Monsoon season may cause 1-2 day delays</li>
                    <li>• Northern areas affected by snow in winter</li>
                    <li>• Extreme weather conditions may suspend service</li>
                    <li>• Alternative arrangements made when possible</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Contact Shipping Support</h2>
              <p className="text-gray-600 mb-4">
                Have questions about shipping? Our dedicated shipping team is here to help:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">📧 Email Support</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>shipping@mhstore.com</li>
                      <li>tracking@mhstore.com</li>
                      <li>Response within 4 hours</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">📞 Phone & WhatsApp</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>+92 300 1234567</li>
                      <li>Available 9 AM - 8 PM daily</li>
                      <li>WhatsApp support available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-pink-50 border border-pink-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-pink-800 mb-4 font-playfair">Our Shipping Promise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🚚</div>
                  <h3 className="font-semibold text-pink-700 mb-2">FREE Shipping</h3>
                  <p className="text-pink-600 text-sm">Always free, no minimum order</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📦</div>
                  <h3 className="font-semibold text-pink-700 mb-2">Secure Packaging</h3>
                  <p className="text-pink-600 text-sm">Your items arrive safely</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-semibold text-pink-700 mb-2">On-Time Delivery</h3>
                  <p className="text-pink-600 text-sm">Reliable delivery schedule</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
