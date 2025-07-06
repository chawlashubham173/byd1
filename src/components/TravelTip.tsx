import React from 'react'

interface Tip {
  id: number
  title: string
  content: string
  category: string
}

interface TravelTipProps {
  tip: Tip
}

const TravelTip: React.FC<TravelTipProps> = ({ tip }) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Packing': 'bg-blue-100 text-blue-800',
      'Culture': 'bg-green-100 text-green-800',
      'Safety': 'bg-red-100 text-red-800',
      'Communication': 'bg-purple-100 text-purple-800',
      'Budget': 'bg-yellow-100 text-yellow-800',
      'Technology': 'bg-indigo-100 text-indigo-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{tip.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(tip.category)}`}>
          {tip.category}
        </span>
      </div>
      <p className="text-gray-600">{tip.content}</p>
    </div>
  )
}

export default TravelTip