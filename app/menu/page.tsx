import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Link from "next/link"
import { menuData } from "../data/menu-data"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-deep-black text-white">
      {/* Hero Header with Background Image */}
      <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/placeholder.svg?height=800&width=1920')`,
          }}
        />
        <Navigation />
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">Our Menu</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our carefully curated selection of authentic Asian dishes
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {menuData.map((category) => (
          <div key={category.id} className="mb-16 lg:mb-20">
            {/* Category Header */}
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-dark-gold">{category.name}</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
              <div className="w-16 h-1 bg-dark-gold mx-auto mt-4" />
            </div>

            {/* Dishes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {category.dishes.map((dish) => (
                <Link key={dish.id} href={`/dish/${dish.id}`} className="group">
                  <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] border border-gray-700 hover:border-dark-gold/50 h-[580px] flex flex-col">
                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-dark-gold/30 rounded-tl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-dark-gold/30 rounded-br-3xl"></div>

                    {/* Floating Accent Line */}
                    <div className="absolute top-8 right-8 w-12 h-0.5 bg-gradient-to-r from-dark-gold to-transparent opacity-60"></div>

                    {/* Dish Image with Overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={dish.image || "/placeholder.svg"}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-dark-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Floating Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {dish.isPopular && (
                          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                            ★ Popular
                          </div>
                        )}
                        {dish.isVegetarian && (
                          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                            ◉ Vegetarian
                          </div>
                        )}
                        {dish.isSpicy && (
                          <div className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                            ▲ Spicy
                          </div>
                        )}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute bottom-4 right-4 bg-dark-gold/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {dish.category}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col justify-between relative">
                      {/* Decorative Element */}
                      <div className="absolute -top-3 left-6 w-6 h-6 bg-dark-gold rounded-full opacity-20"></div>

                      <div className="space-y-4">
                        {/* Title */}
                        <div className="relative">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-dark-gold transition-colors duration-500 mb-2 leading-tight">
                            {dish.name}
                          </h3>
                          <div className="w-8 h-0.5 bg-dark-gold/60 group-hover:w-16 transition-all duration-500"></div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
                          {dish.description}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-xl text-center border border-gray-700/50 group-hover:border-dark-gold/30 transition-colors duration-300">
                            <div className="w-6 h-6 mx-auto mb-1 bg-dark-gold/20 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-dark-gold rounded-full"></div>
                            </div>
                            <div className="text-xs text-gray-400 mb-1">Time</div>
                            <div className="text-xs font-semibold text-dark-gold">{dish.cookingTime}</div>
                          </div>

                          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-xl text-center border border-gray-700/50 group-hover:border-dark-gold/30 transition-colors duration-300">
                            <div className="w-6 h-6 mx-auto mb-1 bg-dark-gold/20 rounded-full flex items-center justify-center">
                              <div className="w-3 h-1 bg-dark-gold rounded-full"></div>
                            </div>
                            <div className="text-xs text-gray-400 mb-1">Heat</div>
                            <div className="text-xs font-semibold text-dark-gold">{dish.spiceLevel}</div>
                          </div>

                          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-xl text-center border border-gray-700/50 group-hover:border-dark-gold/30 transition-colors duration-300">
                            <div className="w-6 h-6 mx-auto mb-1 bg-dark-gold/20 rounded-full flex items-center justify-center">
                              <div className="w-2 h-3 bg-dark-gold rounded-sm"></div>
                            </div>
                            <div className="text-xs text-gray-400 mb-1">Cal</div>
                            <div className="text-xs font-semibold text-dark-gold">{dish.calories}</div>
                          </div>
                        </div>

                        {/* Ingredients Preview */}
                        <div className="bg-gradient-to-r from-gray-800/50 to-transparent p-3 rounded-lg border-l-2 border-dark-gold/30">
                          <p className="text-xs text-gray-400 mb-1 font-medium">Key ingredients:</p>
                          <p className="text-sm text-gray-300">
                            {dish.ingredients.slice(0, 3).join(" • ")}
                            {dish.ingredients.length > 3 && " • ..."}
                          </p>
                        </div>
                      </div>

                      {/* Action Area */}
                      <div className="mt-6 pt-4 border-t border-gray-700/50 group-hover:border-dark-gold/30 transition-colors duration-300">
                        <div className="flex items-center justify-between">
                          <span className="text-dark-gold font-semibold text-sm group-hover:text-yellow-400 transition-colors duration-300">
                            View Details
                          </span>
                          <div className="w-8 h-8 bg-dark-gold/10 rounded-full flex items-center justify-center group-hover:bg-dark-gold/20 transition-colors duration-300">
                            <div className="w-4 h-0.5 bg-dark-gold"></div>
                            <div className="w-0.5 h-4 bg-dark-gold -ml-2 rotate-90"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-dark-gold/20 transition-colors duration-500"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}
