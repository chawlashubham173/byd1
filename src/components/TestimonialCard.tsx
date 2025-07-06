import React from 'react'

interface Testimonial {
  id: number
  name: string
  text: string
  rating: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">⭐</span>
        ))}
      </div>
      <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-blue-600 font-semibold">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">Verified Customer</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard