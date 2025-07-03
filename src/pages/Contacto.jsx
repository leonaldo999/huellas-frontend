
import { useState } from 'react';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setForm({ nombre: '', email: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <>
      {/* Hero contacto */}
      <div className="w-full bg-gradient-to-r from-amber-100 via-white to-amber-50 py-10 mb-8 flex flex-col items-center animate-fade-in">
        <div className="w-full max-w-4xl px-4 mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-amber-700 mb-4 drop-shadow text-center">Contáctanos</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-4">¿Tienes dudas, sugerencias o quieres ayudar? <span className="text-amber-600 font-semibold">¡Escríbenos, te responderemos pronto!</span></p>
          <span className="text-3xl">✉️🤝🐾</span>
        </div>
      </div>

      <section className="max-w-4xl mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row gap-8 items-start animate-fade-in">
          {/* Formulario */}
          <div className="flex-1 w-full">
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-amber-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 text-lg">👤</span>
                  <input
                    name="nombre"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full border border-amber-200 pl-10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition bg-white text-amber-900 placeholder-amber-400"
                    required
                    aria-label="Nombre"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 text-lg">✉️</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="Tu correo"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-amber-200 pl-10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition bg-white text-amber-900 placeholder-amber-400"
                    required
                    aria-label="Correo electrónico"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-4 text-amber-400 text-lg">💬</span>
                  <textarea
                    name="mensaje"
                    placeholder="Tu mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    className="w-full border border-amber-200 pl-10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition bg-white text-amber-900 placeholder-amber-400"
                    rows="4"
                    required
                    aria-label="Mensaje"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg shadow transition transform hover:scale-105"
                >
                  Enviar
                </button>
              </form>
              {enviado && (
                <div className="mt-6 text-center animate-fade-in">
                  <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full shadow">
                    <span className="text-2xl">✅</span>
                    ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Info de contacto */}
          <div className="flex-1 w-full max-w-xs mx-auto md:mx-0 bg-amber-50/80 rounded-2xl shadow p-6 border border-amber-100 flex flex-col gap-4 items-center">
            <h3 className="text-lg font-bold text-amber-700 mb-2">¿Prefieres otros medios?</h3>
            <div className="flex flex-col gap-2 text-amber-900 text-sm w-full">
              <div className="flex items-center gap-2"><span>📧</span> contacto@huellas.com</div>
              <div className="flex items-center gap-2"><span>📱</span> +51 999 888 777</div>
              <div className="flex items-center gap-2"><span>📍</span> Lima, Perú</div>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-amber-600 text-2xl" aria-label="Instagram">🐾</a>
              <a href="#" className="hover:text-amber-600 text-2xl" aria-label="Facebook">📘</a>
              <a href="#" className="hover:text-amber-600 text-2xl" aria-label="WhatsApp">💬</a>
            </div>
          </div>
        </div>
        <style>
          {`
            .animate-fade-in { animation: fadeInContacto 0.7s; }
            @keyframes fadeInContacto {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </section>
    </>
  );
}