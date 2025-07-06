import React from 'react'
import TravelTip from '../components/TravelTip'

const Tips: React.FC = () => {
  const tips = [
    {
      id: 1,
      title: "Pack Light and Smart",
      content: "Choose versatile clothing items that can be mixed and matched. Roll clothes instead of folding to save space.",
      category: "Packing"
    },
    {
      id: 2,
      title: "Research Local Customs",
      content: "Understanding local customs and etiquette will help you respect the culture and avoid awkward situations.",
      category: "Culture"
    },
    {
      id: 3,
      title: "Keep Important Documents Safe",
      content: "Make copies of your passport, visa, and other important documents. Store them separately from the originals.",
      category: "Safety"
    },
    {
      id: 4,
      title: "Learn Basic Local Phrases",
      content: "Knowing how to say 'hello', 'thank you', and 'excuse me' in the local language goes a long way.",
      category: "Communication"
    },
    {
      id: 5,
      title: "Budget for Unexpected Expenses",
      content: "Always have extra money set aside for emergencies or unexpected opportunities during your trip.",
      category: "Budget"
    },
    {
      id: 6,
      title: "Stay Connected",
      content: "Research international phone plans or local SIM cards to stay connected with family and access maps.",
      category: "Technology"
    }
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Travel Tips</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Expert advice to make your travels smoother and more enjoyable
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map(tip => (
              <TravelTip key={tip.id} tip={tip} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tips