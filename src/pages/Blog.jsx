// src/pages/Blog.jsx
import { useEffect, useState } from "react";

// Array local de posts (puedes modificar o ampliar)
const localPosts = [
  {
    id: 1,
    title: 'Cómo preparar tu hogar para adoptar un perro',
    date: '2024-06-01',
    content: 'Adoptar un perro es una decisión hermosa, pero requiere preparación. Aquí te damos algunos consejos para que tu hogar sea un lugar seguro y amoroso...',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Historias de esperanza: el rescate de Canela',
    date: '2024-05-20',
    content: 'Canela fue encontrada en condiciones difíciles, pero gracias al equipo de Huellas de Esperanza, hoy vive feliz con su nueva familia...',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80',
  },
];


export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        // Ordenar los del backend por fecha descendente
        const sortedBackend = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
        // Ordenar los locales por fecha descendente (opcional)
        const sortedLocal = [...localPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
        // Concatenar: primero los del backend, luego los locales
        setPosts([...sortedBackend, ...sortedLocal]);
      });
  }, []);

  return (
    <>
      {/* Hero blog */}
      <div className="w-full bg-gradient-to-r from-amber-100 via-white to-amber-50 py-10 mb-8 flex flex-col items-center animate-fade-in">
        <div className="w-full max-w-4xl px-4 mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-amber-700 mb-4 drop-shadow text-center">Blog y Noticias</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-4">Historias reales, consejos y novedades sobre adopción, rescate y bienestar animal.</p>
          <span className="text-3xl">📰🐾✨</span>
        </div>
      </div>

      <section className="max-w-4xl mx-auto py-10 px-4">
        <div className="space-y-8">
          {/* Posts del backend y locales, ya ordenados y mezclados */}
          {posts.map((post, idx) => (
            <article
              key={post.id || `local-${idx}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-amber-100 animate-fade-in"
              tabIndex={0}
              aria-label={post.title}
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover object-center mb-4"
                  loading="lazy"
                />
              )}
              <div className="px-6 pb-6">
                <header className="mb-2 flex items-center gap-2">
                  <span className="text-amber-500 text-lg">📅</span>
                  <span className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                </header>
                <h3 className="text-2xl font-bold text-amber-700 mb-2 leading-tight">{post.title}</h3>
                <p className="text-gray-700 text-lg mb-2">{post.content}</p>
              </div>
            </article>
          ))}
        </div>
        <style>
          {`
            .animate-fade-in { animation: fadeInBlog 0.7s; }
            @keyframes fadeInBlog {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </section>
    </>
  );
}