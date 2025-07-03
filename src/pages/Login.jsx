import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [tab, setTab] = useState("login");
	const [loginForm, setLoginForm] = useState({ email: "", password: "" });
	const [registerForm, setRegisterForm] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showRegPassword, setShowRegPassword] = useState(false);
	const [regSuccess, setRegSuccess] = useState(false);
	const [regTimer, setRegTimer] = useState(3);
	const navigate = useNavigate();

	// Validación en vivo
	const isValidEmail = (email) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
	const isValidPassword = (password) => password.length >= 6;

	const handleChange = (e, formSetter) => {
		formSetter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		const res = await fetch("http://localhost:5000/api/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(loginForm),
		});
		// const res = await fetch("http://localhost:5000/api/auth/register", {
		// 	method: "POST",
		// 	headers: { "Content-Type": "application/json" },
		// 	body: JSON.stringify({ ...registerForm, isAdmin: true }), // ⚠️ solo para pruebas
		// });

		setLoading(false);
		if (res.ok) {
			const data = await res.json();
			if (!data.isAdmin) {
				setError("No tienes permisos de administrador.");
				return;
			}
			localStorage.setItem("token", data.token);
			localStorage.setItem("name", data.name);
			localStorage.setItem("isAdmin", data.isAdmin);
			navigate("/admin/productos");
		} else {
			setError("Credenciales incorrectas");
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		const res = await fetch("http://localhost:5000/api/auth/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(registerForm),
		});
		setLoading(false);
		if (res.ok) {
			setTab("login");
			setRegSuccess(true);
			setError("Usuario creado correctamente. Redirigiendo...");
			let t = 3;
			setRegTimer(t);
			const interval = setInterval(() => {
				t--;
				setRegTimer(t);
				if (t === 0) {
					clearInterval(interval);
					setRegSuccess(false);
					setError("");
					navigate("/admin/productos");
				}
			}, 1000);
		} else {
			setError("No se pudo crear el usuario. Intenta con otro correo.");
		}
	};

	return (
		<section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-amber-50 to-white">
			<div className="bg-white/90 shadow-2xl rounded-3xl p-8 w-full max-w-md transition-all border border-amber-100 relative animate-fade-in">
				<div className="flex flex-col items-center mb-6">
					<span className="text-5xl mb-2 text-amber-400 drop-shadow">🔐</span>
					<h2 className="text-2xl font-extrabold text-amber-700 mb-1 tracking-tight">
						Bienvenido
					</h2>
					<p className="text-gray-500 text-sm text-center">
						Accede a tu cuenta o crea una nueva para apoyar a los perritos.
					</p>
				</div>
				<div className="flex mb-6 rounded-xl overflow-hidden border border-amber-100">
					<button
						className={`flex-1 py-2 font-semibold transition-colors duration-200 text-base ${
							tab === "login"
								? "bg-amber-500 text-white shadow-inner"
								: "bg-gray-50 text-gray-600 hover:bg-gray-100"
						}`}
						onClick={() => {
							setTab("login");
							setError("");
						}}
					>
						Iniciar sesión
					</button>
					<button
						className={`flex-1 py-2 font-semibold transition-colors duration-200 text-base ${
							tab === "register"
								? "bg-amber-500 text-white shadow-inner"
								: "bg-gray-50 text-gray-600 hover:bg-gray-100"
						}`}
						onClick={() => {
							setTab("register");
							setError("");
						}}
					>
						Crear cuenta
					</button>
				</div>
				{error && (
					<div
						className={`mb-4 text-center text-sm px-4 py-2 rounded-lg ${
							error.includes("correctamente")
								? "bg-green-100 text-green-700"
								: "bg-red-100 text-red-600"
						}`}
					>
						{error} {regSuccess && <span className="ml-2">({regTimer})</span>}
					</div>
				)}
				{tab === "login" ? (
					<form onSubmit={handleLogin} className="space-y-4 animate-fade-in">
						<div className="relative">
							<span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 text-xl">
								📧
							</span>
							<input
								name="email"
								type="email"
								placeholder="Correo electrónico"
								autoComplete="username"
								onChange={(e) => handleChange(e, setLoginForm)}
								className={`w-full border ${
									isValidEmail(loginForm.email) || !loginForm.email
										? "border-amber-200"
										: "border-red-300"
								} p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition`}
								required
							/>
						</div>
						<div className="relative">
							<span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 text-xl">
								🔒
							</span>
							<input
								name="password"
								type={showPassword ? "text" : "password"}
								placeholder="Contraseña"
								autoComplete="current-password"
								onChange={(e) => handleChange(e, setLoginForm)}
								className={`w-full border ${
									isValidPassword(loginForm.password) || !loginForm.password
										? "border-amber-200"
										: "border-red-300"
								} p-3 pl-10 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition`}
								required
							/>
							<button
								type="button"
								tabIndex={-1}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400 text-lg focus:outline-none"
								onClick={() => setShowPassword((v) => !v)}
								aria-label={
									showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
								}
							>
								{showPassword ? "🙈" : "👁️"}
							</button>
						</div>
						<button
							type="submit"
							className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition transform hover:scale-105 shadow"
							disabled={
								loading ||
								!isValidEmail(loginForm.email) ||
								!isValidPassword(loginForm.password)
							}
						>
							{loading ? "Entrando..." : "Entrar"}
						</button>
					</form>
				) : (
					<form onSubmit={handleRegister} className="space-y-4 animate-fade-in">
						<div className="relative">
							<span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 text-xl">
								👤
							</span>
							<input
								name="name"
								type="text"
								placeholder="Nombre completo"
								onChange={(e) => handleChange(e, setRegisterForm)}
								className="w-full border border-amber-200 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
								required
							/>
						</div>
						<div className="relative">
							<span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 text-xl">
								📧
							</span>
							<input
								name="email"
								type="email"
								placeholder="Correo electrónico"
								autoComplete="username"
								onChange={(e) => handleChange(e, setRegisterForm)}
								className={`w-full border ${
									isValidEmail(registerForm.email) || !registerForm.email
										? "border-amber-200"
										: "border-red-300"
								} p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition`}
								required
							/>
						</div>
						<div className="relative">
							<span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 text-xl">
								🔒
							</span>
							<input
								name="password"
								type={showRegPassword ? "text" : "password"}
								placeholder="Contraseña (mínimo 6 caracteres)"
								autoComplete="new-password"
								onChange={(e) => handleChange(e, setRegisterForm)}
								className={`w-full border ${
									isValidPassword(registerForm.password) ||
									!registerForm.password
										? "border-amber-200"
										: "border-red-300"
								} p-3 pl-10 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition`}
								required
							/>
							<button
								type="button"
								tabIndex={-1}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400 text-lg focus:outline-none"
								onClick={() => setShowRegPassword((v) => !v)}
								aria-label={
									showRegPassword ? "Ocultar contraseña" : "Mostrar contraseña"
								}
							>
								{showRegPassword ? "🙈" : "👁️"}
							</button>
						</div>
						<button
							type="submit"
							className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition transform hover:scale-105 shadow"
							disabled={
								loading ||
								!isValidEmail(registerForm.email) ||
								!isValidPassword(registerForm.password) ||
								!registerForm.name
							}
						>
							{loading ? "Creando..." : "Crear cuenta"}
						</button>
					</form>
				)}
				<style>{`
          .animate-fade-in {
            animation: fadeIn 0.4s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}</style>
			</div>
		</section>
	);
}
