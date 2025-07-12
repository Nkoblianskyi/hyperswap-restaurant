import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import Link from "next/link"
import { getDishById } from "../../data/menu-data"
import { notFound } from "next/navigation"

export default function DishPage({ params }: { params: { id: string } }) {
  const dishId = Number.parseInt(params.id)
  const dish = getDishById(dishId)

  if (!dish) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-deep-black text-white">
      {/* Hero Header with Background Image */}
      <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/dragon-roll.jpg'+')}+asian+dish+on+elegant+table')`,
          }}
        />
        <Navigation />
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">{dish.name}</h1>
            <p className="text-lg sm:text-xl text-gray-300">{dish.category}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/menu"
            className="text-dark-gold hover-dark-gold transition-colors duration-300 text-sm sm:text-base"
          >
            ← Back to Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative">
            <img
              src={dish.image || "/placeholder.svg"}
              alt={dish.name}
              className="w-full h-72 sm:h-80 lg:h-96 object-cover rounded-lg shadow-xl"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="bg-dark-gold text-black px-3 py-1 rounded-full text-sm font-bold">{dish.category}</div>
              {dish.isPopular && (
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">Popular</div>
              )}
              {dish.isVegetarian && (
                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Vegetarian</div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <div className="mb-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{dish.name}</h1>
              </div>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">{dish.description}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-darker p-4 rounded-lg text-center">
                <div className="w-8 h-8 bg-dark-gold rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-black rounded-full"></div>
                </div>
                <div className="text-sm text-gray-400">Cooking Time</div>
                <div className="font-semibold text-dark-gold">{dish.cookingTime}</div>
              </div>
              <div className="bg-darker p-4 rounded-lg text-center">
                <div className="w-8 h-8 bg-dark-gold rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-4 bg-black rounded-sm"></div>
                </div>
                <div className="text-sm text-gray-400">Spice Level</div>
                <div className="font-semibold text-dark-gold">{dish.spiceLevel}</div>
              </div>
              <div className="bg-darker p-4 rounded-lg text-center">
                <div className="w-8 h-8 bg-dark-gold rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-4 h-2 bg-black rounded-sm"></div>
                </div>
                <div className="text-sm text-gray-400">Calories</div>
                <div className="font-semibold text-dark-gold">{dish.calories}</div>
              </div>
              <div className="bg-darker p-4 rounded-lg text-center">
                <div className="w-8 h-8 bg-dark-gold rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-black rounded"></div>
                </div>
                <div className="text-sm text-gray-400">Type</div>
                <div className="font-semibold text-dark-gold">{dish.isSpicy ? "Spicy" : "Mild"}</div>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-dark-gold">Ingredients</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {dish.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-dark-gold rounded-full" />
                    <span className="text-gray-300 text-sm sm:text-base">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Allergens */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-dark-gold">Allergens</h3>
              <div className="flex flex-wrap gap-2">
                {dish.allergens.map((allergen, index) => (
                  <span key={index} className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {allergen}
                  </span>
                ))}
              </div>
            </div>

            {/* Dietary Info */}
            <div className="bg-darker p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-dark-gold">Dietary Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Vegetarian:</span>
                  <span className={dish.isVegetarian ? "text-green-400" : "text-red-400"}>
                    {dish.isVegetarian ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Spicy:</span>
                  <span className={dish.isSpicy ? "text-orange-400" : "text-gray-400"}>
                    {dish.isSpicy ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Calories:</span>
                  <span className="text-dark-gold">{dish.calories} kcal</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Link href='/reservation'>
                <button className="w-full bg-dark-gold text-black py-3 sm:py-4 rounded-lg font-semibold text-lg hover-bg-dark-gold transition-colors duration-300">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
