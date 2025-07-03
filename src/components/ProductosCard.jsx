/**
 * src/components/ProductCard.jsx
 *
 * Componente de tarjeta para mostrar información de un producto en la tienda.
 * Permite agregar el producto al carrito y muestra feedback visual cuando se agrega.
 *
 * Props:
 * - product: {
 *     id: string,
 *     name: string,
 *     description: string,
 *     price: number,
 *     image: string
 *   }
 *
 * Contexto:
 * - Usa el contexto de carrito (useCart) para agregar productos y verificar si ya están en el carrito.
 *
 * Accesibilidad:
 * - Usa aria-labels y feedback visual accesible.
 *
 * Estilos:
 * - TailwindCSS para estilos y animaciones.
 *
 * Autor: [naldoDev]
 * Fecha: [02/07/2025]
 */
// src/components/ProductCard.jsx
import { useState } from "react";
import { useCart } from "../context/CardContext";
import PropTypes from "prop-types";

ProductCard.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		description: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
	}).isRequired,
};

export default function ProductCard({ product }) {
	const { addToCart, cart } = useCart();
	const [showAdded, setShowAdded] = useState(false);
	const isInCart = cart?.some((item) => item.id === product.id);

	// Feedback visual: animación de check y fondo verde SOLO en la tarjeta clickeada
	const handleAddToCart = () => {
		addToCart(product);
		setShowAdded(true);
		setTimeout(() => setShowAdded(false), 900);
	};

	return (
		<div
			className={`bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full transition-transform duration-200 hover:scale-105 hover:shadow-xl border border-transparent hover:border-amber-300 group relative ${
				showAdded ? "ring-4 ring-green-300" : ""
			}`}
			tabIndex={0}
			aria-label={`Producto: ${product.name}`}
		>
			{/* Feedback visual check animado SOLO si showAdded */}
			{showAdded && (
				<div className="absolute inset-0 bg-green-100/80 flex items-center justify-center z-20 animate-fade-pop">
					<span className="text-green-600 text-5xl animate-bounce">✔️</span>
				</div>
			)}
			<div className="relative overflow-hidden">
				<img
					src={product.image}
					alt={product.name}
					className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
				/>
				<span className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
					S/ {product.price}
				</span>
			</div>
			<div className="p-4 flex flex-col flex-1">
				<h3
					className="text-xl font-semibold text-gray-800 truncate"
					title={product.name}
				>
					{product.name}
				</h3>
				<p
					className="text-sm text-gray-600 truncate"
					title={product.description}
				>
					{product.description}
				</p>
				<button
					onClick={handleAddToCart}
					className={`mt-4 font-bold px-4 py-2 rounded w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400
			${
				isInCart
					? "bg-green-400 text-white cursor-not-allowed"
					: "bg-amber-500 text-white hover:bg-amber-600 active:scale-95"
			}`}
					aria-label={
						isInCart
							? "Producto ya en el carrito"
							: `Agregar ${product.name} al carrito`
					}
					disabled={isInCart}
				>
					{isInCart ? "Agregado" : "Agregar al carrito"}
				</button>
			</div>
			<style>{`
		.group:focus-within { box-shadow: 0 0 0 3px #fbbf24; border-color: #fbbf24; }
		@keyframes fadePop {
		  0% { opacity: 0; transform: scale(0.7); }
		  60% { opacity: 1; transform: scale(1.1); }
		  100% { opacity: 1; transform: scale(1); }
		}
		.animate-fade-pop { animation: fadePop 0.7s; }
	  `}</style>
		</div>
	);
}
