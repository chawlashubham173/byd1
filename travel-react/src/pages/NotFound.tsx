import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="mb-8">
          <Link 
            to="/" 
            className="bg-primary text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-all"
          >
            Back to Home
          </Link>
        </div>
        
        <div className="mt-8">
          <h4 className="text-lg font-bold mb-4">Top Website Pages</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="text-primary hover:underline">Home</Link>
            <Link to="/packages" className="text-primary hover:underline">Tour Packages</Link>
            <Link to="/destinations" className="text-primary hover:underline">Best Places</Link>
            <Link to="/events" className="text-primary hover:underline">World Events</Link>
            <Link to="/about" className="text-primary hover:underline">About Us</Link>
            <Link to="/contact" className="text-primary hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;