import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faStar, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import PackageCard from '../components/PackageCard';

// Sample data
const allPackages = [
  {
    id: 1,
    title: 'Thailand Adventure',
    location: 'Bangkok, Thailand',
    duration: '7 Days / 6 Nights',
    price: 799,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 20,
    category: 'family'
  },
  {
    id: 2,
    title: 'Paris Getaway',
    location: 'Paris, France',
    duration: '5 Days / 4 Nights',
    price: 1299,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 15,
    category: 'honeymoon'
  },
  {
    id: 3,
    title: 'Tokyo Explorer',
    location: 'Tokyo, Japan',
    duration: '8 Days / 7 Nights',
    price: 1499,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 10,
    category: 'group'
  },
  {
    id: 4,
    title: 'Bali Paradise',
    location: 'Bali, Indonesia',
    duration: '6 Days / 5 Nights',
    price: 899,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 25,
    category: 'honeymoon'
  },
  {
    id: 5,
    title: 'New York City Tour',
    location: 'New York, USA',
    duration: '4 Days / 3 Nights',
    price: 1199,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'weekend'
  },
  {
    id: 6,
    title: 'Dubai Luxury',
    location: 'Dubai, UAE',
    duration: '5 Days / 4 Nights',
    price: 1599,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 12,
    category: 'luxury'
  },
  {
    id: 7,
    title: 'Rome Historical Tour',
    location: 'Rome, Italy',
    duration: '6 Days / 5 Nights',
    price: 1299,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'regular'
  },
  {
    id: 8,
    title: 'Swiss Alps Adventure',
    location: 'Switzerland',
    duration: '7 Days / 6 Nights',
    price: 1899,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 8,
    category: 'adventure'
  }
];

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter packages based on selected category
  const filteredPackages = activeFilter === 'all' 
    ? allPackages 
    : allPackages.filter(pkg => pkg.category === activeFilter);

  // Filter packages based on price range
  const priceFilteredPackages = filteredPackages.filter(
    pkg => pkg.price >= priceRange[0] && pkg.price <= priceRange[1]
  );

  return (
    <div>
      {/* Banner */}
      <section className="bg-gray-800 text-white py-20" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Tour <span className="text-secondary">Packages</span></h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Explore our wide range of vacation packages with best prices
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full md:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Filters</h3>
                  <button 
                    className="md:hidden text-primary"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <FontAwesomeIcon icon={faFilter} />
                    {showFilters ? ' Hide' : ' Show'}
                  </button>
                </div>
                
                <div className={`${showFilters ? 'block' : 'hidden md:block'}`}>
                  <div className="mb-6">
                    <h4 className="font-bold mb-3">Package Type</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="all" 
                          name="category" 
                          checked={activeFilter === 'all'} 
                          onChange={() => setActiveFilter('all')}
                          className="mr-2"
                        />
                        <label htmlFor="all">All Packages</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="family" 
                          name="category" 
                          checked={activeFilter === 'family'} 
                          onChange={() => setActiveFilter('family')}
                          className="mr-2"
                        />
                        <label htmlFor="family">Family Package</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="honeymoon" 
                          name="category" 
                          checked={activeFilter === 'honeymoon'} 
                          onChange={() => setActiveFilter('honeymoon')}
                          className="mr-2"
                        />
                        <label htmlFor="honeymoon">Honeymoon Package</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="group" 
                          name="category" 
                          checked={activeFilter === 'group'} 
                          onChange={() => setActiveFilter('group')}
                          className="mr-2"
                        />
                        <label htmlFor="group">Group Package</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="weekend" 
                          name="category" 
                          checked={activeFilter === 'weekend'} 
                          onChange={() => setActiveFilter('weekend')}
                          className="mr-2"
                        />
                        <label htmlFor="weekend">Weekend Package</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="regular" 
                          name="category" 
                          checked={activeFilter === 'regular'} 
                          onChange={() => setActiveFilter('regular')}
                          className="mr-2"
                        />
                        <label htmlFor="regular">Regular Package</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-3">Price Range</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="2000" 
                      value={priceRange[1]} 
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3">Duration</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="duration1" className="mr-2" />
                        <label htmlFor="duration1">1-3 Days</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="duration2" className="mr-2" />
                        <label htmlFor="duration2">4-6 Days</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="duration3" className="mr-2" />
                        <label htmlFor="duration3">7-9 Days</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="duration4" className="mr-2" />
                        <label htmlFor="duration4">10+ Days</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hidden md:block">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Our travel experts are here to help you plan your perfect trip.
                </p>
                <a 
                  href="tel:+1-123-456-7890" 
                  className="block bg-primary text-white text-center py-2 px-4 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Call Us Now
                </a>
              </div>
            </div>
            
            {/* Packages Grid */}
            <div className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {activeFilter === 'all' ? 'All Packages' : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Packages`}
                </h2>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Sort by:</span>
                  <select className="border border-gray-300 rounded-md p-1">
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                    <option>Duration</option>
                  </select>
                </div>
              </div>
              
              {priceFilteredPackages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {priceFilteredPackages.map(pkg => (
                    <PackageCard key={pkg.id} package={pkg} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-bold mb-2">No packages found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters to find packages that match your preferences.
                  </p>
                  <button 
                    onClick={() => {
                      setActiveFilter('all');
                      setPriceRange([0, 2000]);
                    }}
                    className="bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
              
              {/* Pagination */}
              {priceFilteredPackages.length > 0 && (
                <div className="flex justify-center mt-10">
                  <nav className="inline-flex rounded-md shadow">
                    <a href="#" className="py-2 px-4 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50">
                      Previous
                    </a>
                    <a href="#" className="py-2 px-4 bg-primary text-white border border-primary">
                      1
                    </a>
                    <a href="#" className="py-2 px-4 bg-white border border-gray-300 hover:bg-gray-50">
                      2
                    </a>
                    <a href="#" className="py-2 px-4 bg-white border border-gray-300 hover:bg-gray-50">
                      3
                    </a>
                    <a href="#" className="py-2 px-4 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50">
                      Next
                    </a>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;