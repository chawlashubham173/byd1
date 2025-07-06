import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faUsers, faStar, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import SearchForm from '../components/SearchForm';
import PackageCard from '../components/PackageCard';
import TestimonialCard from '../components/TestimonialCard';
import TravelTip from '../components/TravelTip';

// Sample data
const popularPackages = [
  {
    id: 1,
    title: 'Thailand Adventure',
    location: 'Bangkok, Thailand',
    duration: '7 Days / 6 Nights',
    price: 799,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 20
  },
  {
    id: 2,
    title: 'Paris Getaway',
    location: 'Paris, France',
    duration: '5 Days / 4 Nights',
    price: 1299,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 15
  },
  {
    id: 3,
    title: 'Tokyo Explorer',
    location: 'Tokyo, Japan',
    duration: '8 Days / 7 Nights',
    price: 1499,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 10
  },
  {
    id: 4,
    title: 'Bali Paradise',
    location: 'Bali, Indonesia',
    duration: '6 Days / 5 Nights',
    price: 899,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 25
  }
];

const testimonials = [
  {
    id: 1,
    name: 'John William',
    location: 'Illinois, United States of America',
    text: 'Ut sed sem quis magna ultricies lacinia et sed tortor. Ut non tincidunt nisi, non elementum lorem. Aliquam gravida sodales',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    location: 'California, United States of America',
    text: 'The tour was amazing! Everything was well organized and our guide was knowledgeable and friendly. Would definitely recommend!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const travelTips = [
  {
    id: 1,
    title: 'Bring copies of your passport',
    text: 'Aliquam pretium id justo eget tristique. Aenean feugiat vestibulum blandit.',
    icon: 'address-card'
  },
  {
    id: 2,
    title: 'Register with your embassy',
    text: 'Mauris efficitur, ante sit amet rhoncus malesuada, orci justo sollicitudin.',
    icon: 'flag'
  },
  {
    id: 3,
    title: 'Always have local cash',
    text: 'Donec et placerat ante. Etiam et velit in massa.',
    icon: 'money-bill-wave'
  }
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('popular');

  return (
    <div>
      {/* Banner Section */}
      <section className="banner">
        <div className="container mx-auto px-4 banner-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore The World</h1>
            <p className="text-xl mb-8">Discover amazing places at exclusive deals</p>
            <Link to="/packages" className="btn-primary text-lg px-8 py-3">
              Explore Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="search-form bg-white rounded-lg shadow-lg p-6 max-w-5xl mx-auto -mt-24 relative z-10">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Popular Tour Packages</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Explore our most popular vacation packages with best prices</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'popular' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border border-gray-200 rounded-l-lg`}
                onClick={() => setActiveTab('popular')}
              >
                Popular
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'featured' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border-t border-b border-gray-200`}
                onClick={() => setActiveTab('featured')}
              >
                Featured
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'discounted' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border border-gray-200 rounded-r-lg`}
                onClick={() => setActiveTab('discounted')}
              >
                Discounted
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPackages.map(pkg => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/packages" className="btn-secondary">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-gray-600">We offer the best experience with our travel packages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Handpicked Hotels</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">World Class Service</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Travel Tips */}
            <div className="md:col-span-4">
              <h3 className="text-2xl font-bold mb-6">Tips Before Travel</h3>
              {travelTips.map(tip => (
                <TravelTip key={tip.id} tip={tip} />
              ))}
            </div>

            {/* Testimonials */}
            <div className="md:col-span-8">
              <h3 className="text-2xl font-bold mb-6">Customer Testimonials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map(testimonial => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>

              {/* Arrangements & Helps */}
              <h3 className="text-2xl font-bold mt-8 mb-6">Arrangement & Helps</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Location Manager" className="w-16 h-16 object-cover rounded-full mx-auto mb-2" />
                  <h4 className="font-medium">Location Manager</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Private Guide" className="w-16 h-16 object-cover rounded-full mx-auto mb-2" />
                  <h4 className="font-medium">Private Guide</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Arrangements" className="w-16 h-16 object-cover rounded-full mx-auto mb-2" />
                  <h4 className="font-medium">Arrangements</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Events Activities" className="w-16 h-16 object-cover rounded-full mx-auto mb-2" />
                  <h4 className="font-medium">Events Activities</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers. Book your dream vacation today!
          </p>
          <Link to="/packages" className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
            Explore Packages
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;