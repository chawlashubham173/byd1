import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSearch, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <span className="text-sm">Lake Road, Suite 180 Farmington Hills, U.S.A.</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span className="text-sm">+101-1231-1231</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-3">
              <a href="#" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <div className="flex space-x-3">
              <Link to="/login" className="text-sm hover:text-blue-400">Sign In</Link>
              <Link to="/register" className="text-sm hover:text-blue-400">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Travel
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium hover:text-blue-600">Home</Link>
            <Link to="/packages" className="font-medium hover:text-blue-600">Packages</Link>
            <Link to="/hotels" className="font-medium hover:text-blue-600">Hotels</Link>
            <Link to="/about" className="font-medium hover:text-blue-600">About</Link>
            <Link to="/contact" className="font-medium hover:text-blue-600">Contact</Link>
          </nav>
          
          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-3">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="py-2 hover:text-blue-600">Home</Link>
              <Link to="/packages" className="py-2 hover:text-blue-600">Packages</Link>
              <Link to="/hotels" className="py-2 hover:text-blue-600">Hotels</Link>
              <Link to="/about" className="py-2 hover:text-blue-600">About</Link>
              <Link to="/contact" className="py-2 hover:text-blue-600">Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header