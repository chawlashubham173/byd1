import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto">
        {/* Special offers section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-primary bg-opacity-10 p-6 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-secondary text-dark font-bold py-1 px-3 rounded-bl-lg">
              30% OFF
            </div>
            <h3 className="text-xl font-bold mb-2">Eiffel Tower, Rome</h3>
            <p className="mb-4 text-gray-300">Valid only for 24th Dec</p>
            <Link to="/booking" className="inline-block bg-secondary text-dark py-2 px-4 rounded-md hover:bg-opacity-90 transition-all">
              Book Now
            </Link>
          </div>
          
          <div className="bg-secondary bg-opacity-10 p-6 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white font-bold py-1 px-3 rounded-bl-lg">
              42% OFF
            </div>
            <h3 className="text-xl font-bold mb-2">Colosseum, Burj Al Arab</h3>
            <p className="mb-4 text-gray-300">Valid only for 18th Nov</p>
            <Link to="/booking" className="inline-block bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all">
              Book Now
            </Link>
          </div>
          
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
              <span className="text-secondary">Most Popular</span> Vacations
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/tour-details" className="text-gray-300 hover:text-white">Angkor Wat</Link>
              <Link to="/tour-details" className="text-gray-300 hover:text-white">Buckingham Palace</Link>
              <Link to="/tour-details" className="text-gray-300 hover:text-white">High Line</Link>
              <Link to="/tour-details" className="text-gray-300 hover:text-white">Sagrada Família</Link>
              <Link to="/tour-details" className="text-gray-300 hover:text-white">Statue of Liberty</Link>
              <Link to="/tour-details" className="text-gray-300 hover:text-white">Notre Dame de Paris</Link>
              <Link to="/tour-details" className="text-gray-300 hover:text-white">Taj Mahal</Link>
              <Link to="/tour-details" className="text-gray-300 hover:text-white">The Louvre</Link>
            </div>
          </div>
        </div>
        
        {/* Main footer section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">
              <span className="text-primary">Holiday</span> Tour & Travels
            </h4>
            <p className="text-gray-400 mb-4">
              World's leading tour and travels booking website, over 30,000 packages worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">
              <span className="text-primary">Address</span> & Contact Info
            </h4>
            <p className="text-gray-400 mb-2">
              28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A. Landmark: Next To Airport
            </p>
            <p className="text-gray-400">
              <span className="font-bold">Phone: </span>
              <span className="text-secondary">+101-1231-1231</span>
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">
              <span className="text-primary">SUPPORT</span> & HELP
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
              <Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
              <Link to="/testimonials" className="text-gray-400 hover:text-white">Testimonials</Link>
              <Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link>
              <Link to="/tips" className="text-gray-400 hover:text-white">Travel Tips</Link>
              <Link to="/discount" className="text-gray-400 hover:text-white">Discount</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">
              <span className="text-primary">Follow</span> with us
            </h4>
            <p className="text-gray-400 mb-4">
              Join thousands of satisfied travelers for exclusive deals and updates.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="bg-red-400 text-white p-2 rounded-full hover:bg-red-500">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>Copyrights © 2025 The Travel. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;