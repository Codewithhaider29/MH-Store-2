export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 font-playfair">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">1. Information We Collect</h2>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-600 mb-4">
                When you make a purchase or create an account, we collect information such as:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Order history and preferences</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Browser type and version</li>
                <li>Device information and IP address</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Provide customer support</li>
                <li>Improve our products and services</li>
                <li>Send promotional emails (with your consent)</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Shipping companies, payment processors, email service providers
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure storage of personal information</li>
                <li>Regular security assessments</li>
                <li>Access controls and employee training</li>
                <li>PCI DSS compliance for payment processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Restrict processing of your information</li>
                <li>Data portability</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">6. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Remember your preferences and shopping cart</li>
                <li>Analyze website traffic and usage</li>
                <li>Personalize your experience</li>
                <li>Provide targeted advertisements</li>
              </ul>
              <p className="text-gray-600 mt-4">You can control cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">7. Children's Privacy</h2>
              <p className="text-gray-600">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">8. International Transfers</h2>
              <p className="text-gray-600">
                Your information may be transferred to and processed in countries other than Pakistan. We ensure
                appropriate safeguards are in place to protect your information in accordance with this privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">9. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">10. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Email:</strong> privacy@mhstore.com
                  </li>
                  <li>
                    <strong>Phone:</strong> +92 300 1234567
                  </li>
                  <li>
                    <strong>Address:</strong> 123 Fashion Avenue, Karachi, Pakistan
                  </li>
                  <li>
                    <strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
