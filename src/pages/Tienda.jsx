
/**
 * src/pages/Tienda.jsx
 *
 * Página principal de la tienda solidaria.
 * Muestra los productos disponibles y permite agregarlos al carrito.
 *
 * Características:
 * - Obtiene productos desde una API REST.
 * - Destaca el primer producto como "nuevo" con un badge especial.
 * - Usa el componente ProductCard para mostrar cada producto.
 * - Incluye mensajes motivacionales y estilos animados.
 *
 * Autor: [LeonaldoDev]
 * Fecha: [02/07/2025]
 */

import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductosCard';

export default function Tienda() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Simula que el primer producto es "nuevo" para mostrar el badge
  const productsWithBadge = products.map((p, i) => i === 0 ? { ...p, nuevo: true } : p);

  return (
    <section className="py-0 px-0 md:py-10 md:px-6">
      {/* Hero motivador */}
      <div className="w-full bg-gradient-to-r from-amber-100 via-white to-amber-50 py-10 mb-8 flex flex-col items-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-extrabold text-amber-700 mb-4 drop-shadow text-center">Tienda Solidaria</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-4">Cada compra ayuda a rescatar, alimentar y dar hogar a perritos en situación de calle. <span className="text-amber-600 font-semibold">¡Gracias por ser parte del cambio!</span></p>
        <span className="text-3xl">🛒🐾❤️</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
        {productsWithBadge.map((product) => (
          <div key={product._id} className="relative animate-fade-in group">
            <ProductCard product={product} />
            {product.nuevo && (
              <span className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce z-10">¡Solidario!</span>
            )}
          </div>
        ))}
      </div>
      {/* Frase solidaria */}
      <div className="mt-12 max-w-2xl mx-auto text-center bg-amber-50/80 rounded-xl p-6 shadow border border-amber-100 animate-fade-in">
        <p className="text-lg md:text-xl text-amber-700 font-semibold mb-2">“Tu compra es un acto de amor que alimenta esperanza.”</p>
        <span className="text-amber-500 text-2xl">💛</span>
      </div>
      <style>
        {`
          .animate-fade-in { animation: fadeInTienda 0.7s; }
          @keyframes fadeInTienda {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}