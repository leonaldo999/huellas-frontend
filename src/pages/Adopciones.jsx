

import DogCard from '../components/DogCard';
import dogs from '../data/dogs';
import { useState, useEffect } from 'react';

// Simula que el primer perro local es "nuevo" para mostrar el badge
const localDogsWithBadge = dogs.map((dog, i) => i === 0 ? { ...dog, nuevo: true } : dog);

export default function Adopciones() {
  const [filtro, setFiltro] = useState('todos');
  const [backendDogs, setBackendDogs] = useState([]);

  // Llamado al backend al inicio (como en Blog)
  useEffect(() => {
    fetch('http://localhost:5000/api/dogs')
      .then(res => res.json())
      .then(data => {
        let dogsFromBack = Array.isArray(data) ? data : [];
        // Mapea _id a id para compatibilidad con DogCard y React
        dogsFromBack = dogsFromBack.map(dog => ({ ...dog, id: dog._id }));
        if (dogsFromBack.length && dogsFromBack[0].date) {
          dogsFromBack = dogsFromBack.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        setBackendDogs(dogsFromBack);
      })
      .catch(() => setBackendDogs([]));
  }, []);

  // Unifica los perros: primero los del backend, luego los locales
  const allDogs = backendDogs.length > 0 ? [...backendDogs, ...localDogsWithBadge] : localDogsWithBadge;

  // Filtros por tamaño
  const dogsFiltrados = filtro === 'todos' ? allDogs : allDogs.filter(d => d.size === filtro);
  const sizes = Array.from(new Set(allDogs.map(d => d.size)));

  return (
    <section className="py-0 px-0 md:py-10 md:px-6">
      {/* Hero motivador */}
      <div className="w-full bg-gradient-to-r from-amber-100 via-white to-amber-50 py-10 mb-8 flex flex-col items-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-extrabold text-amber-700 mb-4 drop-shadow text-center">¡Adopta, cambia una vida!</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-4">Cada perrito aquí espera una segunda oportunidad. <span className="text-amber-600 font-semibold">Tu amor puede transformar su historia.</span></p>
        <span className="text-3xl">🐶❤️🏡</span>
      </div>
      {/* Filtros */}
      <div className="flex flex-wrap gap-3 justify-center mb-8 animate-fade-in">
        <button
          className={`px-4 py-2 rounded-full border font-semibold transition-colors ${filtro === 'todos' ? 'bg-amber-500 text-white' : 'bg-white text-amber-700 border-amber-300 hover:bg-amber-100'}`}
          onClick={() => setFiltro('todos')}
        >
          Todos
        </button>
        {sizes.map(size => (
          <button
            key={size}
            className={`px-4 py-2 rounded-full border font-semibold transition-colors ${filtro === size ? 'bg-amber-500 text-white' : 'bg-white text-amber-700 border-amber-300 hover:bg-amber-100'}`}
            onClick={() => setFiltro(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
        {dogsFiltrados.map((dog) => (
          <div key={dog.id} className="relative animate-fade-in group">
            <DogCard dog={dog} />
            {dog.nuevo && (
              <span className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce z-10">¡Nuevo!</span>
            )}
            {/* Botón destacado */}
            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
              <a href="#formulario-adopcion" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full shadow-lg text-sm transition transform hover:scale-105">Adoptar</a>
            </div> */}
          </div>
        ))}
      </div>
      {/* Testimonio inspirador */}
      <div className="mt-12 max-w-2xl mx-auto text-center bg-amber-50/80 rounded-xl p-6 shadow border border-amber-100 animate-fade-in">
        <p className="text-lg md:text-xl text-amber-700 font-semibold mb-2">“Adoptar es un acto de amor que cambia dos vidas: la del perrito y la tuya.”</p>
        <span className="text-amber-500 text-2xl">⭐</span>
      </div>
      <style>
        {`
          .animate-fade-in { animation: fadeInAdop 0.7s; }
          @keyframes fadeInAdop {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}