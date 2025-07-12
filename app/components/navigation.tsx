"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold text-white tracking-wider">
          <div className="flex items-center bg-white rounded-full p-2">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8">
          <Link href="/" className="text-white hover-dark-gold transition-colors duration-300 font-medium">
            Home
          </Link>
          <Link href="/menu" className="text-white hover-dark-gold transition-colors duration-300 font-medium">
            Menu
          </Link>
          <Link href="/reservation" className="text-white hover-dark-gold transition-colors duration-300 font-medium">
            Reservations
          </Link>
          <Link href="/about" className="text-white hover-dark-gold transition-colors duration-300 font-medium">
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white focus:outline-none">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div
              className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <div
              className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-deep-black bg-opacity-95 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 p-6">
            <Link href="/" className="text-white hover-dark-gold transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/menu" className="text-white hover-dark-gold transition-colors duration-300 font-medium">
              Menu
            </Link>
            <Link href="/reservation" className="text-white hover-dark-gold transition-colors duration-300 font-medium">
              Reservations
            </Link>
            <Link href="/about" className="text-white hover-dark-gold transition-colors duration-300 font-medium">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
