import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGooglePlus, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="text-xl font-bold mb-4"><span className="text-blue-400">Holiday</span> Tour & Travels</h4>
            <p className="text-gray-400">World's leading tour and travels Booking website, Over 30,000 packages worldwide.</p>
          </div>
          
          {/* Column 2 */}
          <div>
            <h4 className="text-xl font-bold mb-4"><span className="text-blue-400">Address</span> & Contact Info</h4>
            <p className="text-gray-400">28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A. Landmark: Next To Airport</p>
            <p className="mt-2">
              <span className="font-bold">Phone: </span>
              <span className="text-blue-400">+101-1231-1231</span>
            </p>
          </div>
          
          {/* Column 3 */}
          <div>
            <h4 className="text-xl font-bold mb-4"><span className="text-blue-400">SUPPORT</span> & HELP</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
              <Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
              <Link to="/feedback" className="text-gray-400 hover:text-white">Feedbacks</Link>
              <Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link>
              <Link to="/use-cases" className="text-gray-400 hover:text-white">Use Cases</Link>
              <Link to="/advertise" className="text-gray-400 hover:text-white">Advertise us</Link>
              <Link to="/discount" className="text-gray-400 hover:text-white">Discount</Link>
              <Link to="/vacations" className="text-gray-400 hover:text-white">Vacations</Link>
              <Link to="/branding" className="text-gray-400 hover:text-white">Branding Offers</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
            </div>
          </div>
          
          {/* Column 4 */}
          <div>
            <h4 className="text-xl font-bold mb-4"><span className="text-blue-400">Follow</span> with us</h4>
            <p className="text-gray-400 mb-4">Join thousands of other travelers. Follow us for travel tips and inspiration.</p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <FontAwesomeIcon icon={faGooglePlus} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-colors">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container">
          <p className="text-center text-gray-500">Copyrights © 2025 Company Name. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer