export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-playfair">Size Guide</h1>
          <p className="text-xl text-gray-600">Find the perfect fit for your MH Store products</p>
        </div>

        <div className="space-y-12">
          {/* Watches */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">Watches</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-pink-50">
                    <th className="border border-gray-300 px-4 py-3 text-left">Size</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Wrist Circumference</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Case Diameter</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Recommended For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Small</td>
                    <td className="border border-gray-300 px-4 py-3">14-16 cm (5.5-6.3 inches)</td>
                    <td className="border border-gray-300 px-4 py-3">32-36 mm</td>
                    <td className="border border-gray-300 px-4 py-3">Petite wrists, elegant look</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Medium</td>
                    <td className="border border-gray-300 px-4 py-3">16-18 cm (6.3-7.1 inches)</td>
                    <td className="border border-gray-300 px-4 py-3">36-40 mm</td>
                    <td className="border border-gray-300 px-4 py-3">Average wrists, versatile</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Large</td>
                    <td className="border border-gray-300 px-4 py-3">18-20 cm (7.1-7.9 inches)</td>
                    <td className="border border-gray-300 px-4 py-3">40-44 mm</td>
                    <td className="border border-gray-300 px-4 py-3">Larger wrists, bold statement</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-pink-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>How to measure:</strong> Use a flexible measuring tape around your wrist where you normally wear
                a watch. Add 1-2 cm for comfort.
              </p>
            </div>
          </section>

          {/* Handbags */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">Handbags</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Small Bags</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Width: 15-20 cm</li>
                  <li>• Height: 10-15 cm</li>
                  <li>• Depth: 5-8 cm</li>
                  <li>• Perfect for: Evening events, essentials only</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Medium Bags</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Width: 25-35 cm</li>
                  <li>• Height: 20-25 cm</li>
                  <li>• Depth: 10-15 cm</li>
                  <li>• Perfect for: Daily use, work, shopping</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Large Bags</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Width: 35-45 cm</li>
                  <li>• Height: 25-35 cm</li>
                  <li>• Depth: 15-20 cm</li>
                  <li>• Perfect for: Travel, laptop, everything</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Earbuds */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">Earbuds</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Ear Tip Sizes</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <span className="font-medium">Small (S)</span>
                    <span className="text-gray-600">10-12 mm diameter</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <span className="font-medium">Medium (M)</span>
                    <span className="text-gray-600">12-14 mm diameter</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <span className="font-medium">Large (L)</span>
                    <span className="text-gray-600">14-16 mm diameter</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Fit Guide</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Start with medium size (included)</li>
                  <li>• If loose or falls out, try smaller size</li>
                  <li>• If uncomfortable or tight, try larger size</li>
                  <li>• Proper fit should feel secure but comfortable</li>
                  <li>• Good seal improves sound quality</li>
                </ul>
              </div>
            </div>
          </section>

          {/* General Tips */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">General Sizing Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Before You Buy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Check product dimensions in description</li>
                  <li>• Read customer reviews for fit feedback</li>
                  <li>• Contact us if you're unsure about sizing</li>
                  <li>• Consider your personal preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Need Help?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Use our live chat for instant help</li>
                  <li>• Email us photos for personalized advice</li>
                  <li>• Check our return policy for exchanges</li>
                  <li>• Visit our FAQ for common questions</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
