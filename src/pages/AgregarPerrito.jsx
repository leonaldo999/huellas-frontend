import { useState } from "react";

export default function AgregarPerrito() {
	const [form, setForm] = useState({
		name: "",
		age: "",
		size: "",
		description: "",
		imageUrl: "",
	});
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

		const res = await fetch("http://localhost:5000/api/dogs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(form),
		});

		setLoading(false);

 if (res.ok) {
		setMensaje("🐶 Perrito agregado con éxito");
		setForm({
			name: "",
			age: "",
			size: "",
			description: "",
			imageUrl: "",
		});
	} else {
			const error = await res.json();
			setMensaje(`❌ Error: ${error.message}`);
		}
	};

	return (
		<section className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-amber-100">
			<h2 className="text-2xl font-bold text-amber-600 mb-4">
				Agregar Perrito
			</h2>
			{mensaje && (
				<div
					className={`mb-4 p-3 rounded ${
						mensaje.startsWith("🐶")
							? "bg-green-100 text-green-700"
							: "bg-red-100 text-red-600"
					}`}
				>
					{mensaje}
				</div>
			)}
			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					type="text"
					name="name"
					placeholder="Nombre"
					value={form.name}
					onChange={handleChange}
					required
			   className="w-full border border-amber-200 p-3 rounded-lg bg-amber-50 text-amber-700 placeholder-amber-400 focus:bg-white focus:text-amber-900"
				/>
				<input
					type="text"
					name="age"
					placeholder="Edad"
					value={form.age}
					onChange={handleChange}
			   className="w-full border border-amber-200 p-3 rounded-lg bg-amber-50 text-amber-700 placeholder-amber-400 focus:bg-white focus:text-amber-900"
				/>
 <select
				name="size"
				value={form.size}
				onChange={handleChange}
				required
			   className="w-full border border-amber-200 p-3 rounded-lg bg-amber-50 text-amber-700 placeholder-amber-400 focus:bg-white focus:text-amber-900"
			>
				<option value="" disabled>Selecciona el tamaño</option>
				<option value="Pequeño">Pequeño</option>
				<option value="Mediano">Mediano</option>
				<option value="Grande">Grande</option>
			</select>
				<textarea
					name="description"
					placeholder="Descripción"
					value={form.description}
					onChange={handleChange}
			   className="w-full border border-amber-200 p-3 rounded-lg bg-amber-50 text-amber-700 placeholder-amber-400 focus:bg-white focus:text-amber-900"
				/>
				<input
					type="text"
					name="imageUrl"
					placeholder="URL de la imagen"
					value={form.imageUrl}
					onChange={handleChange}
			   className="w-full border border-amber-200 p-3 rounded-lg bg-amber-50 text-amber-700 placeholder-amber-400 focus:bg-white focus:text-amber-900"
				/>
				<button
					type="submit"
					disabled={loading}
					className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition"
				>
					{loading ? "Guardando..." : "Agregar"}
				</button>
			</form>
		</section>
	);
}
