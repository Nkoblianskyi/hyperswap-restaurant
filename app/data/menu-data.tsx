export interface Dish {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: string
  ingredients: string[]
  allergens: string[]
  spiceLevel: string
  cookingTime: string
  calories: number
  isVegetarian: boolean
  isSpicy: boolean
  isPopular: boolean
}

export interface MenuCategory {
  id: string
  name: string
  description: string
  dishes: Dish[]
}

export const menuData: MenuCategory[] = [
  {
    id: "sushi-sashimi",
    name: "Sushi & Sashimi",
    description: "Fresh, premium fish prepared by our master sushi chefs",
    dishes: [
      {
        id: 1,
        name: "Dragon Roll",
        description: "Tempura shrimp, cucumber, topped with eel and avocado, drizzled with eel sauce",
        price: "$22",
        image: "/dragon-roll.jpg",
        category: "Sushi & Sashimi",
        ingredients: ["Tempura shrimp", "Cucumber", "Fresh eel", "Avocado", "Sushi rice", "Nori", "Eel sauce"],
        allergens: ["Shellfish", "Fish", "Gluten"],
        spiceLevel: "Mild",
        cookingTime: "15 minutes",
        calories: 320,
        isVegetarian: false,
        isSpicy: false,
        isPopular: true,
      },
      {
        id: 2,
        name: "Omakase Sashimi Set",
        description: "Chef's selection of 12 pieces of the finest seasonal fish",
        price: "$45",
        image: "/omakase.jpg",
        category: "Sushi & Sashimi",
        ingredients: ["Tuna", "Salmon", "Yellowtail", "Sea bass", "Mackerel", "Uni", "Wasabi", "Pickled ginger"],
        allergens: ["Fish"],
        spiceLevel: "None",
        cookingTime: "10 minutes",
        calories: 280,
        isVegetarian: false,
        isSpicy: false,
        isPopular: true,
      },
      {
        id: 3,
        name: "Vegetarian Rainbow Roll",
        description: "Cucumber, avocado, and pickled vegetables wrapped in colorful soy paper",
        price: "$16",
        image: "/rainbow.jpg",
        category: "Sushi & Sashimi",
        ingredients: ["Cucumber", "Avocado", "Pickled radish", "Carrot", "Soy paper", "Sushi rice"],
        allergens: ["Soy"],
        spiceLevel: "None",
        cookingTime: "12 minutes",
        calories: 180,
        isVegetarian: true,
        isSpicy: false,
        isPopular: false,
      },
    ],
  },
  {
    id: "ramen-noodles",
    name: "Ramen & Noodles",
    description: "Authentic Japanese ramen and Asian noodle dishes",
    dishes: [
      {
        id: 4,
        name: "Tonkotsu Ramen",
        description: "Rich pork bone broth simmered for 24 hours with chashu pork, soft egg, and bamboo shoots",
        price: "$18",
        image: "/ramen.jpg",
        category: "Ramen & Noodles",
        ingredients: [
          "Pork bone broth",
          "Ramen noodles",
          "Chashu pork",
          "Soft-boiled egg",
          "Bamboo shoots",
          "Green onions",
          "Nori",
          "Garlic oil",
        ],
        allergens: ["Gluten", "Eggs", "Soy"],
        spiceLevel: "Mild",
        cookingTime: "20 minutes",
        calories: 650,
        isVegetarian: false,
        isSpicy: false,
        isPopular: true,
      },
      {
        id: 5,
        name: "Spicy Miso Ramen",
        description: "Fiery miso broth with ground pork, corn, and a perfectly soft egg",
        price: "$19",
        image: "/miso.jpg",
        category: "Ramen & Noodles",
        ingredients: [
          "Miso broth",
          "Ground pork",
          "Ramen noodles",
          "Corn",
          "Soft egg",
          "Chili oil",
          "Bean sprouts",
          "Green onions",
        ],
        allergens: ["Gluten", "Eggs", "Soy"],
        spiceLevel: "Hot",
        cookingTime: "18 minutes",
        calories: 720,
        isVegetarian: false,
        isSpicy: true,
        isPopular: true,
      },
      {
        id: 6,
        name: "Dan Dan Noodles",
        description: "Sichuan-style noodles with spicy sesame sauce and minced pork",
        price: "$17",
        image: "/placeholder.svg?height=300&width=400",
        category: "Ramen & Noodles",
        ingredients: [
          "Wheat noodles",
          "Minced pork",
          "Sesame paste",
          "Chili oil",
          "Sichuan peppercorns",
          "Preserved vegetables",
          "Peanuts",
        ],
        allergens: ["Gluten", "Nuts", "Soy"],
        spiceLevel: "Very Hot",
        cookingTime: "15 minutes",
        calories: 580,
        isVegetarian: false,
        isSpicy: true,
        isPopular: false,
      },
    ],
  },
  {
    id: "thai-specialties",
    name: "Thai Specialties",
    description: "Authentic Thai dishes bursting with traditional flavors",
    dishes: [
      {
        id: 7,
        name: "Pad Thai with Prawns",
        description: "Classic stir-fried rice noodles with prawns, tofu, bean sprouts, and tamarind sauce",
        price: "$20",
        image: "/placeholder.svg?height=300&width=400",
        category: "Thai Specialties",
        ingredients: [
          "Rice noodles",
          "Large prawns",
          "Tofu",
          "Bean sprouts",
          "Eggs",
          "Tamarind sauce",
          "Fish sauce",
          "Peanuts",
          "Lime",
        ],
        allergens: ["Shellfish", "Eggs", "Fish", "Nuts"],
        spiceLevel: "Medium",
        cookingTime: "12 minutes",
        calories: 520,
        isVegetarian: false,
        isSpicy: true,
        isPopular: true,
      },
      {
        id: 8,
        name: "Green Curry with Chicken",
        description: "Aromatic green curry with tender chicken, Thai eggplant, and basil leaves",
        price: "$19",
        image: "/placeholder.svg?height=300&width=400",
        category: "Thai Specialties",
        ingredients: [
          "Chicken thigh",
          "Green curry paste",
          "Coconut milk",
          "Thai eggplant",
          "Thai basil",
          "Bamboo shoots",
          "Fish sauce",
          "Palm sugar",
        ],
        allergens: ["Fish"],
        spiceLevel: "Hot",
        cookingTime: "25 minutes",
        calories: 480,
        isVegetarian: false,
        isSpicy: true,
        isPopular: true,
      },
      {
        id: 9,
        name: "Som Tam (Papaya Salad)",
        description: "Fresh green papaya salad with tomatoes, green beans, and lime dressing",
        price: "$14",
        image: "/placeholder.svg?height=300&width=400",
        category: "Thai Specialties",
        ingredients: [
          "Green papaya",
          "Cherry tomatoes",
          "Green beans",
          "Dried shrimp",
          "Peanuts",
          "Lime juice",
          "Fish sauce",
          "Palm sugar",
          "Chili",
        ],
        allergens: ["Shellfish", "Fish", "Nuts"],
        spiceLevel: "Hot",
        cookingTime: "8 minutes",
        calories: 180,
        isVegetarian: false,
        isSpicy: true,
        isPopular: false,
      },
    ],
  },
  {
    id: "chinese-classics",
    name: "Chinese Classics",
    description: "Traditional Chinese dishes prepared with authentic techniques",
    dishes: [
      {
        id: 10,
        name: "Peking Duck",
        description: "Crispy duck served with thin pancakes, cucumber, scallions, and hoisin sauce",
        price: "$32",
        image: "/placeholder.svg?height=300&width=400",
        category: "Chinese Classics",
        ingredients: ["Whole duck", "Thin pancakes", "Cucumber", "Scallions", "Hoisin sauce", "Five-spice powder"],
        allergens: ["Gluten", "Soy"],
        spiceLevel: "Mild",
        cookingTime: "45 minutes",
        calories: 680,
        isVegetarian: false,
        isSpicy: false,
        isPopular: true,
      },
      {
        id: 11,
        name: "Mapo Tofu",
        description: "Silky tofu in spicy Sichuan sauce with minced pork and fermented black beans",
        price: "$16",
        image: "/placeholder.svg?height=300&width=400",
        category: "Chinese Classics",
        ingredients: [
          "Silky tofu",
          "Ground pork",
          "Fermented black beans",
          "Sichuan peppercorns",
          "Chili bean paste",
          "Garlic",
          "Ginger",
          "Scallions",
        ],
        allergens: ["Soy"],
        spiceLevel: "Very Hot",
        cookingTime: "15 minutes",
        calories: 320,
        isVegetarian: false,
        isSpicy: true,
        isPopular: true,
      },
      {
        id: 12,
        name: "Xiaolongbao (Soup Dumplings)",
        description: "Delicate steamed dumplings filled with pork and savory broth",
        price: "$18",
        image: "/placeholder.svg?height=300&width=400",
        category: "Chinese Classics",
        ingredients: [
          "Pork filling",
          "Pork gelatin",
          "Dumpling wrapper",
          "Ginger",
          "Soy sauce",
          "Shaoxing wine",
          "Scallions",
        ],
        allergens: ["Gluten", "Soy"],
        spiceLevel: "None",
        cookingTime: "20 minutes",
        calories: 280,
        isVegetarian: false,
        isSpicy: false,
        isPopular: true,
      },
    ],
  },
]

export const getDishById = (id: number): Dish | undefined => {
  for (const category of menuData) {
    const dish = category.dishes.find((dish) => dish.id === id)
    if (dish) return dish
  }
  return undefined
}

export const getAllDishes = (): Dish[] => {
  return menuData.flatMap((category) => category.dishes)
}

export const getPopularDishes = (): Dish[] => {
  return getAllDishes().filter((dish) => dish.isPopular)
}
