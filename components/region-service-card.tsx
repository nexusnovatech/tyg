import type React from "react"

interface RegionServiceCardProps {
  title: string
  description: string
  imageUrl: string
  link: string
}

const RegionServiceCard: React.FC<RegionServiceCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 break-words-all">{title}</h3>
        <p className="text-slate-600 mb-6 break-words-all">{description}</p>
        <a href={link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </a>
      </div>
    </div>
  )
}

export default RegionServiceCard
