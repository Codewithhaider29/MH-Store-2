export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 font-playfair">Shipping Information</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          {/* Shipping Methods */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Shipping Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Standard Shipping</h3>
                <p className="text-gray-600 mb-2">5-7 business days</p>
                <p className="text-2xl font-bold text-green-500">FREE</p>
                <p className="text-sm text-gray-500 mt-2">Free on all orders</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Express Shipping</h3>
                <p className="text-gray-600 mb-2">2-3 business days</p>
                <p className="text-2xl font-bold text-green-500">FREE</p>
                <p className="text-sm text-gray-500 mt-2">Free on all orders</p>
              </div>
            </div>
          </section>

          {/* Shipping Codes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Shipping Codes</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Shipping</h3>
              <p className="text-gray-600 mb-4">
                Great news! We offer free shipping on all orders, no minimum purchase required!
              </p>
            </div>
          </section>

          {/* Delivery Areas */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Delivery Areas</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Pakistan (Nationwide)</h3>
                <p className="text-gray-600">
                  We deliver to all major cities including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, and more.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">International Shipping</h3>
                <p className="text-gray-600">
                  Currently available to UAE, Saudi Arabia, and UK. Contact us for other countries.
                </p>
              </div>
            </div>
          </section>

          {/* Processing Time */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Processing Time</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Orders are processed within 1-2 business days</li>
              <li>• You will receive a tracking number once your order ships</li>
              <li>• Processing time may be longer during peak seasons</li>
              <li>• Custom orders may take 3-5 business days to process</li>
            </ul>
          </section>

          {/* Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Order Tracking</h2>
            <p className="text-gray-600 mb-4">
              Once your order ships, you'll receive an email with tracking information. You can also track your order by
              logging into your account.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Tracking information may take 24-48 hours to update after shipping.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
