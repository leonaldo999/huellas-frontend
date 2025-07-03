import { useCart } from "../context/CardContext";

export default function Carrito() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
	<>
	  {/* Hero carrito */}
	  <div className="w-full bg-gradient-to-r from-amber-100 via-white to-amber-50 py-10 mb-8 flex flex-col items-center animate-fade-in">
		<div className="w-full max-w-4xl px-4 mx-auto flex flex-col items-center">
		  <h2 className="text-4xl md:text-5xl font-extrabold text-amber-700 mb-4 drop-shadow text-center">Tu Carrito Solidario</h2>
		  <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-4">Revisa tus productos y finaliza tu compra para seguir ayudando a más perritos.</p>
		  <span className="text-3xl">🛒💛🐶</span>
		</div>
	  </div>

	  <section className="max-w-4xl mx-auto py-10 px-4">
		{cart.length === 0 ? (
		  <div className="text-center text-gray-600 bg-amber-50 rounded-xl p-8 shadow animate-fade-in">
			<span className="text-5xl block mb-2">🛒</span>
			<p className="text-lg">Tu carrito está vacío.</p>
		  </div>
		) : (
		  <div className="space-y-6 animate-fade-in">
			<div className="w-full overflow-x-auto">
			  <table className="min-w-full bg-white rounded-xl shadow-md border border-amber-100">
				<thead>
				  <tr className="bg-amber-50 text-amber-700 text-sm">
					<th className="py-3 px-2 text-left">#</th>
					<th className="py-3 px-2 text-left">Imagen</th>
					<th className="py-3 px-2 text-left">Nombre</th>
					<th className="py-3 px-2 text-left">Descripción</th>
					<th className="py-3 px-2 text-center">Cantidad</th>
					<th className="py-3 px-2 text-center">Precio</th>
					<th className="py-3 px-2 text-center">Quitar</th>
				  </tr>
				</thead>
				<tbody>
				  {cart.map((item, idx) => (
					<tr key={item.id} className="border-t border-amber-100 hover:bg-amber-50 transition">
					  <td className="py-3 px-2 font-bold text-amber-600 text-center">{idx + 1}</td>
					  <td className="py-3 px-2">
						{item.image && (
						  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg border-2 border-amber-100 shadow" />
						)}
					  </td>
					  <td className="py-3 px-2 font-semibold text-amber-800">{item.name}</td>
					  <td className="py-3 px-2 text-gray-600 max-w-[180px] truncate">{item.description}</td>
					  <td className="py-3 px-2 text-center">
						<span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full">{item.quantity}</span>
					  </td>
					  <td className="py-3 px-2 text-center text-amber-700 font-bold">S/ {item.price * item.quantity}</td>
					  <td className="py-3 px-2 text-center">
						<button
						  onClick={() => removeFromCart(item.id)}
						  className="text-red-500 text-xs font-semibold hover:underline hover:text-red-700 transition"
						  aria-label={`Quitar ${item.name}`}
						>
						  Quitar
						</button>
					  </td>
					</tr>
				  ))}
				</tbody>
			  </table>
			</div>
			<div className="mt-8 bg-amber-50 rounded-xl p-6 shadow flex flex-col sm:flex-row justify-between items-center gap-4">
			  <p className="text-lg font-bold text-amber-700">Suma de productos: <span className="text-amber-600">S/ {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span></p>
			  <button
				onClick={clearCart}
				className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg shadow transition transform hover:scale-105"
			  >
				Vaciar carrito
			  </button>
			</div>
			<div className="mt-4 flex justify-end">
			  <p className="text-xl font-extrabold text-amber-800 bg-white rounded-lg px-6 py-3 shadow border-2 border-amber-200 animate-fade-in">
				Total a pagar: <span className="text-amber-600">S/ {total}</span>
			  </p>
			</div>
		  </div>
		)}
		<style>
		  {`
			.animate-fade-in { animation: fadeInCarrito 0.7s; }
			@keyframes fadeInCarrito {
			  from { opacity: 0; transform: translateY(30px); }
			  to { opacity: 1; transform: translateY(0); }
			}
		  `}
		</style>
	  </section>
	</>
  );
}
