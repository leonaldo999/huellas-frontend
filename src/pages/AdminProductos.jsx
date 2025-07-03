import { useEffect, useState } from 'react';

export default function AdminProductos() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', price: '', description: '', image: '' });

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/api/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      await fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE' });
      fetchProducts();
    }
  };

  const handleEdit = (product) => {
    setEditing(product._id);
    setForm(product);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/api/products/${editing}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setEditing(null);
    setForm({ name: '', price: '', description: '', image: '' });
    fetchProducts();
  };

  return (
    <section className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-amber-600 mb-6 text-center">Panel de Productos</h2>

      {editing && (
        <form onSubmit={handleUpdate} className="bg-white p-4 rounded shadow mb-6 space-y-4">
          <h3 className="text-lg font-semibold">Editar producto</h3>
          <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="price" value={form.price} onChange={handleChange} className="w-full border p-2 rounded" />
          <textarea name="description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="image" value={form.image} onChange={handleChange} className="w-full border p-2 rounded" />
          <button type="submit" className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600">Guardar cambios</button>
        </form>
      )}

      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-gray-600">S/ {product.price}</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(product)} className="text-blue-600 hover:underline">Editar</button>
              <button onClick={() => handleDelete(product._id)} className="text-red-600 hover:underline">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}