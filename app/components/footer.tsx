import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url('/bg.jpg')`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">HyperSwap</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Authentic Asian cuisine in the heart of the city. Discover the true flavors of Asia through our carefully
              crafted dishes.
            </p>
            
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b border-dark-gold pb-2">Navigation</h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-gray-400 hover:text-dark-gold transition-colors duration-300 text-sm sm:text-base"
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="block text-gray-400 hover:text-dark-gold transition-colors duration-300 text-sm sm:text-base"
              >
                Menu
              </Link>
              <Link
                href="/reservation"
                className="block text-gray-400 hover:text-dark-gold transition-colors duration-300 text-sm sm:text-base"
              >
                Reservations
              </Link>
              
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b border-dark-gold pb-2">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm sm:text-base">
              <div className="flex items-start space-x-3">
                
                <div>
                  <p>Dam 1</p>
                  <p>Amsterdam, 1012 JS</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                
                <p>info@hyperswap.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b border-dark-gold pb-2">Hours</h4>
            <div className="space-y-2 text-gray-400 text-sm sm:text-base">
              <div className="flex justify-between">
                <span>Mon-Thu:</span>
                <span className="text-dark-gold">11AM - 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri-Sat:</span>
                <span className="text-dark-gold">11AM - 1AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-dark-gold">12PM - 10PM</span>
              </div>
            </div>

            {/* Newsletter */}
            
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p className="text-gray-400 text-sm text-center lg:text-left">
            © 2025 HyperSwap. All rights reserved. Crafted with passion for authentic Asian cuisine.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-end space-x-4 lg:space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-dark-gold transition-colors duration-300 text-sm">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-dark-gold transition-colors duration-300 text-sm">
              Cookies
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
