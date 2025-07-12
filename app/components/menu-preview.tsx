import Link from "next/link"
import { getPopularDishes } from "../data/menu-data"

export default function MenuPreview() {
  const popularDishes = getPopularDishes().slice(0, 3)

  return (
    <section className="py-20 px-4 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Our <span className="text-dark-gold">Menu</span>
          </h2>
          <div className="w-20 h-1 bg-dark-gold mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover authentic Asian flavors in our carefully curated collection of dishes
          </p>
        </div>

        {/* Featured Dishes */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {popularDishes.map((dish) => (
            <Link key={dish.id} href={`/dish/${dish.id}`} className="group">
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] border border-gray-700 hover:border-dark-gold/50 h-[520px] flex flex-col">
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-dark-gold/30 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-dark-gold/30 rounded-br-3xl"></div>

                {/* Floating Accent Line */}
                <div className="absolute top-6 right-6 w-10 h-0.5 bg-gradient-to-r from-dark-gold to-transparent opacity-60"></div>

                {/* Dish Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-dark-gold/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {dish.category}
                  </div>

                  {/* Popular Badge */}
                  {dish.isPopular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                      ★ Popular
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between relative">
                  {/* Decorative Element */}
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-dark-gold rounded-full opacity-20"></div>

                  <div className="space-y-3">
                    {/* Title */}
                    <div className="relative">
                      <h3 className="text-xl font-bold text-white group-hover:text-dark-gold transition-colors duration-500 mb-2 leading-tight">
                        {dish.name}
                      </h3>
                      <div className="w-6 h-0.5 bg-dark-gold/60 group-hover:w-12 transition-all duration-500"></div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                      {dish.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-lg text-center border border-gray-700/50">
                        <div className="text-xs text-gray-400">Time</div>
                        <div className="text-xs font-semibold text-dark-gold">{dish.cookingTime}</div>
                      </div>
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-lg text-center border border-gray-700/50">
                        <div className="text-xs text-gray-400">Heat</div>
                        <div className="text-xs font-semibold text-dark-gold">{dish.spiceLevel}</div>
                      </div>
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-lg text-center border border-gray-700/50">
                        <div className="text-xs text-gray-400">Cal</div>
                        <div className="text-xs font-semibold text-dark-gold">{dish.calories}</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Area */}
                  <div className="mt-4 pt-3 border-t border-gray-700/50 group-hover:border-dark-gold/30 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-dark-gold font-semibold text-sm group-hover:text-yellow-400 transition-colors duration-300">
                        Learn More
                      </span>
                      <div className="w-6 h-6 bg-dark-gold/10 rounded-full flex items-center justify-center group-hover:bg-dark-gold/20 transition-colors duration-300">
                        <div className="w-3 h-0.5 bg-dark-gold"></div>
                        <div className="w-0.5 h-3 bg-dark-gold -ml-1.5 rotate-90"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/menu"
            className="inline-block px-8 py-4 bg-dark-gold text-black font-semibold tracking-wide uppercase transition-all duration-300 hover-bg-dark-gold hover:scale-105 hover:shadow-xl rounded-lg"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
