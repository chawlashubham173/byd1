import React from 'react'

interface Package {
  id: number
  title: string
  description: string
  price: number
  image: string
}

interface PackageCardProps {
  package: Package
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={pkg.image} 
        alt={pkg.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
        <p className="text-gray-600 mb-4">{pkg.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">${pkg.price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default PackageCard