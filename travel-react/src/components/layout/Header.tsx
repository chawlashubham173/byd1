import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-gray-800 text-white py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-sm">
              <i className="fa fa-map-marker mr-1"></i>
              Lake Road, Suite 180 Farmington Hills, U.S.A
            </span>
            <span className="text-sm">
              <i className="fa fa-phone mr-1"></i>
              +101-1231-1231
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white hover:text-secondary"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <Link to="/login" className="text-sm hover:text-secondary">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
              Sign In
            </Link>
            <Link to="/register" className="text-sm hover:text-secondary">
              <FontAwesomeIcon icon={faUserPlus} className="mr-1" />
              Sign Up
            </Link>
            <Link to="/dashboard" className="text-sm hover:text-secondary">
              <FontAwesomeIcon icon={faUser} className="mr-1" />
              Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            <img src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Travel Logo" className="h-12" />
            The Travel
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-primary font-medium">Home</Link>
            <Link to="/packages" className="text-gray-800 hover:text-primary font-medium">Packages</Link>
            <Link to="/hotels" className="text-gray-800 hover:text-primary font-medium">Hotels</Link>
            <Link to="/about" className="text-gray-800 hover:text-primary font-medium">About</Link>
            <Link to="/contact" className="text-gray-800 hover:text-primary font-medium">Contact</Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <Link to="/" className="block py-2 text-gray-800 hover:text-primary">Home</Link>
            <Link to="/packages" className="block py-2 text-gray-800 hover:text-primary">Packages</Link>
            <Link to="/hotels" className="block py-2 text-gray-800 hover:text-primary">Hotels</Link>
            <Link to="/about" className="block py-2 text-gray-800 hover:text-primary">About</Link>
            <Link to="/contact" className="block py-2 text-gray-800 hover:text-primary">Contact</Link>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link to="/login" className="block py-2 text-gray-800 hover:text-primary">
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Sign In
              </Link>
              <Link to="/register" className="block py-2 text-gray-800 hover:text-primary">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Sign Up
              </Link>
              <Link to="/dashboard" className="block py-2 text-gray-800 hover:text-primary">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Profile
              </Link>
            </div>
          </nav>
        )}
      </div>

      {/* Search popup */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Search</h3>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Any location</option>
                    <option>New York</option>
                    <option>London</option>
                    <option>Paris</option>
                    <option>Tokyo</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Package</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Any Package</option>
                    <option>Family Package</option>
                    <option>Honeymoon Package</option>
                    <option>Group Package</option>
                    <option>Weekend Package</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check in</label>
                  <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check out</label>
                  <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
              </div>
              <button 
                type="submit" 
                className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;