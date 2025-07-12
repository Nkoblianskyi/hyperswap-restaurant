import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-deep-black text-white">
      {/* Hero Header with Background Image */}
      <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/placeholder.svg?height=800&width=1920&text=elegant+asian+restaurant+interior')`,
          }}
        />
        <Navigation />
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">About HyperSwap</h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Where tradition meets innovation in authentic Asian cuisine
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Restaurant Story Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                  Our <span className="text-dark-gold">Story</span>
                </h2>
                <div className="w-20 h-1 bg-dark-gold mb-6" />
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                HyperSwap was born from a passion for authentic Asian cuisine and a vision to create a dining experience
                that transcends traditional boundaries. Founded in 2018, our restaurant has become a culinary
                destination where ancient recipes meet modern presentation.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                We believe that food is more than sustenance—it's a bridge between cultures, a celebration of tradition,
                and an art form that brings people together. Every dish tells a story, every ingredient is carefully
                selected, and every meal is crafted with respect for the culinary heritage of Asia.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700">
                  <div className="text-3xl font-bold text-dark-gold mb-2">6+</div>
                  <div className="text-gray-400">Years of Excellence</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700">
                  <div className="text-3xl font-bold text-dark-gold mb-2">10K+</div>
                  <div className="text-gray-400">Happy Guests</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=500&text=restaurant+story+image"
                  alt="Restaurant Story"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating Accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-dark-gold/30 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-dark-gold/20 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Our <span className="text-dark-gold">Philosophy</span>
            </h2>
            <div className="w-20 h-1 bg-dark-gold mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to preserving the authenticity of Asian culinary traditions while embracing innovation
              and sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl border border-gray-700 hover:border-dark-gold/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-dark-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-dark-gold rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-dark-gold mb-4">Authenticity</h3>
              <p className="text-gray-300 leading-relaxed">
                Every recipe is rooted in traditional techniques passed down through generations, ensuring authentic
                flavors in every bite.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl border border-gray-700 hover:border-dark-gold/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-dark-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-6 h-6 bg-dark-gold rounded-sm"></div>
              </div>
              <h3 className="text-2xl font-bold text-dark-gold mb-4">Quality</h3>
              <p className="text-gray-300 leading-relaxed">
                We source only the finest ingredients, working with trusted suppliers to bring you the highest quality
                dining experience.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl border border-gray-700 hover:border-dark-gold/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-dark-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-4 h-8 bg-dark-gold rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-dark-gold mb-4">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                While respecting tradition, we continuously innovate our presentation and techniques to create memorable
                experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Dining Hall Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                  Elegant <span className="text-dark-gold">Dining Hall</span>
                </h2>
                <div className="w-16 h-1 bg-dark-gold mb-4" />
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                Our main dining hall combines contemporary design with traditional Asian elements. Warm lighting,
                natural materials, and carefully curated artwork create an atmosphere of refined elegance.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Each table is positioned to provide intimacy while maintaining the vibrant energy of our open kitchen
                concept, where guests can witness the artistry of our chefs.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=700&text=elegant+dining+hall+interior"
                  alt="Dining Hall"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-dark-gold/40 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-dark-gold/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Garden Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=700&text=zen+garden+outdoor+dining"
                  alt="Garden Dining"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-10 h-10 border-2 border-dark-gold/40 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-dark-gold/30 rounded-full"></div>
              </div>
            </div>

            <div className="lg:col-span-1 order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                  Zen <span className="text-dark-gold">Garden</span>
                </h2>
                <div className="w-16 h-1 bg-dark-gold mb-4" />
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                Step into our tranquil garden space, where traditional Asian landscaping meets modern comfort. Bamboo
                groves, stone pathways, and gentle water features create a serene dining environment.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Perfect for intimate dinners or special celebrations, our garden offers a peaceful escape from the city
                while maintaining the sophisticated service you expect.
              </p>
            </div>
          </div>
        </section>

        {/* Kitchen Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                  Open <span className="text-dark-gold">Kitchen</span>
                </h2>
                <div className="w-16 h-1 bg-dark-gold mb-4" />
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                Our state-of-the-art open kitchen is the heart of HyperSwap. Watch our master chefs work their magic
                with precision and artistry, using traditional techniques alongside modern equipment.
              </p>

              <p className="text-gray-400 leading-relaxed">
                The open concept allows guests to witness the passion and skill that goes into every dish, creating a
                theatrical dining experience that engages all the senses.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=700&text=professional+asian+kitchen+chefs+cooking"
                  alt="Open Kitchen"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-14 h-14 border-2 border-dark-gold/40 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-dark-gold/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Awards & <span className="text-dark-gold">Recognition</span>
            </h2>
            <div className="w-20 h-1 bg-dark-gold mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700">
              <div className="w-12 h-12 bg-dark-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-dark-gold rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-dark-gold mb-2">Michelin Guide</h3>
              <p className="text-sm text-gray-400">Recommended 2023</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700">
              <div className="w-12 h-12 bg-dark-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-dark-gold rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-dark-gold mb-2">Best Asian</h3>
              <p className="text-sm text-gray-400">City Awards 2023</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700">
              <div className="w-12 h-12 bg-dark-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-dark-gold rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-dark-gold mb-2">Top 50</h3>
              <p className="text-sm text-gray-400">Restaurant List 2022</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700">
              <div className="w-12 h-12 bg-dark-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-dark-gold rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-dark-gold mb-2">Excellence</h3>
              <p className="text-sm text-gray-400">Service Award 2022</p>
            </div>
          </div>
        </section>

        {/* Visit Us CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-12 rounded-3xl border border-gray-700">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Experience <span className="text-dark-gold">HyperSwap</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable culinary journey through the authentic flavors of Asia. Reserve your table
              today and discover why HyperSwap is more than just a restaurant—it's a destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservation"
                className="px-8 py-4 bg-dark-gold text-black font-semibold rounded-lg hover-bg-dark-gold transition-colors duration-300"
              >
                Make a Reservation
              </a>
              <a
                href="/menu"
                className="px-8 py-4 border-2 border-dark-gold text-dark-gold font-semibold rounded-lg hover:bg-dark-gold hover:text-black transition-colors duration-300"
              >
                View Our Menu
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
