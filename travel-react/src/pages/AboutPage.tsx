const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl">Learn more about our company and our mission</p>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Welcome to Travel Tour & Travels</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Travel Tour & Travels has grown to become one of the world's leading travel agencies, 
                offering exceptional service and unforgettable experiences to travelers from around the globe.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to make travel accessible, enjoyable, and enriching for everyone. We believe that 
                travel has the power to transform lives, broaden perspectives, and create lasting memories.
              </p>
              <p className="text-gray-600 mb-6">
                With a team of experienced travel experts and local guides, we curate unique itineraries that 
                showcase the best each destination has to offer, from iconic landmarks to hidden gems.
              </p>
              <div className="flex items-center">
                <span className="text-xl font-bold mr-4">Call us:</span>
                <a href="tel:+1011231231" className="text-blue-600 text-xl font-bold hover:underline">+101-1231-1231</a>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="About Us" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">240+</div>
              <h3 className="text-2xl font-bold mb-2">Packages</h3>
              <p>Curated travel packages to destinations worldwide</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">960+</div>
              <h3 className="text-2xl font-bold mb-2">Places</h3>
              <p>Unique destinations across the globe</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">400+</div>
              <h3 className="text-2xl font-bold mb-2">Events</h3>
              <p>Special events and activities for travelers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">120+</div>
              <h3 className="text-2xl font-bold mb-2">Hotels</h3>
              <p>Partner hotels offering comfortable stays</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We offer a wide range of travel services to make your journey smooth and memorable</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fa fa-globe"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Travel Booking</h3>
              <p className="text-gray-600">Comprehensive travel packages including flights, accommodations, and activities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fa fa-hotel"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Hotel Booking</h3>
              <p className="text-gray-600">Wide selection of hotels, resorts, and vacation rentals at competitive prices.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fa fa-calendar"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Event Booking</h3>
              <p className="text-gray-600">Access to exclusive events, shows, and activities at your destination.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fa fa-map"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Sightseeing Tours</h3>
              <p className="text-gray-600">Guided tours to popular attractions and hidden gems with expert local guides.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fa fa-tag"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Special Discounts</h3>
              <p className="text-gray-600">Exclusive deals and discounts on packages, hotels, and activities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fa fa-headset"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support to assist you during your travels.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage