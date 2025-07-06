import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    location: string;
    text: string;
    image: string;
  }
}

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start mb-4">
        <div className="mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
      
      <div className="relative">
        <FontAwesomeIcon 
          icon={faQuoteLeft} 
          className="text-primary text-opacity-10 text-4xl absolute top-0 left-0"
        />
        <p className="text-gray-600 relative z-10 pl-6">
          {testimonial.text}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;