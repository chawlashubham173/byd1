import React from 'react'

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">About Travel React</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Travel team" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, Travel React has been dedicated to creating unforgettable travel experiences 
                for adventurers around the world. We believe that travel is not just about visiting new places, 
                but about creating memories that last a lifetime.
              </p>
              <p className="text-gray-600">
                Our team of experienced travel experts works tirelessly to curate the perfect trips, 
                ensuring every detail is taken care of so you can focus on what matters most - enjoying your journey.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">We offer travel packages to over 50 countries worldwide.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
              <p className="text-gray-600">Our team has over 100 years of combined travel experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">98% of our customers rate their experience as excellent.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About