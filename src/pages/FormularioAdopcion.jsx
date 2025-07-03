import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormularioAdopcion() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    experiencia: '',
  });
  const [enviado, setEnviado] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      navigate('/');
    }, 2000);
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-xl w-full mx-auto py-10 px-4 bg-white/90 rounded-2xl shadow-2xl border border-amber-100 animate-fade-in">
        <h2 className="text-2xl font-bold text-amber-600 mb-6 text-center drop-shadow">Formulario de Adopción</h2>
        {enviado ? (
          <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
            <span className="text-6xl mb-4 animate-bounce">🐾</span>
            <p className="text-lg font-semibold text-amber-700 mb-2 text-center">¡Gracias por postularte para adoptar!</p>
            <p className="text-gray-600 text-center">Nos pondremos en contacto contigo pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 text-xl">👤</span>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre completo"
                value={form.nombre}
                onChange={handleChange}
                className="w-full border border-amber-200 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                required
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 text-xl">📧</span>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-amber-200 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                required
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 text-xl">📱</span>
              <input
                type="tel"
                name="telefono"
                placeholder="Número de teléfono"
                value={form.telefono}
                onChange={handleChange}
                className="w-full border border-amber-200 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                required
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 text-xl">🏠</span>
              <input
                type="text"
                name="direccion"
                placeholder="Dirección"
                value={form.direccion}
                onChange={handleChange}
                className="w-full border border-amber-200 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                required
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-4 text-amber-400 text-xl">🐶</span>
              <textarea
                name="experiencia"
                placeholder="¿Tienes experiencia con mascotas?"
                value={form.experiencia}
                onChange={handleChange}
                className="w-full border border-amber-200 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg w-full shadow transition transform hover:scale-105"
            >
              Enviar solicitud
            </button>
          </form>
        )}
        <style>{`
          .animate-fade-in { animation: fadeInAdop 0.7s; }
          @keyframes fadeInAdop {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
}