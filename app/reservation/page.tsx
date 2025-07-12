"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Reservation submitted:", formData)
    alert("Thank you! Your reservation has been received. We will contact you shortly.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
              Table Reservation
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Reserve your table for an unforgettable dining experience
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <div className="bg-darker p-6 sm:p-8 rounded-2xl shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-dark-gold">Reserve a Table</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-dark-gold focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-dark-gold focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-dark-gold focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-dark-gold focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-semibold mb-2">
                    Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-dark-gold focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select time</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-semibold mb-2">
                    Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-dark-gold focus:outline-none transition-colors duration-300"
                  >
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5 guests</option>
                    <option value="6">6 guests</option>
                    <option value="7">7 guests</option>
                    <option value="8">8+ guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="specialRequests" className="block text-sm font-semibold mb-2">
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={4}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Allergies, dietary restrictions, celebrations..."
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-dark-gold focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-dark-gold text-black py-3 sm:py-4 rounded-lg font-semibold text-lg hover-bg-dark-gold transition-colors duration-300"
              >
                Reserve Table
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-darker p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-dark-gold">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 border-2 border-dark-gold rounded mt-1"></div>
                  <div>
                    <p className="font-semibold">Address:</p>
                    <p>123 Main Street, New York</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 border-2 border-dark-gold rounded"></div>
                  <div>
                    <p className="font-semibold">Phone:</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 border-2 border-dark-gold rounded"></div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p>info@hyperswap.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-darker p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-dark-gold">Hours</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday - Thursday:</span>
                  <span className="text-dark-gold">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Friday - Saturday:</span>
                  <span className="text-dark-gold">11:00 AM - 1:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday:</span>
                  <span className="text-dark-gold">12:00 PM - 10:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-darker p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-dark-gold">Important Information</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>• Reservations are confirmed within 2 hours</p>
                <p>• Tables are reserved for 2 hours</p>
                <p>• Cancellations possible 24 hours before visit</p>
                <p>• For groups of 8+ please contact us directly</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
