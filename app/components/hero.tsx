"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Navigation from "./navigation"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-deep-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(10, 10, 10, 0.8)), url('/placeholder.svg?height=1080&width=1920')`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-dark-gold rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-500 rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-yellow-600 rounded-full animate-bounce opacity-30" />
      </div>

      <Navigation />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Restaurant Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 tracking-wider">
            <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
              HYPER
            </span>
            <span className="text-white ml-2 sm:ml-4">SWAP</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 font-light tracking-wide px-4">
            Authentic Asian Cuisine in the Heart of the City
          </p>

          {/* Decorative Line */}
          <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-6 sm:mb-8" />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link
              href="/reservation"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-dark-gold text-black font-semibold tracking-wide uppercase transition-all duration-300 hover-bg-dark-gold hover:scale-105 hover:shadow-2xl rounded-lg"
            >
              <span className="relative z-10">Reserve a Table</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </Link>

            <Link
              href="/menu"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 rounded-lg"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
