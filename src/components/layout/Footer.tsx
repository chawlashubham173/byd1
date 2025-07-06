import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Travel React</h3>
            <p className="text-gray-300">
              Your trusted partner for amazing travel experiences around the world.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/packages" className="text-gray-300 hover:text-white">Packages</a></li>
              <li><a href="/tips" className="text-gray-300 hover:text-white">Travel Tips</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300">Email: info@travelreact.com</p>
            <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Travel React. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer