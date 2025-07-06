import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faFlag, faMoneyBillWave, faBinoculars, faCamera, faPowerOff, faBicycle, faBuilding, faBolt, faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Tips = () => {
  // Travel tips data
  const travelTips = [
    {
      id: 1,
      title: 'Bring copies of your passport',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years',
      icon: faAddressCard
    },
    {
      id: 2,
      title: 'Register with your embassy',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years',
      icon: faFlag
    },
    {
      id: 3,
      title: 'Always have local cash',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years',
      icon: faMoneyBillWave
    },
    {
      id: 4,
      title: 'Get guidebooks',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years',
      icon: faBinoculars
    },
    {
      id: 5,
      title: 'Research events',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years',
      icon: faBolt
    },
    {
      id: 6,
      title: 'Bring your Camera',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years',
      icon: faCamera
    },
    {
      id: 7,
      title: 'Power bank',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years',
      icon: faPowerOff
    },
    {
      id: 8,
      title: 'Bicycle',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years',
      icon: faBicycle
    },
    {
      id: 9,
      title: 'Book your Hotel',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years',
      icon: faBuilding
    },
    {
      id: 10,
      title: 'Research events',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years',
      icon: faBullhorn
    }
  ];

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
            <h1 className="text-4xl font-bold mb-4">Tips <span className="text-secondary">For your Travel</span></h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              World's leading Hotel Booking website, Over 30,000 Hotel rooms worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Travel Tips */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelTips.map(tip => (
              <div key={tip.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={tip.icon} className="text-white text-xl" />
                  </div>
                  <h4 className="text-xl font-bold">{tip.title}</h4>
                </div>
                <p className="text-gray-600">{tip.text}</p>
              </div>
            ))}
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

export default Tips;