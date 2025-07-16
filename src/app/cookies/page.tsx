import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function CookiesPage() {
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Understanding how we use cookies to enhance your experience
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-dark-gold">What are cookies?</h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit a website. They help us improve
              your browsing experience on our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-dark-gold">Types of cookies we use</h2>

            <div className="space-y-6">
              <div className="bg-darker p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-dark-gold">Essential cookies</h3>
                <p className="text-gray-300">
                  These cookies are necessary for the website to function and cannot be switched off. They are usually
                  set in response to your actions.
                </p>
              </div>

              <div className="bg-darker p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-dark-gold">Analytics cookies</h3>
                <p className="text-gray-300">
                  These cookies help us understand how visitors interact with the website by collecting and reporting
                  information anonymously.
                </p>
              </div>

              <div className="bg-darker p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-dark-gold">Functional cookies</h3>
                <p className="text-gray-300">
                  These cookies allow the website to remember your choices and provide enhanced, more personal features.
                </p>
              </div>

              <div className="bg-darker p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-dark-gold">Marketing cookies</h3>
                <p className="text-gray-300">
                  These cookies are used to track visitors across websites to display ads that are relevant and engaging
                  for individual users.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-dark-gold">Managing cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your
              computer and set most browsers to prevent them from being placed.
            </p>
            <p className="text-gray-300 leading-relaxed">
              However, if you do this, you may have to manually adjust some preferences every time you visit a site and
              some services and functionalities may not work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-dark-gold">Changes to cookie policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this cookie policy from time to time. Any changes will be posted on this page with an
              updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-dark-gold">Contact</h2>
            <p className="text-gray-300 leading-relaxed">If you have questions about our use of cookies, contact us:</p>
            <div className="mt-4 text-gray-300">
              <p>Email: info@hyperswap.com</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
