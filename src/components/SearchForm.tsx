import React, { useState } from 'react'

const SearchForm: React.FC = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search data:', searchData)
    // Handle search logic here
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={searchData.destination}
            onChange={handleChange}
            placeholder="Where to?"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
            Check In
          </label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={searchData.checkIn}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
            Check Out
          </label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={searchData.checkOut}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
            Guests
          </label>
          <select
            id="guests"
            name="guests"
            value={searchData.guests}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            <option value={4}>4 Guests</option>
            <option value={5}>5+ Guests</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
        >
          Search Packages
        </button>
      </div>
    </form>
  )
}

export default SearchForm