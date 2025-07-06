import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Travel React
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-blue-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-200 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-blue-200 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/tips" className="hover:text-blue-200 transition-colors">
                  Tips
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-200 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header