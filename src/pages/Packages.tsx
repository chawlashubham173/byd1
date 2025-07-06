import React from 'react'
import PackageCard from '../components/PackageCard'

const Packages: React.FC = () => {
  const packages = [
    {
      id: 1,
      title: "Paris Adventure",
      description: "Explore the city of lights with our comprehensive Paris package including Eiffel Tower, Louvre, and Seine River cruise.",
      price: 1299,
      image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Tokyo Experience",
      description: "Immerse yourself in Japanese culture with visits to temples, modern districts, and authentic cuisine experiences.",
      price: 1599,
      image: "https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Bali Retreat",
      description: "Relax and rejuvenate in the tropical paradise of Bali with beach resorts, spa treatments, and cultural tours.",
      price: 999,
      image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "New York City Break",
      description: "Experience the Big Apple with Broadway shows, Central Park, Statue of Liberty, and world-class dining.",
      price: 1199,
      image: "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Swiss Alps Adventure",
      description: "Breathtaking mountain views, skiing, hiking, and charming alpine villages in the heart of Switzerland.",
      price: 1799,
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      title: "Australian Outback",
      description: "Discover the rugged beauty of Australia with Uluru, Sydney Opera House, and Great Barrier Reef.",
      price: 2299,
      image: "https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Travel Packages</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Discover our carefully curated travel packages for unforgettable experiences
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Packages