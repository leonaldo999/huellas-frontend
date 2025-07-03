import { useState } from "react";

export default function AgregarPost() {
  const [form, setForm] = useState({ title: "", content: "", image: "" });
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje("");

    const token = localStorage.getItem("token");
    // Agregar fecha actual al post
    const postToSend = {
      ...form,
      date: new Date().toISOString().split("T")[0],
    };

    const res = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postToSend),
    });

    setLoading(false);

    if (res.ok) {
      setMensaje("📝 Post creado con éxito");
      setForm({ title: "", content: "", image: "" });
    } else {
      const error = await res.json();
      setMensaje(`❌ Error: ${error.message}`);
    }
  };

  return (
    <section className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-amber-100">
      <h2 className="text-2xl font-bold text-amber-600 mb-4">Crear publicación</h2>
      {mensaje && (
        <div className={`mb-4 p-3 rounded ${mensaje.startsWith("📝") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
          {mensaje}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border border-amber-200 p-3 rounded-lg text-white placeholder:text-amber-300 bg-slate-700"
        />
        <textarea
          name="content"
          placeholder="Contenido"
          value={form.content}
          onChange={handleChange}
          required
          className="w-full border border-amber-200 p-3 rounded-lg text-white placeholder:text-amber-300 bg-slate-700"
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={form.image}
          onChange={handleChange}
          className="w-full border border-amber-200 p-3 rounded-lg text-white placeholder:text-amber-300 bg-slate-700"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition"
        >
          {loading ? "Publicando..." : "Publicar"}
        </button>
      </form>
    </section>
  );
}