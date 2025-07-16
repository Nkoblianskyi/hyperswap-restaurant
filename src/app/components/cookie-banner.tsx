"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm border-t border-gray-700 p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-white text-sm">
            We use cookies to improve your experience on our website.
            <Link href="/cookies" className="text-dark-gold hover-dark-gold underline ml-1">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-dark-gold text-white rounded hover-bg-dark-gold transition-colors duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
