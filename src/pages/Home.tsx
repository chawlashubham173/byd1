import React from 'react'
import SearchForm from '../components/SearchForm'
import PackageCard from '../components/PackageCard'
import TestimonialCard from '../components/TestimonialCard'

const Home: React.FC = () => {
  const packages = [
    {
      id: 1,
      title: "Paris Adventure",
      description: "Explore the city of lights with our comprehensive Paris package.",
      price: 1299,
      image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Tokyo Experience",
      description: "Immerse yourself in Japanese culture and modern city life.",
      price: 1599,
      image: "https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Bali Retreat",
      description: "Relax and rejuvenate in the tropical paradise of Bali.",
      price: 999,
      image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "Amazing experience! The trip was perfectly organized and exceeded all expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Chen",
      text: "Professional service and great value for money. Highly recommended!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Discover Your Next Adventure</h1>
          <p className="text-xl mb-8">Explore amazing destinations with our curated travel packages</p>
          <SearchForm />
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map(pkg => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home