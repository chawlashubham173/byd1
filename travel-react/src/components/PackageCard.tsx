import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

interface PackageProps {
  package: {
    id: number;
    title: string;
    location: string;
    duration: string;
    price: number;
    rating: number;
    image: string;
    discount?: number;
  }
}

const PackageCard = ({ package: pkg }: PackageProps) => {
  return (
    <div className="package-card bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
      <div className="relative">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-48 object-cover"
        />
        
        {pkg.discount && (
          <div className="absolute top-0 right-0 bg-secondary text-dark font-bold py-1 px-3 rounded-bl-lg">
            {pkg.discount}% OFF
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white font-bold text-lg">{pkg.title}</h3>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center text-gray-600">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1 text-primary" />
            <span className="text-sm">{pkg.location}</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{pkg.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <FontAwesomeIcon icon={faClock} className="mr-1 text-primary" />
          <span className="text-sm">{pkg.duration}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-500 text-sm">From</span>
            <p className="text-primary font-bold text-xl">${pkg.price}</p>
          </div>
          
          <Link 
            to={`/package/${pkg.id}`} 
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;