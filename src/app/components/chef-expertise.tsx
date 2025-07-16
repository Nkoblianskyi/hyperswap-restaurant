export default function ChefExpertise() {
  const chefs = [
    {
      specialty: "Sushi Master",
      experience: "20 years",
      description:
        "Expert in traditional Japanese cuisine techniques, specializing in knife skills, fish selection, and rice preparation. Trained in authentic Edo-style sushi methods.",
      image: "/sushi-m.jpg",
      skills: ["Knife Mastery", "Fish Selection", "Rice Preparation", "Traditional Techniques"],
    },
    {
      specialty: "Wok Master",
      experience: "15 years",
      description:
        "Specialist in high-heat cooking techniques, traditional Chinese stir-frying, and regional cuisine variations. Master of flame control and ingredient timing.",
      image: "/wok-m2.jpg",
      skills: ["High-Heat Cooking", "Stir-Frying", "Flame Control", "Regional Cuisine"],
    },
    {
      specialty: "Thai Cuisine Expert",
      experience: "18 years",
      description:
        "Master of authentic Thai flavors, spice balancing, and traditional cooking methods. Expert in curry paste preparation and regional Thai specialties.",
      image: "/thai-master.jpg",
      skills: ["Spice Balancing", "Curry Preparation", "Traditional Methods", "Regional Specialties"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-darker">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Our <span className="text-dark-gold">Masters</span>
          </h2>
          <div className="w-20 h-1 bg-dark-gold mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A team of experienced chefs from different corners of Asia, bringing authentic flavors and traditions
          </p>
        </div>

        {/* Chefs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="group relative bg-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-gray-800 hover:border-dark-gold"
            >
              {/* Chef Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={chef.image || "/placeholder.svg"}
                  alt={chef.specialty}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-dark-gold text-black px-3 py-1 rounded-full text-sm font-bold">
                  {chef.experience}
                </div>
              </div>

              {/* Chef Info */}
              <div className="p-6 space-y-4 h-64 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-dark-gold mb-2">{chef.specialty}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{chef.description}</p>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-1">
                    {chef.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-md text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience Bar */}
                <div className="pt-3 border-t border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Experience</span>
                    <span className="text-dark-gold font-bold">{chef.experience}</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { skill: "Traditional Techniques", level: "95%" },
            { skill: "Modern Presentation", level: "90%" },
            { skill: "Ingredient Quality", level: "100%" },
            { skill: "Innovation", level: "85%" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-700"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - Number.parseInt(item.level) / 100)}`}
                    className="text-dark-gold"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{item.level}</span>
                </div>
              </div>
              <h4 className="text-white font-semibold">{item.skill}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
