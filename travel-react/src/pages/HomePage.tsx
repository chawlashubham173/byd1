import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendarAlt, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore The World</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">Discover amazing places at exclusive deals</p>
          
          {/* Search Box */}
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Destination</label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                    <option>Any location</option>
                    <option>Paris</option>
                    <option>New York</option>
                    <option>London</option>
                    <option>Tokyo</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Check In</label>
                <div className="relative">
                  <input type="date" className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Travelers</label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>2 Adults, 2 Children</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                </div>
              </div>
              
              <div className="flex items-end">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                  <FontAwesomeIcon icon={faSearch} className="mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Destinations */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
            <p className="text-gray-600">Explore our most popular travel destinations</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Destination Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Paris"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                  <h3 className="text-white text-xl font-bold">Paris, France</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">3 days, 2 nights</span>
                  <span className="text-blue-600 font-bold">$599</span>
                </div>
                <p className="text-gray-600 mb-4">Experience the city of love with our exclusive package including Eiffel Tower visit.</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            </div>
            
            {/* Destination Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Bali"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                  <h3 className="text-white text-xl font-bold">Bali, Indonesia</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">5 days, 4 nights</span>
                  <span className="text-blue-600 font-bold">$799</span>
                </div>
                <p className="text-gray-600 mb-4">Relax on pristine beaches and explore ancient temples in this tropical paradise.</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            </div>
            
            {/* Destination Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="New York"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                  <h3 className="text-white text-xl font-bold">New York, USA</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">4 days, 3 nights</span>
                  <span className="text-blue-600 font-bold">$899</span>
                </div>
                <p className="text-gray-600 mb-4">Discover the Big Apple with our comprehensive city tour package.</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 font-bold py-2 px-6 rounded transition duration-300">
              View All Destinations
            </button>
          </div>
        </div>
      </section>
      
      {/* Special Offers */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Special Offers</h2>
            <p className="text-gray-600">Grab these limited-time deals before they're gone</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Offer 1 */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-lg text-white p-6 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                <div className="text-3xl font-bold mb-2">30% OFF</div>
                <h3 className="text-xl font-bold mb-2">Eiffel Tower, Paris</h3>
                <p className="mb-4">Valid only for 24th Dec</p>
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 px-4 rounded">
                  Book Now
                </button>
              </div>
              <div className="md:w-1/3">
                <div className="text-6xl font-bold">30%</div>
                <div className="text-xl">DISCOUNT</div>
              </div>
            </div>
            
            {/* Offer 2 */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg overflow-hidden shadow-lg text-white p-6 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                <div className="text-3xl font-bold mb-2">42% OFF</div>
                <h3 className="text-xl font-bold mb-2">Colosseum, Rome</h3>
                <p className="mb-4">Valid only for 18th Nov</p>
                <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-2 px-4 rounded">
                  Book Now
                </button>
              </div>
              <div className="md:w-1/3">
                <div className="text-6xl font-bold">42%</div>
                <div className="text-xl">DISCOUNT</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Travel Tips */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tips Before Travel</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-2">Bring copies of your passport</h3>
                <p className="text-gray-600">Keep digital and physical copies of your passport in case of emergency.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-2">Register with your embassy</h3>
                <p className="text-gray-600">Register your travel plans with your country's embassy for safety.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Always have local cash</h3>
                <p className="text-gray-600">Keep some local currency for places that don't accept cards.</p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Customer Testimonials</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="John William" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold">John William</h4>
                    <p className="text-gray-500">Illinois, United States of America</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The travel package exceeded all my expectations. The guides were knowledgeable, 
                  accommodations were excellent, and the itinerary was perfectly balanced. 
                  I'll definitely book with them again for my next adventure!"
                </p>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Arrangement & Helps</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img src="https://via.placeholder.com/80" alt="Location Manager" className="mx-auto mb-2" />
                  <p className="font-medium">Location Manager</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img src="https://via.placeholder.com/80" alt="Private Guide" className="mx-auto mb-2" />
                  <p className="font-medium">Private Guide</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img src="https://via.placeholder.com/80" alt="Arrangements" className="mx-auto mb-2" />
                  <p className="font-medium">Arrangements</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img src="https://via.placeholder.com/80" alt="Events & Activities" className="mx-auto mb-2" />
                  <p className="font-medium">Events & Activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage