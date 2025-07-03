// src/components/DogCard.jsx
import { Link } from "react-router-dom";

export default function DogCard({ dog }) {
  return (
	<div className="bg-white shadow-md rounded-lg overflow-hidden">
	  <img
		src={dog.imageUrl || dog.image}
		alt={dog.name}
		className="w-full h-48 object-cover bg-amber-50"
		onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200?text=Sin+foto'; }}
	  />
	  <div className="p-4">
		<h3 className="text-xl font-semibold text-gray-800">{dog.name}</h3>
		<p className="text-sm text-gray-600">Edad: {dog.age}</p>
		<p className="text-sm text-gray-600">Tamaño: {dog.size}</p>
		<p className="text-sm text-gray-600 mt-2">{dog.description}</p>

		<Link to="/adoptar" state={{ dog }}>
		  <button className="mt-4 bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 w-full">
			Adoptar
		  </button>
		</Link>
	  </div>
	</div>
  );
}
