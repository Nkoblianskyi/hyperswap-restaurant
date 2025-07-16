export default function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-white">
                Our <span className="text-dark-gold">Design</span>
              </h2>
              <div className="w-20 h-1 bg-dark-gold mb-6" />
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              HyperSwap combines traditional Asian culinary traditions with modern elegant design. Our space is created
              so that every guest feels part of a unique culinary journey.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              From minimalist interior to carefully selected lighting - every detail is designed to create an
              unforgettable atmosphere where taste meets art.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-dark-gold mb-2">15+</div>
                <div className="text-gray-400">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dark-gold mb-2">50+</div>
                <div className="text-gray-400">Unique Dishes</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/design.jpg"
                alt="Restaurant Interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-dark-gold p-6 rounded-lg shadow-xl">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm">Guest Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
