import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero principal */}
      <section
        className="relative flex items-center justify-center min-h-[70vh] md:min-h-[80vh] bg-[url('https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center px-4 py-20 md:py-32"
      >
        {/* Overlay para oscurecer la imagen y mejorar la legibilidad */}
        <div className="absolute inset-0 bg-amber-900/40" aria-hidden="true"></div>
        <div className="relative z-10 w-full max-w-4xl px-4 mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in">
            Huellas de Esperanza 🐾
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium mb-8 animate-fade-in delay-100">
            Rescatamos, cuidamos y buscamos un hogar lleno de amor para perritos abandonados.<br />
            <span className="text-amber-200 font-semibold">¡Con tu ayuda podemos cambiar vidas!</span>
          </p>
          <Link
            to="/adopciones"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full shadow-lg text-lg md:text-xl transition transform hover:scale-105 animate-fade-in delay-200"
          >
            Ver perritos en adopción
          </Link>
          <span className="block mt-8 text-white/80 text-base md:text-lg animate-fade-in delay-300">
            &quot;Adopta, salva una vida y gana un amigo fiel para siempre.&quot;
          </span>
        </div>
        <style>
          {`
            .animate-fade-in {
              animation: fadeIn 0.7s both;
            }
            .delay-100 { animation-delay: 0.1s; }
            .delay-200 { animation-delay: 0.2s; }
            .delay-300 { animation-delay: 0.3s; }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </section>

      {/* Hero secundario destacado */}
      <section className="relative bg-gradient-to-r from-amber-100 via-white to-amber-50 py-12 md:py-20 px-4 md:px-0 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 border-b border-amber-200">
        <img
          src="/src/assets/storeSor.jpg"
          alt="Tienda solidaria"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl shadow-lg border-4 border-amber-200 animate-fade-in"
          loading="lazy"
        />
        <div className="max-w-xl text-center md:text-left animate-fade-in delay-100">
          <h2 className="text-2xl md:text-4xl font-extrabold text-amber-700 mb-3 drop-shadow">¡Cada compra salva vidas!</h2>
          <p className="text-base md:text-lg text-gray-700 mb-5">
            Nuestra tienda solidaria financia alimento, medicinas y refugio para perritos rescatados.<br />
            <span className="text-amber-600 font-semibold">El 100% de las ganancias se destinan a su bienestar.</span>
          </p>
          <Link
            to="/tienda"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-full shadow-md text-base md:text-lg transition transform hover:scale-105"
          >
            Ir a la tienda solidaria
          </Link>
        </div>
      </section>
    </>
  );
}