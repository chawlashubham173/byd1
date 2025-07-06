import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faMapMarked, faGamepad, faUmbrella, faBinoculars, faGlobe } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div>
      {/* Banner */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About <span className="text-secondary">Us</span></h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              World's leading Hotel Booking website, Over 30,000 Hotel rooms worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Hi! Welcome to Holiday Tour & Travels</h3>
              <span className="text-primary font-medium">Duis pretium gravida nisi, ut pulvinar lorem bibendum eget</span>
              <p className="mt-4 text-gray-600">
                Aliquam blandit nisl sem. Mauris quis enim purus. Vivamus nec tortor bibendum risus placerat vulputate at gravida ante. Nam sit amet tellus enim. Phasellus consectetur porttitor lobortis. Integer cursus odio at mattis porttitor. In hac habitasse platea dictumst. Nunc sit amet cursus felis. Etiam venenatis auctor metus, et lacinia elit dignissim non. Aenean auctor semper erat porta dictum.
              </p>
              <p className="mt-4 text-gray-600">
                Fusce velit sem, vestibulum ac enim ut, tincidunt pretium augue. Vestibulum purus sapien, porttitor a porta faucibus, hendrerit eget enim.
              </p>
              <a href="tel:13654-87898" className="inline-block mt-6 bg-primary text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-all">
                Call to us: 13654 87898
              </a>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="About Us" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <span className="text-5xl font-bold text-primary block mb-2">240</span>
              <h4 className="text-xl font-bold mb-2">Packages</h4>
              <p className="text-gray-600">Vivamus nec tortor bibendum risus placerat vulputate at gravida ante</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <span className="text-5xl font-bold text-primary block mb-2">960</span>
              <h4 className="text-xl font-bold mb-2">Places</h4>
              <p className="text-gray-600">Vivamus nec tortor bibendum risus placerat vulputate at gravida ante</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <span className="text-5xl font-bold text-primary block mb-2">400</span>
              <h4 className="text-xl font-bold mb-2">Events</h4>
              <p className="text-gray-600">Vivamus nec tortor bibendum risus placerat vulputate at gravida ante</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <span className="text-5xl font-bold text-primary block mb-2">120</span>
              <h4 className="text-xl font-bold mb-2">Hotels</h4>
              <p className="text-gray-600">Vivamus nec tortor bibendum risus placerat vulputate at gravida ante</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex">
              <div className="mr-4 text-4xl text-primary">
                <FontAwesomeIcon icon={faFlag} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2"><span className="text-primary">Travel</span> Booking</h4>
                <p className="text-gray-600">
                  Curabitur vestibulum porta tortor vitae lacinia. Duis pretium gravida nisi, ut pulvinar lorem bibendum eget. Praesent turpis elit, dignissim nec tempor at, congue non justo.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-4xl text-primary">
                <FontAwesomeIcon icon={faMapMarked} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2"><span className="text-primary">Hotel</span> Booking</h4>
                <p className="text-gray-600">
                  Curabitur vestibulum porta tortor vitae lacinia. Duis pretium gravida nisi, ut pulvinar lorem bibendum eget. Praesent turpis elit, dignissim nec tempor at, congue non justo.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-4xl text-primary">
                <FontAwesomeIcon icon={faGamepad} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2"><span className="text-primary">Events</span> Booking</h4>
                <p className="text-gray-600">
                  Curabitur vestibulum porta tortor vitae lacinia. Duis pretium gravida nisi, ut pulvinar lorem bibendum eget. Praesent turpis elit, dignissim nec tempor at, congue non justo.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-4xl text-primary">
                <FontAwesomeIcon icon={faUmbrella} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2"><span className="text-primary">Sight Seeing</span> Booking</h4>
                <p className="text-gray-600">
                  Curabitur vestibulum porta tortor vitae lacinia. Duis pretium gravida nisi, ut pulvinar lorem bibendum eget. Praesent turpis elit, dignissim nec tempor at, congue non justo.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-4xl text-primary">
                <FontAwesomeIcon icon={faBinoculars} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2"><span className="text-primary">Tour</span> Discount</h4>
                <p className="text-gray-600">
                  Curabitur vestibulum porta tortor vitae lacinia. Duis pretium gravida nisi, ut pulvinar lorem bibendum eget. Praesent turpis elit, dignissim nec tempor at, congue non justo.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-4xl text-primary">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2"><span className="text-primary">Top</span> Brandings</h4>
                <p className="text-gray-600">
                  Curabitur vestibulum porta tortor vitae lacinia. Duis pretium gravida nisi, ut pulvinar lorem bibendum eget. Praesent turpis elit, dignissim nec tempor at, congue non justo.
                </p>
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
          <a href="/packages" className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
            Explore Packages
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;