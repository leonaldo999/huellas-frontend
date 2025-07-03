import { useState } from 'react';

export default function AgregarProducto() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convertir price a número antes de enviar
    const formToSend = { ...form, price: Number(form.price) };

    const response = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formToSend),
    });

    if (response.ok) {
      alert('Producto agregado correctamente');
      setForm({ name: '', price: '', description: '', image: '' });
    } else {
      alert('Error al agregar el producto');
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <div className="w-full bg-gradient-to-r from-amber-100 via-white to-amber-50 py-8 mb-8 flex flex-col items-center rounded-2xl shadow animate-fade-in">
        <h2 className="text-3xl font-extrabold text-amber-700 mb-2 drop-shadow text-center">Agregar Producto</h2>
        <p className="text-base md:text-lg text-gray-700 max-w-md text-center mb-2">Completa el formulario para sumar un nuevo producto a la tienda solidaria.</p>
        <span className="text-2xl">🛍️✨</span>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white/90 rounded-2xl shadow-lg p-8 border border-amber-100 animate-fade-in">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-semibold text-amber-700">Nombre</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Nombre del producto"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-amber-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition text-white placeholder:text-amber-300 bg-black"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="price" className="text-sm font-semibold text-amber-700">Precio</label>
          <input
            id="price"
            type="number"
            name="price"
            placeholder="Precio"
            value={form.price}
            onChange={handleChange}
            className="w-full border border-amber-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition text-white placeholder:text-amber-300 bg-black"
            required
            min="0"
            step="0.01"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-sm font-semibold text-amber-700">Descripción</label>
          <textarea
            id="description"
            name="description"
            placeholder="Descripción"
            value={form.description}
            onChange={handleChange}
            className="w-full border border-amber-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition text-white placeholder:text-amber-300 bg-black"
            rows="3"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="image" className="text-sm font-semibold text-amber-700">URL de la imagen</label>
          <input
            id="image"
            type="text"
            name="image"
            placeholder="URL de la imagen"
            value={form.image}
            onChange={handleChange}
            className="w-full border border-amber-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition text-white placeholder:text-amber-300 bg-black"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg shadow transition transform hover:scale-105 w-full text-lg"
        >
          Agregar producto
        </button>
      </form>
      <style>
        {`
          .animate-fade-in { animation: fadeInAgregar 0.7s; }
          @keyframes fadeInAgregar {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}