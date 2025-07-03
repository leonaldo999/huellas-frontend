import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

// Helper para capitalizar el nombre
function capitalize(str) {
	if (!str) return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Navbar() {
	const { isAuthenticated, isAdmin } = useAuth();
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("isAdmin");
		localStorage.removeItem("name");
		setMenuOpen(false);
		setTimeout(() => navigate("/"), 100); // Suave para cerrar menú
	};

	// Obtener nombre del usuario del token si existe
	let userName = "";
	const token = localStorage.getItem("token");
	if (token) {
		try {
			const payload = JSON.parse(atob(token.split(".")[1]));
			userName = payload?.name || "";
		} catch {
			// Ignorar errores de parseo del token JWT (por ejemplo, token corrupto)
		}
	}

	const navLinks = (
		<>
			<Link
				to="/"
				className="hover:text-amber-600 transition-colors block py-2 md:py-0"
				onClick={() => setMenuOpen(false)}
			>
				Inicio
			</Link>
			<Link
				to="/blog"
				className="hover:text-amber-600 transition-colors block py-2 md:py-0"
				onClick={() => setMenuOpen(false)}
			>
				Blog
			</Link>
			<Link
				to="/contacto"
				className="hover:text-amber-600 transition-colors block py-2 md:py-0"
				onClick={() => setMenuOpen(false)}
			>
				Contacto
			</Link>
			<Link
				to="/adopciones"
				className="hover:text-amber-600 transition-colors block py-2 md:py-0"
				onClick={() => setMenuOpen(false)}
			>
				Adopciones
			</Link>
			<Link
				to="/tienda"
				className="hover:text-amber-600 transition-colors block py-2 md:py-0"
				onClick={() => setMenuOpen(false)}
			>
				Tienda
			</Link>
			<Link
				to="/carrito"
				className="hover:text-amber-600 transition-colors block py-2 md:py-0"
				onClick={() => setMenuOpen(false)}
			>
				Carrito
			</Link>
			{isAuthenticated ? (
				<>
					{isAdmin && (
						<>
							{/* Menú desplegable para escritorio */}
							{/*
				NOTA: El menú admin usa group-hover para mostrar el submenú.
				Si notas un "delay" al hacer hover/click, es por la naturaleza de group-hover en Tailwind/React:
				- El submenú solo aparece mientras el mouse está sobre el botón o el menú.
				- Si mueves el mouse muy rápido fuera del área, puede desaparecer.
				- Para mejorar la UX, puedes usar una librería de menú accesible (ej: @headlessui/react Menu) o manejar el estado con onMouseEnter/onMouseLeave.
			  */}
							<div className="relative group hidden md:block">
								<button className="hover:text-amber-600 transition-colors block py-2 md:py-0">
									Admin▾
								</button>
								<div className="absolute top-full left-0 mt-2 w-44 bg-white border border-amber-100 rounded-lg shadow-lg hidden group-hover:block z-50">
									<Link
										to="/admin/agregar-producto"
										className="block px-4 py-2 hover:bg-amber-50 text-sm text-gray-700"
										onClick={() => setMenuOpen(false)}
									>
										+ Tienda
									</Link>
									<Link
										to="/admin/productos"
										className="block px-4 py-2 hover:bg-amber-50 text-sm text-gray-700"
										onClick={() => setMenuOpen(false)}
									>
										Admin Tienda
									</Link>
									<Link
										to="/admin/agregar-perrito"
										className="block px-4 py-2 hover:bg-amber-50 text-sm text-gray-700"
										onClick={() => setMenuOpen(false)}
									>
										+ Perrito
									</Link>
									<Link
										to="/admin/agregar-post"
										className="block px-4 py-2 hover:bg-amber-50 text-sm text-gray-700"
										onClick={() => setMenuOpen(false)}
									>
										+ Blog
									</Link>
								</div>
							</div>

							{/* Menú vertical para móvil */}
							<div className="md:hidden flex flex-col items-center gap-1">
								<span className="text-amber-600 font-semibold mt-2">Admin</span>
								<Link
									to="/admin/agregar-producto"
									className="hover:text-amber-600 transition-colors block py-1"
									onClick={() => setMenuOpen(false)}
								>
									+ Tienda
								</Link>
								<Link
									to="/admin/productos"
									className="hover:text-amber-600 transition-colors block py-1"
									onClick={() => setMenuOpen(false)}
								>
									Admin Tienda
								</Link>
								<Link
									to="/admin/agregar-perrito"
									className="hover:text-amber-600 transition-colors block py-1"
									onClick={() => setMenuOpen(false)}
								>
									+ Perrito
								</Link>
								<Link
									to="/admin/agregar-post"
									className="hover:text-amber-600 transition-colors block py-1"
									onClick={() => setMenuOpen(false)}
								>
									+ Blog
								</Link>
							</div>
						</>
					)}
					<button
						onClick={handleLogout}
						className="text-red-500 hover:underline ml-0 md:ml-2 block py-2 md:py-0"
					>
						Cerrar sesión
					</button>
				</>
			) : (
				<Link
					to="/login"
					className="hover:text-amber-600 transition-colors block py-2 md:py-0"
					onClick={() => setMenuOpen(false)}
				>
					Login
				</Link>
			)}
		</>
	);

	return (
	<nav className="bg-white/90 backdrop-blur shadow-md px-4 md:px-10 py-3 flex justify-between items-center sticky top-0 z-50">
	  <div className="flex items-center gap-3 md:gap-4">
		<img src="/dog.svg" alt="Logo" className="w-9 h-9 md:w-8 md:h-8 animate-pulse" />
		<div className="flex flex-col">
		  <span className="text-[1.35rem] md:text-2xl font-black text-amber-500 tracking-tight font-poppins select-none whitespace-nowrap leading-tight drop-shadow-sm" style={{letterSpacing: '-0.5px'}}>
			<span className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 bg-clip-text text-transparent">Huellas</span>
			<span className="mx-1 text-amber-400">·</span>
			<span className="text-amber-700">de</span>
			<span className="mx-1 text-amber-400">·</span>
			<span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-amber-700 bg-clip-text text-transparent">Esperanza</span>
		  </span>
		  {isAuthenticated && userName && (
			<span className="text-xs text-gray-600 font-medium mt-0.5">
			  Hola, {capitalize(userName)}
			</span>
		  )}
		</div>
	  </div>
	  {/* Desktop nav */}
	  <div className="hidden md:flex gap-3 text-gray-700 font-medium items-center ml-4">
		{navLinks}
	  </div>
	  {/* Mobile hamburger */}
	  <div className="flex md:hidden items-center">
		<button
		  className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
		  onClick={() => setMenuOpen((open) => !open)}
		  aria-label="Abrir menú"
		>
		  <svg
			className="w-7 h-7 text-amber-600"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			viewBox="0 0 24 24"
		  >
			{menuOpen ? (
			  <path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18L18 6M6 6l12 12"
			  />
			) : (
			  <path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M4 8h16M4 16h16"
			  />
			)}
		  </svg>
		</button>
	  </div>
	  {/* Mobile menu */}
	  {menuOpen && (
		<div className="absolute top-full left-0 w-full bg-amber-50/95 shadow-lg flex flex-col items-center py-3 animate-fade-in z-40 text-amber-900">
		  {navLinks}
		</div>
	  )}
			<style>
				{`
		  .font-poppins { font-family: 'Poppins', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif; }
		  .animate-fade-in { animation: fadeIn 0.3s; }
		  @keyframes fadeIn {
			from { opacity: 0; transform: translateY(-10px); }
			to { opacity: 1; transform: translateY(0); }
		  }
		`}
			</style>
		</nav>
	);
}
