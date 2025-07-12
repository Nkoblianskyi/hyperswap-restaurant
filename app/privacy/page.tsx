import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-deep-black text-white">
      {/* Hero Header with Background Image */}
      <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url('/bg.jpg')`,
          }}
        />
        <Navigation />
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-lg sm:text-xl text-gray-300">Your privacy and data protection are our priority</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-dark-gold">1. Information Collection</h2>
              <p className="text-gray-300 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, make a
                reservation, subscribe to our newsletter, or contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-dark-gold">2. Use of Information</h2>
              <p className="text-gray-300 leading-relaxed">
                We use the collected information to provide, maintain, and improve our services, process reservations,
                send communications, and ensure security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-dark-gold">3. Information Disclosure</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not sell, trade, or transfer your personal information to third parties without your consent,
                except as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-dark-gold">4. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-dark-gold">5. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed">
                You have the right to access, correct, delete, or restrict processing of your personal data. To exercise
                these rights, contact us at info@hyperswap.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-dark-gold">6. Policy Changes</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-dark-gold">7. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this privacy policy, contact us:
              </p>
              <div className="mt-4 text-gray-300">
                <p>Email: info@hyperswap.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Main Street, New York, NY 10001</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
