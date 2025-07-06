import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
  const [destination, setDestination] = useState('');
  const [packageType, setPackageType] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      destination,
      packageType,
      checkIn,
      checkOut,
      guests
    });
    // Here you would typically redirect to search results page
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-1">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-primary" />
            Destination
          </label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          >
            <option value="">Select destination</option>
            <option value="any">Any location</option>
            <option value="new-york">New York</option>
            <option value="london">London</option>
            <option value="paris">Paris</option>
            <option value="tokyo">Tokyo</option>
            <option value="bali">Bali</option>
          </select>
        </div>
        
        <div className="md:col-span-1">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            <FontAwesomeIcon icon={faUsers} className="mr-2 text-primary" />
            Package Type
          </label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
          >
            <option value="">Any Package</option>
            <option value="family">Family Package</option>
            <option value="honeymoon">Honeymoon Package</option>
            <option value="group">Group Package</option>
            <option value="weekend">Weekend Package</option>
            <option value="regular">Regular Package</option>
          </select>
        </div>
        
        <div className="md:col-span-1">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-primary" />
            Check In
          </label>
          <input 
            type="date" 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>
        
        <div className="md:col-span-1">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-primary" />
            Check Out
          </label>
          <input 
            type="date" 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>
        
        <div className="md:col-span-1">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            <FontAwesomeIcon icon={faUsers} className="mr-2 text-primary" />
            Guests
          </label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5">5+ People</option>
          </select>
        </div>
      </div>
      
      <div className="mt-6">
        <button 
          type="submit" 
          className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;